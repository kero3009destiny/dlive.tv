import { render, staticRenderFns } from "./LivestreamProfile.vue?vue&type=template&id=cd2ae1dc&scoped=true&"
import script from "./LivestreamProfile.vue?vue&type=script&lang=ts&"
export * from "./LivestreamProfile.vue?vue&type=script&lang=ts&"
import style0 from "./LivestreamProfile.vue?vue&type=style&index=0&id=cd2ae1dc&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "cd2ae1dc",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VTabItem } from 'vuetify/lib'
import { VTabsItems } from 'vuetify/lib'
installComponents(component, {VTabItem,VTabsItems})
