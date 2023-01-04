<template>
  <div>
    <form @submit.prevent="login">
      <h2>Login</h2>

      <input type="text" name="email">
      <input type="text" name="password">

      <button type="submit">Submit</button>
    </form>

    <button @click="getUser">test</button>

    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
const login = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement)
  const email = formData.get('email')
  const password = formData.get('password')

  useFetch('http://localhost:8000/sanctum/csrf-cookie', {
    method: 'GET',
    credentials: 'include',
  })
  const csrfCookie = useCookie('XSRF-TOKEN')

  const data = await useFetch('http://localhost:8000/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'X-XSRF-TOKEN': csrfCookie.value || ''
    },
    body: { email, password }
  })

  console.log(data);
}

const getUser = async () => {
  const { data } = await useFetch('http://localhost:8000/api/user', {
    method: 'GET',
    credentials: 'include',
  })
}

const logout = async () => {
  useFetch('http://localhost:8000/sanctum/csrf-cookie', {
    method: 'GET',
    credentials: 'include',
  })
  const csrfCookie = useCookie('XSRF-TOKEN')
  const data = await useFetch('http://localhost:8000/logout', {
    method: 'POST',
    headers: {
      'X-XSRF-TOKEN': csrfCookie.value || ''
    },
    credentials: 'include',
  })
}
</script>

