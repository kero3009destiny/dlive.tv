import { DocumentNode, print } from 'graphql';

export class ServerMutationInconsistentError extends Error {
  public constructor(
    resp: object,
    fields: string[],
    mutation: DocumentNode,
    variables?: object
  ) {
    const msg = {
      resp,
      fields,
      mutation: print(mutation),
      variables
    };
    super(JSON.stringify(msg));
    this.name = 'ServerMutationInconsistentError';
  }
}
