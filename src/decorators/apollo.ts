// XXX(yumin): after updated to our own vue-apollo, (which this type is exported),
// change this back to enable type check on query options.
import { VueApolloOptions } from 'vue-apollo';
import { createDecorator } from 'vue-class-component';

// one additional parameter is init, which is the initial value of the query result.
interface ApolloQueryDecoratorOptions<V>
  extends VueApolloOptions.VueApolloQueryOptions<V, any> {
  init?: any;
  debounce?: number;
  initDebounce?: boolean;
}

/**
 * decorator of a apollo
 * @param  options VueApolloQueryOptions
 * @return PropertyDecorator | void
 */
export function ApolloQuery<V>(
  options: ApolloQueryDecoratorOptions<V>
): PropertyDecorator {
  return createDecorator((componentOptions, k) => {
    // extends data hook to init apollo value.
    if (componentOptions.data === undefined || componentOptions.data === null) {
      componentOptions.data = () => {
        return {};
      };
    }

    // XXX(yumin): declare variable even if it's undefined.
    const prevDataHook = componentOptions.data;
    componentOptions.data = () => {
      // XXX(yumin): const reference, more like (T* const rst), not (const T*) in C++.
      const rst = (prevDataHook as any)();
      rst[k] = options.init; // options.init may be undefined, it's ok and expected.
      return rst;
    };

    if (
      componentOptions.apollo === undefined ||
      componentOptions.apollo === null
    ) {
      componentOptions.apollo = {};
    }
    // no need to do the right type inference here, nothing will be checked.
    componentOptions.apollo[k] = options as any;
  }) as any;
}
