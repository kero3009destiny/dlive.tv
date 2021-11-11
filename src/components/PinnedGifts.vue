import { render, staticRenderFns } from "./PinnedGifts.vue?vue&type=template&id=7ace55fd&scoped=true&"
import script from "./PinnedGifts.vue?vue&type=script&lang=ts&"
export * from "./PinnedGifts.vue?vue&type=script&lang=ts&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "7ace55fd",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VIcon } from 'vuetify/lib'
installComponents(component, {VIcon})
