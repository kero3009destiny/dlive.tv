import { render, staticRenderFns } from "./TreasureChestMobileContent.vue?vue&type=template&id=7c694eb1&"
import script from "./TreasureChestMobileContent.vue?vue&type=script&lang=ts&"
export * from "./TreasureChestMobileContent.vue?vue&type=script&lang=ts&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VCard } from 'vuetify/lib'
import { VDialog } from 'vuetify/lib'
installComponents(component, {VCard,VDialog})
