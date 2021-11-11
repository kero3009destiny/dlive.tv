import CLIP_COMMENT_ADD from '@/graphql/mutations/ClipCommentAdd.graphql';
import CLIP_COMMENT_LIKE from '@/graphql/mutations/ClipCommentLike.graphql';
import CLIP_COMMENT_DELETE from '@/graphql/mutations/ClipCommentDelete.graphql';
import CLIP_UPVOTE from '@/graphql/mutations/ClipUpvote.graphql';
import CLIP_UNVOTE from '@/graphql/mutations/ClipUnvote.graphql';
import CLIP_SHARE from '@/graphql/mutations/ClipShare.graphql';
import CLIP_ADD from '@/graphql/mutations/ClipAdd.graphql';
import CLIP_PICK from '@/graphql/mutations/ClipPick.graphql';
import CLIP_UNPICK from '@/graphql/mutations/ClipUnpick.graphql';
import CLIP_DELETE from '@/graphql/mutations/ClipDelete.graphql';
import CLIP_COMMENT_DELETE_AND_MUTE from '@/graphql/mutations/ClipCommentDeleteAndMute.graphql';
import CLIP_VIEW_ADD from '@/graphql/mutations/ClipViewAdd.graphql';
import CLIP_MOMENT_ADD from '@/graphql/mutations/ClipMomentAdd.graphql';
import {
  ClipCommentAdd,
  ClipCommentLike,
  ClipCommentLikeAction,
  ClipCommentDelete,
  ClipUpvote,
  ClipUnvote,
  ClipShare,
  ClipAdd,
  ClipPick,
  ClipUnpick,
  ClipDelete,
  ClipCommentDeleteAndMute,
  ClipViewAdd,
  ClipMomentAdd,
  Maybe,
  ClipCommentItemFrag
} from '@/graphql/types';
import {
  writeClipVoteCache,
  writeClipCommentCache,
  writeCommentLikeCache,
  writeClipReplyCache,
  writeClipPickCache,
  writeClipCommentDeleteCache,
  writeClipReplyDeleteCache
} from '../cache/clip';
import Vue from 'vue';
import { DocumentNode } from 'graphql';

export const clipComment = async (
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
  content: string,
  clipID: string,
  first: number,
  commentID?: string,
  replyID?: string,
  replyFetched?: boolean
): Promise<Maybe<ClipCommentItemFrag.Fragment> | undefined> => {
  const variables: ClipCommentAdd.Variables = {
    content,
    clipID,
    commentID,
    replyID
  };
  const { data } = await vue.$apollo.mutate<ClipCommentAdd.Mutation>({
    mutation: CLIP_COMMENT_ADD,
    variables
  });
  const resp = data.clipComment;
  vue.$handleError(resp.err, CLIP_COMMENT_ADD, variables);
  if (resp.clipComment === null) {
    return;
  }
  let err;
  if (commentID) {
    if (replyFetched === false) {
      return resp.clipComment;
    }
    err = writeClipReplyCache(
      vue.$apollo.provider.defaultClient,
      resp.clipComment,
      commentID,
      first
    );
  } else {
    err = writeClipCommentCache(
      vue.$apollo.provider.defaultClient,
      resp.clipComment,
      clipID,
      first
    );
  }
  if (err !== undefined) {
    throw err;
  }
  return resp.clipComment;
};

export const clipCommentLike = async (
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
  id: string,
  action: ClipCommentLikeAction
): Promise<void> => {
  const variables: ClipCommentLike.Variables = {
    id,
    action
  };
  const { data } = await vue.$apollo.mutate<ClipCommentLike.Mutation>({
    mutation: CLIP_COMMENT_LIKE,
    variables
  });
  const resp = data.clipCommentLike;
  vue.$handleError(resp.err, CLIP_COMMENT_LIKE, variables);
  if (action === ClipCommentLikeAction.Like) {
    vue.$success('Like success');
  } else {
    vue.$success('Unlike success');
  }
  const err = writeCommentLikeCache(
    vue.$apollo.provider.defaultClient,
    action === ClipCommentLikeAction.Like ? true : false,
    id
  );
  if (err !== undefined) {
    throw err;
  }
};

