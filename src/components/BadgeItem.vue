import { render, staticRenderFns } from "./BadgeItem.vue?vue&type=template&id=004a042d&scoped=true&"
import script from "./BadgeItem.vue?vue&type=script&lang=ts&"
export * from "./BadgeItem.vue?vue&type=script&lang=ts&"
import style0 from "./BadgeItem.vue?vue&type=style&index=0&id=004a042d&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "004a042d",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VTooltip } from 'vuetify/lib'
installComponents(component, {VTooltip})
