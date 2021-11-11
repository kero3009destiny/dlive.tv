import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { CompleteMe } from '@/store/me/types';

const meModule = namespace('me');

@Component
export default class MeMixin extends Vue {
  @meModule.Getter('me')
  public me!: CompleteMe | null;
  @meModule.Getter('isLoggedIn')
  public isLoggedIn!: boolean;
  // Maybe create custom decorator to store a list of methods that require login and inject this logic automagically
  // returns true if the user needs to login and return prematurely the actual function
  public requireLogin(): boolean {
    if (!this.isLoggedIn) {
      this.$store.commit('dialog/setLoginDialog', 'login');
      return true;
    }
    return false;
  }
}
