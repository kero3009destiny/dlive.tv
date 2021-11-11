import { render, staticRenderFns } from "./LivestreamChannelSuspended.vue?vue&type=template&id=74b923e4&"
import script from "./LivestreamChannelSuspended.vue?vue&type=script&lang=ts&"
export * from "./LivestreamChannelSuspended.vue?vue&type=script&lang=ts&"


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
import { VBtn } from 'vuetify/lib'
installComponents(component, {VBtn})
