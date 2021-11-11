import { Vue, Component } from 'vue-property-decorator';

// For email input validation and email token validation
@Component
export default class EmailValidationMixin extends Vue {
  public email: string = '';
  public emailErrors: string[] = [];

  public emailVerificationCode: string = '';
  public verifyCodeErrors: string[] = [];
  private verifyCodeLength: number = 6;

  public onEmailInput(email: string) {
    this.email = email;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = re.test(String(this.email).toLowerCase());
    if (!validEmail) {
      this.emailErrors = [
        this.$t('LoginEmailRegisterCallback.EmailIsValid') as string
      ];
    } else {
      this.emailErrors = [];
    }
  }

  public onEmailVerifyCodeInput(code: string) {
    this.emailVerificationCode = code;
    if (this.emailVerificationCode.length !== this.verifyCodeLength) {
      this.verifyCodeErrors = [
        this.$t('LoginEmailRegisterCallback.InvalidVerificationCode') as string
      ];
    } else {
      this.verifyCodeErrors = [];
    }
  }
}
