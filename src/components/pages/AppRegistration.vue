<script>
import AppNav from '../AppNav.vue';

export default {
    name: "AppRegistration",
    data() {
        return {
            user: {
                name: "",
                cognome: "",
                email: "",
                indirizzo: "",
                password: "",
            }
        }
    },
    components: { AppNav }
}
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <form>
                <a href="/" class="btn btn-primary my-5">Home</a>
                <div class="mb-3">
                    <label for="name" class="form-label">First name</label>
                    <input type="name" class="form-control" id="name" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                    <label for="input" class="form-label">Last name</label>
                    <input type="input" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                  </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper{
    height: 100vh;
}
</style>