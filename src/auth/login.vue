<template>
  <div>
    <div class="container-fluid">
      <div class="row ">
        <div class="col-12 p-0">
          <div class="login-card">
            <div>
              <div>
                <a class="logo">
                  <img class="img-fluid for-light" src="../assets/images/logo/logo.png" alt="looginpage" />
                  <img class="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt="looginpage" />
                </a>
              </div>
              <div class="login-main">
                <form class="theme-form">
                  <h4>Sign in to account</h4>
                  <p>Enter your email & password to login</p>
                  <div class="form-group">
                    <label class="col-form-label">Email Address</label>
                    <input class="form-control" type="email" required="" placeholder="muthutex@gmail.com"
                      v-model="user.email.value">
                    <span class="validate-error" v-if="!user.email.value || !validEmail(user.email.value)">{{
                      user.email.errormsg }}</span>

                  </div>
                  <div class="form-group">
                    <label class="col-form-label">Password</label>
                    <div class="form-input position-relative">
                      <input class="form-control" type="password" name="login[password]" required=""
                        placeholder="*********" v-model="user.password.value">
                      <span class="validate-error" v-if="user.password.value.length < 7">{{ user.password.errormsg
                      }}</span>

                      <div class="show-hide"><span class="show"> </span></div>
                    </div>
                  </div>
                  <div class="form-group mb-0">
                    <div class="checkbox p-0">
                      <input id="checkbox1" type="checkbox">
                      <label class="text-muted" for="checkbox1">Remember password</label>
                    </div><router-link class="link" to="/authentication/forgetpassword"> Forgot password?</router-link>
                    <div class="text-end mt-3">
                      <button class="btn btn-primary btn-block w-100" type="submit" @click.prevent="login">Sign
                        in</button>

                    </div>
                  </div>
                  <p class="mt-4 mb-0 text-center">Don't have account?<a class="ms-2" href="sign-up.html">Create
                      Account</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  name: 'login',
  data() {
    return {
      user: {
        email: {
          value: '',
          errormsg: '',
        },
        password: {
          value: '',
          errormsg: '',
        },
      },
    };
  },
  methods: {
    async login() {
      // Validate email and password
      if (!this.user.password.value || this.user.password.value.length < 6) {
        this.user.password.errormsg = 'Password must be at least 6 characters.';
      } else {
        this.user.password.errormsg = '';
      }

      if (!this.user.email.value) {
        this.user.email.errormsg = 'Email is required.';
      } else if (!this.validEmail(this.user.email.value)) {
        this.user.email.errormsg = 'Invalid email format.';
      } else {
        this.user.email.errormsg = '';
      }

      // Proceed if no validation errors
      if (!this.user.email.errormsg && !this.user.password.errormsg) {
        try {
          const response = await apiService.login(
            this.user.email.value,
            this.user.password.value
          );

          // Store the token and user details
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('User', JSON.stringify(response.data)); // Changed to uppercase 'User'

          // Redirect to the dashboard with correct path
          this.$router.push('/dashboard/default');

        } catch (error) {
          alert('Invalid credentials or server error.');
          console.error(error);
        }
      }
    },
    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>