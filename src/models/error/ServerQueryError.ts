import { GraphQLError } from 'graphql';

export class ServerQueryError extends Error {
  public constructor(
    err: ReadonlyArray<GraphQLError>,
    queryName: string,
    variables?: object
  ) {
    const msg = {
      variables,
      queryName,
      err
    };
    super(JSON.stringify(msg));
    this.name = 'ServerQueryError';
  }
}
