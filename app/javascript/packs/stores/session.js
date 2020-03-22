export default {
  namespaced: true,

  state: {
    loginned: false,
    drawer: null,
  },
  mutations: {
    login(state) {
      state.loginned = true;
    },
    logout(state) {
      state.loginned = false;
    },
    //サイドメニューの開閉制御
    formSideMenu(state) {
      state.drawer = !state.drawer
    },
    // 各フォームの値をVuexストアに渡す
    // updateDrawer(state, { value }) {
    //   state.drawer = value;
    // },
  },
  getters: {
    loginned(state) {
      return state.loginned;
    },
    sideDrawer(state) {
      return state.drawer;
    }
  }
}