<template>
  <main>
    <div class="content">
      <img src="@/assets/logo.svg" width="178" />

      <Form novalidate class="form" @submit="login">
        <div class="row">
          <img src="@/assets/email.svg" class="inputImagem" />
          <Field
            name="email"
            type="email"
            placeholder="E-mail"
            autocomplete="true"
            autofocus
            rules="required|email"
          />
        </div>
        <div class="row">
          <ErrorMessage name="email" />
        </div>

        <div class="row">
          <img src="@/assets/lock.svg" class="inputImagem" />
          <Field name="password" type="password" placeholder="senha" rules="required" />
        </div>
        <div class="row">
          <ErrorMessage name="password" />
        </div>

        <button class="button" type="submit">Login</button>
      </Form>
    </div>
  </main>
</template>

<script setup lang="ts">
import router from '@/router'
import http from '@/api'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate'
import { logged } from '@/services/auth'

const login = async (formData) => {
  await http
    .post('login', formData)
    .then((response) => {
      toast(response.data, {
        theme: 'colored',
        type: 'success',
        position: 'top-center'
      })

      logged(formData)
      router.push({ name: 'tarefas' })
    })
    .catch((err) =>
      toast(err.response.data, {
        theme: 'colored',
        type: 'error',
        position: 'top-center'
      })
    )
}

defineRule('required', (value) => {
  if (!value || !value.length) {
    return '* Campo obrigatório!'
  }
  return true
})

defineRule('email', (value) => {
  if (!value || !value.length) {
    return true
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return '* O campo e-mail deve conter um e-mail válido'
  }

  return true
})
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.form {
  display: flex;
  gap: 15px;
  flex-direction: column;
}

.row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.inputImagem {
  width: 16px;
  height: 16px;
}

input {
  border: none;
  width: 256px;
  height: 24px;
  border-bottom: solid 1px #ed1164;
}

span {
  color: #b94a48;
  font-weight: bold;
}

.button {
  background-color: #ed1164;
  border-radius: 12px;
  padding: 15px;
  width: 100%;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
}
</style>
