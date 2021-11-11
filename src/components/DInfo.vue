import { render, staticRenderFns } from "./DInfo.vue?vue&type=template&id=296053b8&scoped=true&"
import script from "./DInfo.vue?vue&type=script&lang=ts&"
export * from "./DInfo.vue?vue&type=script&lang=ts&"
import style0 from "./DInfo.vue?vue&type=style&index=0&id=296053b8&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "296053b8",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VTooltip } from 'vuetify/lib'
installComponents(component, {VTooltip})
