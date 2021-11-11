import { render, staticRenderFns } from "./ProfileVideo.vue?vue&type=template&id=6d2df226&scoped=true&"
import script from "./ProfileVideo.vue?vue&type=script&lang=ts&"
export * from "./ProfileVideo.vue?vue&type=script&lang=ts&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "6d2df226",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VFlex } from 'vuetify/lib'
installComponents(component, {VFlex})
