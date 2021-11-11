import PANEL_ADD_NEW from '@/graphql/mutations/PanelAddNew.graphql';
import PANEL_UPDATE_ABOUT from '@/graphql/mutations/PanelUpdateAbout.graphql';
import PANEL_DELETE_ABOUT from '@/graphql/mutations/PanelDeleteAbout.graphql';
import PANEL_ORDER_CHANGE from '@/graphql/mutations/PanelOrderChange.graphql';
import {
  PanelType,
  PanelAddNew,
  PanelUpdateAbout,
  PanelDeleteAbout,
  PanelUpdateInput,
  PanelOrderChange
} from '@/graphql/types';
import Vue from 'vue';
import { DocumentNode } from 'graphql';
import {
  writeAddPanelCache,
  writeDeletePanelCache,
  writeUpdatePanelCache,
  writeChangePanelOrderCache
} from '@/apollo/cache/profileAbout';

export const addPanel = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
  },
  userId: string
): Promise<void> => {
  const variables: PanelAddNew.Variables = {
    input: {
      type: PanelType.Default
    }
  };
  const { data } = await vue.$apollo.mutate<PanelAddNew.Mutation>({
    mutation: PANEL_ADD_NEW,
    variables
  });
  const resp = data.panelAdd;
  vue.$handleError(resp.err, PANEL_ADD_NEW, variables);
  if (resp.panel) {
    writeAddPanelCache(vue.$apollo.provider.defaultClient, userId, resp.panel);
  }
};

export const updatePanel = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  input: PanelUpdateInput,
  userId: string
): Promise<void> => {
  const variables: PanelUpdateAbout.Variables = {
    input
  };
  const { data } = await vue.$apollo.mutate<PanelUpdateAbout.Mutation>({
    mutation: PANEL_UPDATE_ABOUT,
    variables
  });
  const resp = data.panelUpdate;
  vue.$handleError(resp.err, PANEL_UPDATE_ABOUT, variables);
  vue.$success('profileAbout.SubmitSuccess');
  if (resp.panel) {
    writeUpdatePanelCache(
      vue.$apollo.provider.defaultClient,
      userId,
      resp.panel
    );
  }
};

export const deletePanel = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  panelId: number,
  userId: string
): Promise<void> => {
  const variables: PanelDeleteAbout.Variables = {
    input: {
      id: panelId
    }
  };
  const { data } = await vue.$apollo.mutate<PanelDeleteAbout.Mutation>({
    mutation: PANEL_DELETE_ABOUT,
    variables
  });
  const resp = data.panelDelete;
  vue.$handleError(resp.err, PANEL_DELETE_ABOUT, variables);
  vue.$success('profileAbout.DeleteSuccess');
  writeDeletePanelCache(vue.$apollo.provider.defaultClient, panelId, userId);
};

export const changePanelOrder = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  panelOrder: number[],
  userId: string
): Promise<void> => {
  const variables: PanelOrderChange.Variables = {
    input: {
      ids: panelOrder
    }
  };
  const { data } = await vue.$apollo.mutate<PanelOrderChange.Mutation>({
    mutation: PANEL_ORDER_CHANGE,
    variables
  });
  const resp = data.panelOrder;
  vue.$handleError(resp.err, PANEL_ORDER_CHANGE, variables);
  vue.$success('profileAbout.ChangeOrderSuccess');
  writeChangePanelOrderCache(
    vue.$apollo.provider.defaultClient,
    panelOrder,
    userId
  );
};
