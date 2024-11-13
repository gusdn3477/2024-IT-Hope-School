import { makeAutoObservable, toJS } from 'mobx';
import { userRepository } from '../repository/UserRepository';
class UserStore {
  user = {};
  constructor() {
    makeAutoObservable(this);
  }

  async signup({ userId, password }) {
    try {
      const res = await userRepository.signUp({
        userId,
        password,
      });
      return res.data.success ?? false;
    } catch (e) {
      console.log(e);
    }
  }
  async login({ userId, password }) {
    try {
      const res = await userRepository.login({ userId, password });
      if (res.data.success) {
        this.user = toJS(res.data.data);
      }
      return res.data.success ?? false;
    } catch (e) {
      console.log(e);
    }
  }
}

export const userStore = new UserStore();
