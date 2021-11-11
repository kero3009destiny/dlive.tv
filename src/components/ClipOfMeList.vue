import { render, staticRenderFns } from "./ClipOfMeList.vue?vue&type=template&id=be0c4a04&"
import script from "./ClipOfMeList.vue?vue&type=script&lang=ts&"
export * from "./ClipOfMeList.vue?vue&type=script&lang=ts&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VSelect } from 'vuetify/lib'
installComponents(component, {VSelect})
