const pwdMinLength = 8;
const pwdMaxLength = 20;

export const passwordValidation = (password: string): string => {
  let passwordError = '';
  if (password.length < pwdMinLength) {
    passwordError = 'LoginEmailRegisterCallback.PasswordAtLeast8';
  } else if (password.length > pwdMaxLength) {
    passwordError = 'LoginEmailRegisterCallback.PasswordNoLongerThan20';
  } else if (!/[a-z]/.test(password)) {
    passwordError = 'LoginEmailRegisterCallback.PasswordContainLowercase';
  } else if (!/\d/.test(password)) {
    passwordError = 'LoginEmailRegisterCallback.PasswordContainNumbers';
  }
  return passwordError;
};
