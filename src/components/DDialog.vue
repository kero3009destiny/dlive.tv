import { render, staticRenderFns } from "./DDialog.vue?vue&type=template&id=69050fea&scoped=true&"
import script from "./DDialog.vue?vue&type=script&lang=ts&"
export * from "./DDialog.vue?vue&type=script&lang=ts&"
import style0 from "./DDialog.vue?vue&type=style&index=0&id=69050fea&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "69050fea",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VDialog } from 'vuetify/lib'
installComponents(component, {VDialog})
