import { render, staticRenderFns } from "./SettingsPhoneVerificationInput.vue?vue&type=template&id=95d93354&scoped=true&"
import script from "./SettingsPhoneVerificationInput.vue?vue&type=script&lang=ts&"
export * from "./SettingsPhoneVerificationInput.vue?vue&type=script&lang=ts&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "95d93354",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VAutocomplete } from 'vuetify/lib'
installComponents(component, {VAutocomplete})
