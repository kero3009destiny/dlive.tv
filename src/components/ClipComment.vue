import { render, staticRenderFns } from "./ClipComment.vue?vue&type=template&id=c9e5ebac&scoped=true&"
import script from "./ClipComment.vue?vue&type=script&lang=ts&"
export * from "./ClipComment.vue?vue&type=script&lang=ts&"
import style0 from "./ClipComment.vue?vue&type=style&index=0&id=c9e5ebac&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "c9e5ebac",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VTextarea } from 'vuetify/lib'
installComponents(component, {VTextarea})
