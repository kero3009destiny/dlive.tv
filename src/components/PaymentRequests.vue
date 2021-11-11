import { render, staticRenderFns } from "./PaymentRequests.vue?vue&type=template&id=3f047ca0&scoped=true&"
import script from "./PaymentRequests.vue?vue&type=script&lang=ts&"
export * from "./PaymentRequests.vue?vue&type=script&lang=ts&"
import style0 from "./PaymentRequests.vue?vue&type=style&index=0&id=3f047ca0&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "3f047ca0",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VDataTable } from 'vuetify/lib'
installComponents(component, {VDataTable})
