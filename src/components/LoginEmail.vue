import { render, staticRenderFns } from "./LoginEmail.vue?vue&type=template&id=3886b25c&scoped=true&"
import script from "./LoginEmail.vue?vue&type=script&lang=ts&"
export * from "./LoginEmail.vue?vue&type=script&lang=ts&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "3886b25c",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VForm } from 'vuetify/lib'
installComponents(component, {VForm})
