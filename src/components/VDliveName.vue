import { render, staticRenderFns } from "./VDliveName.vue?vue&type=template&id=4a8d5bd3&scoped=true&"
import script from "./VDliveName.vue?vue&type=script&lang=ts&"
export * from "./VDliveName.vue?vue&type=script&lang=ts&"
import style0 from "./VDliveName.vue?vue&type=style&index=0&id=4a8d5bd3&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "4a8d5bd3",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VTooltip } from 'vuetify/lib'
installComponents(component, {VTooltip})
