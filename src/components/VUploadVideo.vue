import { render, staticRenderFns } from "./VUploadVideo.vue?vue&type=template&id=588e0cc2&"
import script from "./VUploadVideo.vue?vue&type=script&lang=ts&"
export * from "./VUploadVideo.vue?vue&type=script&lang=ts&"


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
import { VProgressLinear } from 'vuetify/lib'
installComponents(component, {VProgressLinear})
