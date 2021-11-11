import { render, staticRenderFns } from "./VEmoteBoardEmoji.vue?vue&type=template&id=7c84fa06&scoped=true&"
import script from "./VEmoteBoardEmoji.vue?vue&type=script&lang=ts&"
export * from "./VEmoteBoardEmoji.vue?vue&type=script&lang=ts&"
import style0 from "./VEmoteBoardEmoji.vue?vue&type=style&index=0&id=7c84fa06&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "7c84fa06",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VTooltip } from 'vuetify/lib'
installComponents(component, {VTooltip})
