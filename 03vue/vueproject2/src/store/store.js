import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "hanyong5",
        password: "123",
        username: "홍길동",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
      {
        userid: "ttomi",
        password: "123",
        username: "김유신",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
      {
        userid: "test",
        password: "123",
        username: "감강찬",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    removeUser(state, payload) {
      console.log(state, payload);
      state.userData = state.userData.filter((item) => item.userid != payload);
    },
    updateUser(state, payload) {
      state.userData = state.userData.filter(
        (item) => item.userid != payload.userid
      );
      state.userData.push(payload);
    },
  },
});
