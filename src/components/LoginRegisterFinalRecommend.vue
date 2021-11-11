import { render, staticRenderFns } from "./LoginRegisterFinalRecommend.vue?vue&type=template&id=22839e6c&scoped=true&"
import script from "./LoginRegisterFinalRecommend.vue?vue&type=script&lang=ts&"
export * from "./LoginRegisterFinalRecommend.vue?vue&type=script&lang=ts&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "22839e6c",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VDialog } from 'vuetify/lib'
installComponents(component, {VDialog})
