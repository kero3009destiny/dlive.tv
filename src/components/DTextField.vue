import { render, staticRenderFns } from "./DTextField.vue?vue&type=template&id=2148815a&scoped=true&"
import script from "./DTextField.vue?vue&type=script&lang=ts&"
export * from "./DTextField.vue?vue&type=script&lang=ts&"
import style0 from "./DTextField.vue?vue&type=style&index=0&id=2148815a&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "2148815a",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VTextField } from 'vuetify/lib'
import { VTextarea } from 'vuetify/lib'
installComponents(component, {VTextField,VTextarea})
