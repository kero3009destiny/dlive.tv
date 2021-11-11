import { LivestreamAboutFrag, PanelAddNew } from '@/graphql/types';
import ApolloClient from 'apollo-client';
import LIVESTREAM_ABOUT_FRAG from '@/graphql/fragments/LivestreamAboutFrag.graphql';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { InternalError } from '@/models/error';

export const writeAddPanelCache = (
  client: ApolloClient<NormalizedCacheObject>,
  userId: string,
  newPanel: PanelAddNew.Panel
): InternalError | undefined => {
  const param = {
    id: userId,
    fragment: LIVESTREAM_ABOUT_FRAG
  };
  let data: LivestreamAboutFrag.Fragment | null;
  try {
    data = client.readFragment<LivestreamAboutFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no profile about fragment found with id: ${userId}`
    );
  }
  if (data.panels !== undefined) {
    data.panels.push(newPanel);
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeDeletePanelCache = (
  client: ApolloClient<NormalizedCacheObject>,
  panelId: number,
  userId: string
): InternalError | undefined => {
  const param = {
    id: userId,
    fragment: LIVESTREAM_ABOUT_FRAG
  };
  let data: LivestreamAboutFrag.Fragment | null;
  try {
    data = client.readFragment<LivestreamAboutFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no profile about fragment found with id: ${userId}`
    );
  }
  if (data.panels !== undefined) {
    for (let i = 0; i < data.panels.length; i++) {
      if (data.panels[i].id === panelId) {
        data.panels.splice(i, 1);
      }
    }
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeUpdatePanelCache = (
  client: ApolloClient<NormalizedCacheObject>,
  userId: string,
  updatePanel: PanelAddNew.Panel
): InternalError | undefined => {
  const param = {
    id: userId,
    fragment: LIVESTREAM_ABOUT_FRAG
  };
  let data: LivestreamAboutFrag.Fragment | null;
  try {
    data = client.readFragment<LivestreamAboutFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no profile about fragment found with id: ${userId}`
    );
  }
  if (data.panels !== undefined) {
    for (let i = 0; i < data.panels.length; i++) {
      if (data.panels[i].id === updatePanel.id) {
        data.panels[i] = updatePanel;
      }
    }
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeChangePanelOrderCache = (
  client: ApolloClient<NormalizedCacheObject>,
  panelOrder: number[],
  userId: string
): InternalError | undefined => {
  const param = {
    id: userId,
    fragment: LIVESTREAM_ABOUT_FRAG
  };
  let data: LivestreamAboutFrag.Fragment | null;
  try {
    data = client.readFragment<LivestreamAboutFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no profile about fragment found with id: ${userId}`
    );
  }
  if (data.panels !== undefined) {
    const panelId = new Map<number, LivestreamAboutFrag.Panels>();
    for (const panel of data.panels) {
      panelId.set(panel.id, panel);
    }
    const rst: LivestreamAboutFrag.Panels[] = [];
    for (const id of panelOrder) {
      const panel = panelId.get(id);
      if (panel !== undefined) {
        rst.push(panel);
      }
    }
    data.panels = rst;
    client.writeFragment({
      ...param,
      data
    });
  }
};
