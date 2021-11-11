import { render, staticRenderFns } from "./MyPurchase.vue?vue&type=template&id=69e01d10&scoped=true&"
import script from "./MyPurchase.vue?vue&type=script&lang=ts&"
export * from "./MyPurchase.vue?vue&type=script&lang=ts&"
import style0 from "./MyPurchase.vue?vue&type=style&index=0&id=69e01d10&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "69e01d10",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VDataTable } from 'vuetify/lib'
import { VTextarea } from 'vuetify/lib'
installComponents(component, {VDataTable,VTextarea})
