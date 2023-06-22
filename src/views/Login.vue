<template>
  <div class="container-fluid position-relative bg-white d-flex p-0">
        <!-- Spinner Start -->
        <!-- <div id="" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> -->
        <!-- Spinner End -->
        <!-- Sign In Start -->
        
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" class="">
                                <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
                            </a>
                            <h3>Sign In</h3>
                        </div>
                        <AlertSucces v-if="respSignin.success" :message="message"></AlertSucces>
                        <!-- <AlertWarning :message="message"></AlertWarning> -->
                        <AlertDanger v-if="respSignin.success== false" :message="message"></AlertDanger>
                        
        
                        <div class="form-floating mb-3">
                            <input v-model="formLogin.username" type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input v-model="formLogin.password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <a href="">Forgot Password</a>
                        </div>
                       
                        <button @click="signin" type="submit" class="btn btn-primary py-3 w-100 mb-4">Sign In</button>
                        <p class="text-center mb-0">Don't have an Account? <a  href="/signup">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
    </div>
</template>

<script setup>
import AlertSucces from '@/designs/alerts/Succes.vue';
import AlertWarning from '@/designs/alerts/Warning.vue';
import AlertDanger from '@/designs/alerts/Danger.vue';

import router from '@/router';
import AxiosService from '@/store/authApi';
import { ref,reactive } from 'vue';



const formLogin = reactive({username: "", password : ""})
const message = ref("")
const respSignin= ref({})


async function signin() {
      try {
        const response = await AxiosService.signin(formLogin);
        // Lakukan tindakan sesuai dengan respons yang diterima
        localStorage.token = response.data.token
        respSignin.value = response
        message.value= "Login Success"
        router.push('/dashboard');
      } catch (error) {
        respSignin.value = {success: false}
        message.value= "Username & Password Failed"
        console.error(error);
      }
    };

    const getall= async () => {
      try {
        const response = await AxiosService.getAll();
        // Lakukan tindakan sesuai dengan respons yang diterima
        console.log(response);
      } catch (error) {
        // Tangani kesalahan jika permintaan gagal
        console.error(error);
      }
    };
</script>

<style>

</style>