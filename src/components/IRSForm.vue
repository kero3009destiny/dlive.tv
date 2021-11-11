import { render, staticRenderFns } from "./IRSForm.vue?vue&type=template&id=6c84c502&scoped=true&"
import script from "./IRSForm.vue?vue&type=script&lang=ts&"
export * from "./IRSForm.vue?vue&type=script&lang=ts&"
import style0 from "./IRSForm.vue?vue&type=style&index=0&id=6c84c502&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "6c84c502",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VCheckbox } from 'vuetify/lib'
import { VRadio } from 'vuetify/lib'
import { VRadioGroup } from 'vuetify/lib'
import { VSelect } from 'vuetify/lib'
installComponents(component, {VCheckbox,VRadio,VRadioGroup,VSelect})
