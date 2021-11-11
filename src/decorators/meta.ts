import { createDecorator } from 'vue-class-component';

// one additional parameter is init, which is the initial value of the query result.

/**
 * decorator of a meta
 * @param  options VueApolloQueryOptions
 * @return PropertyDecorator | void
 */
export function Meta(options: any): PropertyDecorator {
  return createDecorator((componentOptions, k) => {
    if (
      componentOptions.metaInfo === undefined ||
      componentOptions.metaInfo === null
    ) {
      componentOptions.metaInfo = options.metaInfo;
    }
    // no need to do the right type inference here, nothing will be checked.
  }) as any;
}
