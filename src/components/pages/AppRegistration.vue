<script>
export default {
    name: "AppRegistration",
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            password: '',
            passwordConfirm: '',
            firstNameValid: false,
            lastNameValid: false,
            emailValid: false,
            addressValid: true,
            passwordValid: true,
            passwordConfirmValid: true
        }
    },
    methods:{
      validateForm(){
        if (this.firstName === '' || this.firstName === ' ') {
          this.firstNameValid = false;
          console.log("no name");
      } else {
        this.firstNameValid = true;
        console.log("si name");
      }

      if (this.lastName === '') {
        this.lastNameValid = false;
        console.log("no last");
      } else {
        this.lastNameValid = true;
        console.log("si last");
      }

      if (this.email === '' || !this.validateEmail(this.email)) {
        this.emailValid = false;
        console.log("no email");
      } else {
        this.emailValid = true;
        console.log("si email");
      }

      if (this.password === '' || !this.validatePassword(this.password)) {
        this.passwordValid = false;
        console.log("no pass");
      } else {
        this.passwordValid = true;
        console.log("si pass");
      }

      if (this.address !== '' && this.address.length < 10) {
        this.addressValid = false;
        console.log("no add");
      } else {
        this.addressValid = true;
        console.log("si add");
      }

       if (this.password !== this.passwordConfirm) {
        this.passwordConfirmValid = false;
        console.log("no passConf");
      } else {
        this.passwordConfirmValid = true;
        console.log("si passConf");
      }

      if (this.firstNameValid && this.lastNameValid && this.emailValid && this.addressValid && this.passwordValid && this.passwordConfirmValid) {
        alert('Registrazione avvenuta con successo!');
        location.reload()
      }

      
      },
      validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
      },

      validatePassword(password) {
      console.log("validate");
      const numericRegex = /\d/;
      const specialCharRegex = /[^a-zA-Z0-9]/;
      const nameRegex = new RegExp(this.firstName, 'i');
      const surnameRegex = new RegExp(this.lastName, 'i');

      if (password.length < 10 || !numericRegex.test(password) || password != this.passwordConfirm || password == " " ||  password.search(nameRegex) !== -1 || password.search(surnameRegex) !== -1) {
        return false;
      }
      return true;
    }
    }
}
</script>

<template>
    <div class="wrapper bg-dark bg-gradient">
        <div class="container">
          <div class="form-container shadow bg-light bg-gradient">
            <h2 class="text-center fw-bold mt-2">Registrazione</h2>
            <form @submit.prevent="validateForm" class="pb-5 px-5">
                <a href="/" class="btn btn-primary mb-4 text-center">Home</a>
                <div class="">
                    <label  for="first-name" class="form-label">First name *</label>
                    <input :class="this.firstName === '' || this.firstName === ' ' ? 'border border-danger' : 'border border-success'" type="text" class="form-control" id="first-name"  v-model="firstName" required>
                    <div class="alert alert-danger" role="alert" v-if="this.firstName === ' '">
                        Inserisci un nome valido, cancella lo spazio iniziale
                      </div>
                  </div>
                  <div class="mb-3">
                    <label for="last-name" class="form-label">Last name *</label>
                    <input :class="this.lastName === '' || this.lastName === ' ' ? 'border border-danger' : 'border border-success'" type="text" class="form-control" id="last-name" v-model="lastName" required>
                    <div class="alert alert-danger" role="alert" v-if="this.lastName === ' '">
                          Inserisci un cognome valido, cancella lo spazio iniziale
                        </div>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email address *</label>
                    <input :class="this.email === '' || this.email === ' ' ? 'border border-danger' : 'border border-success'" type="email" class="form-control" id="email" v-model="email" required aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password *</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
                <div class="alert alert-danger" role="alert"  v-if="!passwordValid">
                  <ul>
                    <h5>Inserisci una password valida:</h5>
                    <li>Minimo 10 caratteri <span v-if="this.password.length < 10"> <i class="fa-solid fa-xmark"></i> </span>
                    <span v-else><i class="fa-solid fa-check"></i></span>
                    </li>
                    <li>Non avere spazi <span v-if="this.password.includes(' ')"> <i class="fa-solid fa-xmark"></i></span>
                    <span v-else><i class="fa-solid fa-check"></i></span></li>
                    <li>Non contere il tuo nome <span v-if="this.password.toLowerCase().includes(this.firstName.toLowerCase())"> <i class="fa-solid fa-xmark"></i></span>
                    <span v-else><i class="fa-solid fa-check"></i></span></li>
                    <li>Non contenere il tuo cognome <span v-if="this.password.toLowerCase().includes(this.lastName.toLowerCase())"> <i class="fa-solid fa-xmark"></i></span>
                    <span v-else><i class="fa-solid fa-check"></i></span></li>
                  </ul>
                </div>
              </div>
              <div class="mb-3">
                    <label for="password-confirm" class="form-label">Confirm password *</label>
                    <input type="password" class="form-control" id="password-confirm" v-model="passwordConfirm" required>
                    <div class="alert alert-danger" role="alert" v-if="!passwordConfirmValid">
                      Le password devo essere uguali
                    </div>
                    </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper{
    height: 100vh;
    // background-color: lightgrey;
    padding-top: 2vh;

    .form-container{
      background-color: white;
      width: 70vw;
      height: 95vh;
      margin: 0 auto;
      border: 1px solid black;
      border-radius: 10px;
      margin-top: 0px;
    }
}

</style>