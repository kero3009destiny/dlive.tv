import { render, staticRenderFns } from "./VNSFWSwitch.vue?vue&type=template&id=44fc33e9&scoped=true&"
import script from "./VNSFWSwitch.vue?vue&type=script&lang=ts&"
export * from "./VNSFWSwitch.vue?vue&type=script&lang=ts&"
import style0 from "./VNSFWSwitch.vue?vue&type=style&index=0&id=44fc33e9&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "44fc33e9",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VIcon } from 'vuetify/lib'
import { VSwitch } from 'vuetify/lib'
import { VTooltip } from 'vuetify/lib'
installComponents(component, {VIcon,VSwitch,VTooltip})
