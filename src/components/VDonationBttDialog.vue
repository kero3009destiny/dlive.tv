import { render, staticRenderFns } from "./VDonationBttDialog.vue?vue&type=template&id=c889ce32&scoped=true&"
import script from "./VDonationBttDialog.vue?vue&type=script&lang=ts&"
export * from "./VDonationBttDialog.vue?vue&type=script&lang=ts&"
import style0 from "./VDonationBttDialog.vue?vue&type=style&index=0&id=c889ce32&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "c889ce32",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VBtn } from 'vuetify/lib'
import { VTabItem } from 'vuetify/lib'
import { VTabsItems } from 'vuetify/lib'
import { VTooltip } from 'vuetify/lib'
installComponents(component, {VBtn,VTabItem,VTabsItems,VTooltip})
