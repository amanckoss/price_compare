<template>
  <a-form
      class="registration-form"
      name="registration"
      :model="formState"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      :rules="rules"
      @finish="onFinish">
    <div class="registration-header">
      <a-divider>
        <a-typography-title style="margin-bottom: 0" :level="2">Реєстрація</a-typography-title>
      </a-divider>
    </div>
    <div class="registration-body">
      <a-form-item
          label="Емейл"
          name="email">
        <a-input v-model:value="formState.email" />
      </a-form-item>
      <a-form-item
          label="Пароль"
          name="password">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item
          label="Підтвердити"
          name="checkPass"
          style="margin-bottom: 32px">
        <a-input-password v-model:value="formState.checkPass" />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
        <a-button type="primary" html-type="submit" style="width: 50%;">Зареєструватися</a-button>
      </a-form-item>
    </div>

  </a-form>
</template>
<script lang="ts" setup>
import {reactive} from 'vue';
import {definePageMeta} from "#imports";
import type {Rule} from "ant-design-vue/es/form";
import {message} from "ant-design-vue";
import {navigateTo} from "#app";
import {useAuthStore} from "~/store/authStore";
interface FormState {
  email: string;
  password: string;
  checkPass: string;
}

definePageMeta({
  layout: "authorization",
});

const formState = reactive<FormState>({
  email: '',
  password: '',
  checkPass: ''
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
let validatePass2 = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Будь ласка ведіть пароль ще раз');
  } else if (value !== formState.password) {
    return Promise.reject("Паролі не співпадають");
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
  checkPass: [{ required: true, validator: validatePass2, trigger: 'change' }],
};

async function onFinish() {
  const query = await authStore.registrateUser(formState.email, formState.password)
  if (!query) {
    message.error('Помилка сервера');
  }
  else {
    navigateTo('/login')
  }
}
</script>

<style lang="less">
@padding: 32px;
.registration {
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