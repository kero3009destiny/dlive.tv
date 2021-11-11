import { render, staticRenderFns } from "./ProfileWallet.vue?vue&type=template&id=6ff5cbfe&scoped=true&"
import script from "./ProfileWallet.vue?vue&type=script&lang=ts&"
export * from "./ProfileWallet.vue?vue&type=script&lang=ts&"
import style0 from "./ProfileWallet.vue?vue&type=style&index=0&id=6ff5cbfe&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "6ff5cbfe",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VDataTable } from 'vuetify/lib'
import { VSelect } from 'vuetify/lib'
installComponents(component, {VDataTable,VSelect})
