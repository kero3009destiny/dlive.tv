import { render, staticRenderFns } from "./StreamChatroomInput.vue?vue&type=template&id=b381dece&scoped=true&"
import script from "./StreamChatroomInput.vue?vue&type=script&lang=ts&"
export * from "./StreamChatroomInput.vue?vue&type=script&lang=ts&"
import style0 from "./StreamChatroomInput.vue?vue&type=style&index=0&id=b381dece&lang=stylus&scoped=true&"


/* normalize component */
import normalizer from "!../../node_modules/vue-loader/lib/runtime/componentNormalizer.js"
var component = normalizer(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "b381dece",
  null
  
)

export default component.exports

/* vuetify-loader */
import installComponents from "!/builds/lino-network/web-neo/node_modules/vuetify-loader/lib/runtime/installComponents.js"
import { VSwitch } from 'vuetify/lib'
import { VTextarea } from 'vuetify/lib'
installComponents(component, {VSwitch,VTextarea})
