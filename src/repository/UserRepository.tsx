import { API } from '../API';

class UserRepository {
  signUp({ userId, password }: { userId: string; password: string }) {
    return API.post('/signup', { userId, password });
  }

  login({ userId, password }: { userId: string; password: string }) {
    return API.post('/login', { userId, password });
  }
}

export const userRepository = new UserRepository();
