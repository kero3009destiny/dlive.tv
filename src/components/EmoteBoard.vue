import { render, staticRenderFns } from "./EmoteBoard.vue?vue&type=template&id=29ddec3d&scoped=true&"
import script from "./EmoteBoard.vue?vue&type=script&lang=ts&"
export * from "./EmoteBoard.vue?vue&type=script&lang=ts&"
import style0 from "./EmoteBoard.vue?vue&type=style&index=0&id=29ddec3d&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "29ddec3d",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VTabItem } from 'vuetify/lib'
import { VTabsItems } from 'vuetify/lib'
installComponents(component, {VTabItem,VTabsItems})
