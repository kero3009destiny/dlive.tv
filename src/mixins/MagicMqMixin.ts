import { Mq } from '@/utils/breakpoints';
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const uiModule = namespace('ui');
@Component
export default class MagicMqMixin extends Vue {
  @uiModule.Getter('viewPointWidth')
  public viewPointWidth!: number;
  @uiModule.Getter('mq')
  private mq!: Mq;

  // @returns the mq of this div by taking drawer status into account.
  get isMobile() {
    return this.mq === Mq.LinoXs || this.mq === Mq.LinoSm;
  }
  get isXs() {
    return this.mq === Mq.LinoXs;
  }
}
