import { render, staticRenderFns } from "./UserReferral.vue?vue&type=template&id=0e19302a&scoped=true&"
import script from "./UserReferral.vue?vue&type=script&lang=ts&"
export * from "./UserReferral.vue?vue&type=script&lang=ts&"
import style0 from "./UserReferral.vue?vue&type=style&index=0&id=0e19302a&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "0e19302a",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VBtn } from 'vuetify/lib'
import { VDataTable } from 'vuetify/lib'
installComponents(component, {VBtn,VDataTable})
