import { render, staticRenderFns } from "./Settings.vue?vue&type=template&id=1455557f&scoped=true&"
import script from "./Settings.vue?vue&type=script&lang=ts&"
export * from "./Settings.vue?vue&type=script&lang=ts&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "1455557f",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VExpansionPanel } from 'vuetify/lib'
import { VExpansionPanelContent } from 'vuetify/lib'
installComponents(component, {VExpansionPanel,VExpansionPanelContent})
