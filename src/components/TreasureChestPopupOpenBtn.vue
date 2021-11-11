import { render, staticRenderFns } from "./TreasureChestPopupOpenBtn.vue?vue&type=template&id=dad11600&scoped=true&"
import script from "./TreasureChestPopupOpenBtn.vue?vue&type=script&lang=ts&"
export * from "./TreasureChestPopupOpenBtn.vue?vue&type=script&lang=ts&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "dad11600",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VIcon } from 'vuetify/lib'
import { VTooltip } from 'vuetify/lib'
installComponents(component, {VIcon,VTooltip})