export const clipCommentDelete = async (
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
  commentID: string,
  clipID: string,
  from: 'latest' | 'mostLike'
): Promise<void> => {
  const variables: ClipCommentDelete.Variables = {
    id: commentID
  };
  const { data } = await vue.$apollo.mutate<ClipCommentDelete.Mutation>({
    mutation: CLIP_COMMENT_DELETE,
    variables
  });
  const resp = data.clipCommentDelete;
  vue.$handleError(resp.err, CLIP_COMMENT_DELETE, variables);
  vue.$success('Delete success');
  const err = writeClipCommentDeleteCache(
    vue.$apollo.provider.defaultClient,
    commentID,
    clipID,
    from
  );
  if (err !== undefined) {
    throw err;
  }
};

export const clipReplyDelete = async (
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
  commentID: string,
  from: 'new' | 'fetched',
  replyID: string
): Promise<void> => {
  const variables: ClipCommentDelete.Variables = {
    id: replyID
  };
  const { data } = await vue.$apollo.mutate<ClipCommentDelete.Mutation>({
    mutation: CLIP_COMMENT_DELETE,
    variables
  });
  const resp = data.clipCommentDelete;
  vue.$handleError(resp.err, CLIP_COMMENT_DELETE, variables);
  vue.$success('Delete success');
  let err;
  if (from === 'new') {
    return;
  }
  if (from === 'fetched') {
    if (replyID) {
      err = writeClipReplyDeleteCache(
        vue.$apollo.provider.defaultClient,
        commentID,
        replyID
      );
    }
  }
  if (err !== undefined) {
    throw err;
  }
};

export const clipCommentDeleteAndMute = async (
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
  commentID: string,
  clipID: string,
  from: 'latest' | 'mostLike'
): Promise<void> => {
  const variables: ClipCommentDeleteAndMute.Variables = {
    id: commentID
  };
  const { data } = await vue.$apollo.mutate<ClipCommentDeleteAndMute.Mutation>({
    mutation: CLIP_COMMENT_DELETE_AND_MUTE,
    variables
  });
  const resp = data.clipCommentDeleteAndMute;
  vue.$handleError(resp.err, CLIP_COMMENT_DELETE_AND_MUTE, variables);
  vue.$success('Delete and mute success');
  const err = writeClipCommentDeleteCache(
    vue.$apollo.provider.defaultClient,
    commentID,
    clipID,
    from
  );
  if (err !== undefined) {
    throw err;
  }
};

export const clipReplyDeleteAndMute = async (
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
  commentID: string,
  from: 'new' | 'fetched',
  replyID: string
): Promise<void> => {
  const variables: ClipCommentDeleteAndMute.Variables = {
    id: replyID
  };
  const { data } = await vue.$apollo.mutate<ClipCommentDeleteAndMute.Mutation>({
    mutation: CLIP_COMMENT_DELETE_AND_MUTE,
    variables
  });
  const resp = data.clipCommentDeleteAndMute;
  vue.$handleError(resp.err, CLIP_COMMENT_DELETE_AND_MUTE, variables);
  vue.$success('Delete and mute success');
  let err;
  if (from === 'new') {
    return;
  }
  if (from === 'fetched') {
    if (replyID) {
      err = writeClipReplyDeleteCache(
        vue.$apollo.provider.defaultClient,
        commentID,
        replyID
      );
    }
  }
  if (err !== undefined) {
    throw err;
  }
};

export const clipUpvote = async (
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
  id: string
): Promise<void> => {
  const variables: ClipUpvote.Variables = {
    id
  };
  const { data } = await vue.$apollo.mutate<ClipUpvote.Mutation>({
    mutation: CLIP_UPVOTE,
    variables
  });
  const resp = data.clipUpvote;
  vue.$handleError(resp.err, CLIP_UPVOTE, variables);
  vue.$success('Like success');
  const err = writeClipVoteCache(vue.$apollo.provider.defaultClient, true, id);
  if (err !== undefined) {
    throw err;
  }
};

