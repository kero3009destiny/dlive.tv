import { render, staticRenderFns } from "./Stake.vue?vue&type=template&id=56b5eb0c&scoped=true&"
import script from "./Stake.vue?vue&type=script&lang=ts&"
export * from "./Stake.vue?vue&type=script&lang=ts&"
import style0 from "./Stake.vue?vue&type=style&index=0&id=56b5eb0c&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "56b5eb0c",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VDataTable } from 'vuetify/lib'
import { VDialog } from 'vuetify/lib'
import { VSelect } from 'vuetify/lib'
import { VTabItem } from 'vuetify/lib'
import { VTabsItems } from 'vuetify/lib'
installComponents(component, {VDataTable,VDialog,VSelect,VTabItem,VTabsItems})
