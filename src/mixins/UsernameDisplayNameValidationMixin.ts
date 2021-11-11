import { Component, Vue } from 'vue-property-decorator';
import { debounce } from 'throttle-debounce';
import VALID_DISPLAY_NAME from '@/graphql/queries/ValidDisplayName.graphql';
import { ValidDisplayName } from '@/graphql/types';

// Expose username, displayName, usernameErrors, displayNameErrors fields
// Expose onUsernameInput and onDiplyaNameInput functions to bind to input event
@Component
export default class UsernameDisplayNameValidation extends Vue {
  public username = '';
  public displayName = '';
  // STEP TWO STARTS HERE
  public usernameErrors: string[] = [];
  public displayNameErrors: string[] = [];
  private debouncedDisplayNameCheck: any = debounce(
    500,
    this.checkDisplayNameValid
  );

  public onUsernameInput(username: string) {
    // add timeout so does not spam db
    this.username = username;
    if (this.username.length < 3 || this.username.length > 20) {
      this.usernameErrors = ['Username must be 3-20 characters in length'];
    } else {
      this.usernameErrors = [];
      this.checkUsernameValid();
    }
  }

  public onDisplayNameInput(name: string) {
    this.displayName = name;

    if (this.displayName.length < 3 || this.displayName.length > 20) {
      this.displayNameErrors = [
        'Display name must be 3-20 characters in length'
      ];
    } else if (!this.checkDisplayNameForm()) {
      this.displayNameErrors = [
        'Display Name can only contain characters, numbers, hyphens, underscores, and periods'
      ];
    } else {
      this.displayNameErrors = [];
      this.debouncedDisplayNameCheck();
    }
  }

  private checkUsernameValid() {
    import('@/api/linojs' /* webpackChunkName: "linojs" */).then(data => {
      const linoUtils = data.linoUtils;
      if (!linoUtils.isValidUsername(this.username)) {
        this.usernameErrors = [
          'Username can only contain lowercase characters, numbers, hyphens, and periods'
        ];
      }
    });
  }
  private checkDisplayNameForm() {
    const isValidUsername = /^[a-zA-Z0-9$_.+!*'(),"-]+$/.test(this.displayName);
    return (
      isValidUsername &&
      this.displayName.length >= 3 &&
      this.displayName.length <= 20
    );
  }

  private checkDisplayNameValid() {
    this.$apollo
      .query<ValidDisplayName.Query>({
        query: VALID_DISPLAY_NAME,
        variables: {
          displayName: this.displayName
        }
      })
      .then(result => {
        if (result.data.displayNameIsValid) {
          this.displayNameErrors = [];
        } else {
          this.displayNameErrors = [
            'Display name is not valid or already taken'
          ];
        }
      })
      .catch(err => {
        // TODO(@ryan): Error handling
      });
  }
}