export const clipUnvote = async (
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
  id: string
): Promise<void> => {
  const variables: ClipUnvote.Variables = {
    id
  };
  const { data } = await vue.$apollo.mutate<ClipUnvote.Mutation>({
    mutation: CLIP_UNVOTE,
    variables
  });
  const resp = data.clipUnvote;
  vue.$handleError(resp.err, CLIP_UNVOTE, variables);
  vue.$success('Unlike success');
  const err = writeClipVoteCache(vue.$apollo.provider.defaultClient, false, id);
  if (err !== undefined) {
    throw err;
  }
};

export const clipShare = async (
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
  id: string
): Promise<void> => {
  const variables: ClipShare.Variables = {
    id
  };
  const { data } = await vue.$apollo.mutate<ClipShare.Mutation>({
    mutation: CLIP_SHARE,
    variables
  });
  const resp = data.clipShare;
  vue.$handleError(resp.err, CLIP_SHARE, variables);
};

export const clipAdd = async (
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
  variables: ClipAdd.Variables
): Promise<ClipAdd.ClipAdd> => {
  const { data } = await vue.$apollo.mutate<ClipAdd.Mutation>({
    mutation: CLIP_ADD,
    variables
  });
  const resp = data.clipAdd;
  vue.$handleError(resp.err, CLIP_ADD, variables);
  return resp;
};

export const clipPick = async (
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
  id: string
): Promise<void> => {
  const variables: ClipPick.Variables = {
    id
  };
  const { data } = await vue.$apollo.mutate<ClipPick.Mutation>({
    mutation: CLIP_PICK,
    variables
  });
  const resp = data.clipPick;
  vue.$handleError(resp.err, CLIP_PICK, variables);
  vue.$success('Pick success');
  const err = writeClipPickCache(vue.$apollo.provider.defaultClient, true, id);
  if (err !== undefined) {
    throw err;
  }
};

export const clipUnpick = async (
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
  id: string
): Promise<void> => {
  const variables: ClipUnpick.Variables = {
    id
  };
  const { data } = await vue.$apollo.mutate<ClipUnpick.Mutation>({
    mutation: CLIP_UNPICK,
    variables
  });
  const resp = data.clipUnpick;
  vue.$handleError(resp.err, CLIP_UNPICK, variables);
  vue.$success('Unpick success');
  const err = writeClipPickCache(vue.$apollo.provider.defaultClient, false, id);
  if (err !== undefined) {
    throw err;
  }
};

export const clipDelete = async (
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
  id: string
): Promise<void> => {
  const variables: ClipDelete.Variables = {
    id
  };
  const { data } = await vue.$apollo.mutate<ClipDelete.Mutation>({
    mutation: CLIP_DELETE,
    variables
  });
  const resp = data.clipDelete;
  vue.$handleError(resp.err, CLIP_DELETE, variables);
  vue.$success('Delete success');
};

export const clipViewAdd = async (
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
  id: string
): Promise<void> => {
  const variables: ClipViewAdd.Variables = {
    id
  };
  const { data } = await vue.$apollo.mutate<ClipViewAdd.Mutation>({
    mutation: CLIP_VIEW_ADD,
    variables
  });
  const resp = data.clipViewAdd;
  vue.$handleError(resp.err, CLIP_VIEW_ADD, variables);
};

export const clipMomentAdd = async (
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
  variables: ClipMomentAdd.Variables
): Promise<void> => {
  const { data } = await vue.$apollo.mutate<ClipMomentAdd.Mutation>({
    mutation: CLIP_MOMENT_ADD,
    variables
  });
  const resp = data.clipMomentAdd;
  vue.$handleError(resp.err, CLIP_MOMENT_ADD, variables);
  vue.$success('Upload clip success');
};
