import { DocumentNode, print } from 'graphql';

export class ServerMutationError extends Error {
  public constructor(
    code: {
      code: number;
      message: string;
    },
    mutation: DocumentNode,
    variables?: object
  ) {
    const msg = {
      code,
      mutation: print(mutation),
      variables
    };
    super(JSON.stringify(msg));
    this.name = 'ServerMutationError';
  }
}
