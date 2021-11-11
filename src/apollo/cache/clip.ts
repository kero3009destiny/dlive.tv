import {
  ClipViewCacheFrag,
  ClipCommentItemFrag,
  ClipCommentReplies,
  ClipComment,
  ClipCommentOrderOption
} from '@/graphql/types';
import ApolloClient from 'apollo-client';
import CLIP_VIEW_CACHE_FRAG from '@/graphql/fragments/ClipViewCacheFrag.graphql';
import CLIP_COMMENT_ITEM_FRAG from '@/graphql/fragments/ClipCommentItemFrag.graphql';
import CLIP_COMMENT from '@/graphql/queries/ClipComment.graphql';
import CLIP_COMMENT_REPLIES from '@/graphql/queries/ClipCommentReplies.graphql';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { DataProxy } from 'apollo-cache';
import { InternalError } from '@/models/error';

// This should only be called if logged in and `isFollowing` and `isMe` is in cache.
export const writeClipVoteCache = (
  client: ApolloClient<NormalizedCacheObject>,
  state: boolean,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: CLIP_VIEW_CACHE_FRAG
  };
  let data: ClipViewCacheFrag.Fragment | null;
  try {
    data = client.readFragment<ClipViewCacheFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no clip view fragment found with id: ${id}`);
  }
  if (data.hasUpvoted === state) {
    return new InternalError(
      `invalid state with id: ${id}, state; ${state}, cache: ${data}`
    );
  }
  if (data.hasUpvoted !== undefined && data.upvotes !== undefined) {
    data.hasUpvoted = state;
    data.upvotes += state ? 1 : -1;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeClipPickCache = (
  client: ApolloClient<NormalizedCacheObject>,
  state: boolean,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: CLIP_VIEW_CACHE_FRAG
  };
  let data: ClipViewCacheFrag.Fragment | null;
  try {
    data = client.readFragment<ClipViewCacheFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no clip view fragment found with id: ${id}`);
  }
  if (data.picked === state) {
    return new InternalError(
      `invalid state with id: ${id}, state; ${state}, cache: ${data}`
    );
  }
  if (data.picked !== undefined) {
    data.picked = state;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeClipCommentCache = (
  client: ApolloClient<NormalizedCacheObject>,
  comment: ClipCommentItemFrag.Fragment,
  id: string,
  first: number
): InternalError | undefined => {
  const param: DataProxy.Query<ClipComment.Variables> = {
    query: CLIP_COMMENT,
    variables: {
      id,
      first,
      option: ClipCommentOrderOption.MostLike
    }
  };
  let data: ClipComment.Query | null;
  try {
    data = client.readQuery<ClipComment.Query>(param);
  } catch (err) {
    // console.log(err);
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no clip comment query found with id: ${id}`);
  }
  if (data.clip !== undefined && data.clip !== null) {
    data.clip.clipComments.list.unshift(comment);
    client.writeQuery({
      ...param,
      data
    });
  }
};

export const writeClipReplyCache = (
  client: ApolloClient<NormalizedCacheObject>,
  comment: ClipCommentItemFrag.Fragment,
  id: string,
  first: number
): InternalError | undefined => {
  const param: DataProxy.Query<ClipCommentReplies.Variables> = {
    query: CLIP_COMMENT_REPLIES,
    variables: {
      id,
      first
    }
  };
  let data: ClipCommentReplies.Query | null;
  try {
    data = client.readQuery<ClipCommentReplies.Query>(param);
  } catch (err) {
    // console.log(err);
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no clip comment replies query found with id: ${id}`
    );
  }
  if (
    data.clipCommentReplies !== undefined &&
    data.clipCommentReplies !== null
  ) {
    data.clipCommentReplies.list.push(comment);
    client.writeQuery({
      ...param,
      data
    });
  }
};

export const writeCommentLikeCache = (
  client: ApolloClient<NormalizedCacheObject>,
  state: boolean,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: CLIP_COMMENT_ITEM_FRAG,
    fragmentName: 'ClipCommentItemFrag'
  };
  let data: ClipCommentItemFrag.Fragment | null;
  try {
    data = client.readFragment<ClipCommentItemFrag.Fragment>(param);
  } catch (err) {
    // console.log(err);
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no clip comment item fragment found with id: ${id}`
    );
  }
  if (data.liked === state) {
    return new InternalError(
      `invalid state with id: ${id}, state; ${state}, cache: ${data}`
    );
  }
  if (data.liked !== undefined && data.likeCount !== undefined) {
    data.liked = state;
    data.likeCount += state ? 1 : -1;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeClipMostLikeCommentDeleteCache = (
  client: ApolloClient<NormalizedCacheObject>,
  commentID: string,
  clipID: string
): InternalError | undefined => {
  const param: DataProxy.Query<ClipComment.Variables> = {
    query: CLIP_COMMENT,
    variables: {
      id: clipID,
      first: 3,
      option: ClipCommentOrderOption.MostLike
    }
  };
  let data: ClipComment.Query | null;
  try {
    data = client.readQuery<ClipComment.Query>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no clip comment query found with id: ${clipID}`);
  }
  if (data.clip !== undefined && data.clip !== null) {
    data.clip.clipComments.list = data.clip.clipComments.list.filter(
      comment => {
        return comment.id !== commentID;
      }
    );
    client.writeQuery({
      ...param,
      data
    });
  }
};

export const writeClipCommentDeleteCache = (
  client: ApolloClient<NormalizedCacheObject>,
  commentID: string,
  clipID: string,
  from: 'latest' | 'mostLike'
): InternalError | undefined => {
  const param: DataProxy.Query<ClipComment.Variables> = {
    query: CLIP_COMMENT,
    variables: {
      id: clipID,
      first: 10,
      option: ClipCommentOrderOption.Latest
    }
  };
  let data: ClipComment.Query | null;
  try {
    data = client.readQuery<ClipComment.Query>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no clip comment query found with id: ${clipID}`);
  }
  if (data.clip !== undefined && data.clip !== null) {
    data.clip.clipComments.list = data.clip.clipComments.list.filter(
      comment => {
        return comment.id !== commentID;
      }
    );
    client.writeQuery({
      ...param,
      data
    });
  }
  if (from === 'mostLike') {
    writeClipMostLikeCommentDeleteCache(client, commentID, clipID);
  }
};

export const writeClipReplyDeleteCache = (
  client: ApolloClient<NormalizedCacheObject>,
  commentID: string,
  replyID: string
): InternalError | undefined => {
  const param: DataProxy.Query<ClipCommentReplies.Variables> = {
    query: CLIP_COMMENT_REPLIES,
    variables: {
      id: commentID,
      first: 10
    }
  };
  let data: ClipCommentReplies.Query | null;
  try {
    data = client.readQuery<ClipCommentReplies.Query>(param);
  } catch (err) {
    // console.log(err);
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no clip comment replies query found with id: ${commentID}`
    );
  }
  if (
    data.clipCommentReplies !== undefined &&
    data.clipCommentReplies !== null
  ) {
    data.clipCommentReplies.list = data.clipCommentReplies.list.filter(
      reply => {
        return reply.id !== replyID;
      }
    );
    client.writeQuery({
      ...param,
      data
    });
  }
};
