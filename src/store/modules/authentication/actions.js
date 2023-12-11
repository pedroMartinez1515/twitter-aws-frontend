import { Auth } from "aws-amplify";
import router from "../../../router";
export default {
  loginUser({ commit }, user) {
    commit("USER_LOGIN", user);
  },
  async logoutUser({ commit }) {
    await Auth.signOut({
      global: true,
    });
    commit("USER_LOGOUT");
    commit('signup/SIGNUP_STEP_SET', '', {root: true})
    router.push("/");
  },
  async signUp({commit}, form){
    const user = await Auth.signUp({
      username: form.username,
      password: form.password,
      attributes: {
        name: form.name,
      }
    });
    commit("USER SIGNUP", user)
  },
  async confirmSignUp(_, form){
    await Auth.confirmSignUp(form.email, form.verificationCode);
  },
  async resendSignUp(_, form){
    await Auth.resendSignUp(form.email)
  },
  async signInUser({dispatch}, form){
    const user = await Auth.signIn(form.email, form.password);
    await dispatch('loginUser', user);
    router.push({name: 'Home'})
  }
};
