<template>
  <a-form
      class="login-form"
      name="login"
      :model="formState"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="on"
      :rules="rules"
      @finish="onFinish">
    <div class="login-header">
      <a-divider>
        <a-typography-title style="margin-bottom: 0" :level="2">Вхід</a-typography-title>
      </a-divider>
    </div>
    <div class="login-body">
      <a-form-item
          label="Емейл"
          name="email">
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item
          label="Пароль"
          name="password"
          style="margin-bottom: 32px">
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
<script lang="ts" setup>
import {definePageMeta} from "#imports";
import {reactive} from 'vue';
import {useAuthStore} from "~/store/authStore";
import {message} from "ant-design-vue";
import {Rule} from "ant-design-vue/es/form";
import {navigateTo} from "#app";

interface FormState {
  email: string;
  password: string;
}

definePageMeta({
  layout: "authorization",
});

const formState = reactive<FormState>({
  email: '',
  password: '',
});

const authStore = useAuthStore()

let validatePass = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Будь ласка ведіть пароль');
  } else if(value.length < 6) {
    return Promise.reject('Парол має мати 6 символів');
  } else {
    return Promise.resolve();
  }
};

const rules: Record<string, Rule[]> = {
  email: [
    {required: true, message: 'Будь ласка введіть емейл'},
    {type: 'email', message: 'Емейл неправильного виду', trigger: 'blur'}
  ],
  password: [{ required: true, validator: validatePass, trigger: 'blur'}],
};

if (authStore.registrationComplete()) {
  message.success('Реєстрація успішна')
}
const onFinish = async () => {
  const query = await authStore.signIn(formState.email, formState.password)
  if (!query) {
    message.error('Помилка сервера')
  }
  else {
    navigateTo('/')
  }
};
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