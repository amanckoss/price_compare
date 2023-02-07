<template>
  <a-form
      class="login-form"
      :model="formState"
      name="basic"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed">
    <div class="login-header">
      <a-divider>
        <a-typography-title style="margin-bottom: 0" :level="2">Вхід</a-typography-title>
      </a-divider>
    </div>
    <div class="login-body">
      <a-form-item
          label="Емейл"
          name="email"
          :rules="[{ required: true, message: 'Будь ласка введіть емейл!' }]"
      >
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item
          label="Пароль"
          name="password"
          :rules="[{ required: true, message: 'Будь ласка введіть пароль!' }]"
          style="margin-bottom: 32px"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
        <a-button type="primary" html-type="submit" style="width: 50%;">Увійти</a-button>
        <div style="margin-top: 8px; margin-left: 2px ;">
          Чи
          <NuxtLink to="registration">зареєструватися?</NuxtLink>
        </div>
      </a-form-item>
    </div>

  </a-form>
</template>
<script lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  layout: "authorization",
});
import { defineComponent, reactive } from 'vue';

interface FormState {
  email: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      email: '',
      password: '',
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>

<style lang="less">
@padding: 32px;
.login {
  &-form {
    padding: 0 calc(@padding / 2);
  }
  &-header {
    text-align: center;
    padding:  @padding 0 @padding 0;
  }
  &-body {
    padding-bottom: @padding;
  }
}
</style>