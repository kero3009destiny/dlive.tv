import { GlobalEventBus } from '@/utils/eventbus';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GlobalEventBusMixin extends Vue {
  public subscribeIds: number[] = [];

  public beforeDestroy() {
    GlobalEventBus.unsubscribeAll(this.subscribeIds); // tslint:disable-line
  }

  public $_smartSubscribe(event: any, cb: any) {
    this.subscribeIds.push(GlobalEventBus.subscribe(event, cb)); // tslint:disable-line
  }

  public $_smartPublish(event: any, data: any) {
    GlobalEventBus.publish(event, data); // tslint:disable-line
  }
}
