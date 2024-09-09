<template>
  <div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="userid"
        v-model="userdata.userid"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="password"
        v-model="userdata.password"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="username"
        v-model="userdata.username"
      />
    </div>
    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="addr"
        v-model="userdata.addr"
      />
    </div>
    <div class="input-group mb-3">
      <input
        type="file"
        class="form-control"
        id="fileform"
        @change="handleImage"
        accept="image/*"
      />
      <label class="input-group-text" for="fileform">Upload</label>
    </div>
    <div class="btn btn-primary" @click="addUser">회원가입</div>
  </div>
  {{ userdata }}
  <p>* 아이디가 동일한 회원이 존재할 경우, 해당 회원 정보가 수정됩니다.</p>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const userdata = ref({
  userid: null,
  password: null,
  username: null,
  addr: null,
  image: null,
});

const clearform = () => {
  userdata.value.userid = null;
  userdata.value.password = null;
  userdata.value.username = null;
  userdata.value.addr = null;
  userdata.value.image = null;
};

const addUser = () => {
  let uData = {
    userid: userdata.value.userid,
    password: userdata.value.password,
    username: userdata.value.username,
    addr: userdata.value.addr,
    image: userdata.value.image,
  };

  // user id가 있으면 회원 수정, 없으면 회원 가입
  if (store.state.userData.filter((item) => item.userid == uData.userid)) {
    store.commit("updateUser", uData);
  } else {
    store.commit("addUser", uData);
  }
  clearform();
};

const handleImage = (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (file) {
    userdata.value.image = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss" scoped></style>
