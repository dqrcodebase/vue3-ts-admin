<!--
 * @Author: dqr
 * @Date: 2025-05-22 11:29:46
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-20 17:46:31
 * @FilePath: /vue3-ts-admin/src/views/login/index.vue
 * @Description: 
 * 
-->

<script lang="ts" setup>
import { useLoginStore } from '@/store/modules/login';
import { setStorage } from '@/utils/auth';
import { type Router, type RouteLocationNormalizedLoaded } from 'vue-router';
interface FormState {
  username: string;
  password: string;
}
const state: FormState = reactive({
  username: '',
  password: '',
  remember: false,
});
const formState = reactive<FormState>({
  username: '',
  password: '',
});
const loginStore = useLoginStore();
const router: Router = useRouter();
const route: RouteLocationNormalizedLoaded = useRoute();
const onFinish = async (values: any) => {
  const { data } = await loginStore.loginByUsername(values);
  setStorage('user-info', JSON.stringify(data));
  // 页面跳转
  router.push((route.query.redirect as string) || '/');
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<template>
  <div class="login-container">
    <div class="login">
      <h2>ADMIN</h2>
      <h1>LOGIN</h1>
      <div>
        <a-form
          :model="formState"
          name="normal_login"
          class="login-form"
          autocomplete="off"
          :wrapper-col="{ span: 24 }"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="formState.username">
              <template #prefix>
                <Iconify icon="icon-park-solid:user" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password v-model:value="formState.password">
              <template #prefix>
                <Iconify icon="icon-park-solid:lock" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <a-button
              :disabled="disabled"
              type="primary"
              html-type="submit"
              class="login-form-button"
            >
              Log in
            </a-button>
          </a-form-item>
        </a-form>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #e3e5e4;

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 500px;
    background-color: #fbfcfd;
    border-radius: 8px;
    box-shadow: 0 0 10px #aaa;
  }
}

.login-form-button {
  width: 100%;
}
</style>
