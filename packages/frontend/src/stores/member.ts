import { defineStore } from 'pinia';
export interface IMemberInfo {
  userId: string;
  email: string;
}
export const useMemberStore = defineStore('member', {
  state: () => ({
    userId: '',
    isLogin: false
  }),

  // getters: {
  //   doubleCount (state) {
  //     return state.counter * 2;
  //   }
  // },

  actions: {
    async login({ email, password }: { email: string, password: string }): Promise<IMemberInfo> {
      if (email !== '123@abc.com' || password !== '12345678')
        throw {
          code: 403,
          message: `lgoin fail`,
          data: {
            email: email !== '123@abc.com' ? `without the member of ${email}, must be "123@abc.com".` : '',
            password: email === '123@abc.com' && password !== '12345678' ? `password error, must be "12345678"!` : ''
          }
        };
      this.userId = '12345678';
      this.isLogin = true;
      return { userId: '12345678', email: '123@abc.com' };
    },
    async register({ email, emailVerify, mobile, mobileVerify, password }: {
      email: string;
      emailVerify: string;
      mobile: string;
      mobileVerify: string;
      password: string;
    }): Promise<IMemberInfo> {
      if (email !== '123@abc.com')
        throw { code: 403, messages: `register fail`, data: { email: `email exist, must be "123@abc.com".` } };
      if (emailVerify !== '123456')
        throw { code: 403, messages: `register fail`, data: { emailVerify: `code error, must be "123456".` } };
      if (mobile !== '+886987654321')
        throw { code: 403, messages: `register fail`, data: { mobile: `mobile exist, must be "+886987654321".` } };
      if (mobileVerify !== '123456')
        throw { code: 403, messages: `register fail`, data: { mobileVerify: `code error, must be "123456".` } };
      if (password !== '12345678')
        throw { code: 403, messages: `register fail`, data: { password: `format error, must be "12345678".` } };
      this.userId = '12345678';
      this.isLogin = true;
      return { userId: '12345678', email: '123@abc.com' };
    },
    async logout() {
      this.userId = '';
      this.isLogin = false;
    },
    async registerEmailVerifySend({ email }: { email: string }): Promise<number> {
      return Date.now() + 120 * 1000;
    },
    async registerMobileVerifySend({ mobile }: { mobile: string }): Promise<number> {
      return Date.now() + 180 * 1000;
    }
  }
});
