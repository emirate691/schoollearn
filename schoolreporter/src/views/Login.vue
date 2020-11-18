<template>
  <div class="demo-log">
    <b-container class="bv-example-row">
      <div></div>
      <b-row class="log-content">
        <b-col cols="6">
          <b-row>
            <b-col cols="4">
              <b-img
                left
                src="https://schoolreporter.com.ng/app/school_logo/demo123/1589582560.png"
                alt="Center image"
                id="left-image"
              ></b-img>
            </b-col>
            <b-col cols="8">
              <div id="login">
                <form @submit.prevent="onSubmit">
                  <h1 class="log-heading">Topnorch Secondary School</h1>

                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="username"
                      aria-label="username"
                      aria-describedby="basic-addon2"
                      v-model="input.username"
                    />
                    <div class="input-group-append">
                      <span class="btn btn-primary" id="basic-addon2">
                        <i class="fa fa-envelope-open"> </i
                      ></span>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control"
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon2"
                      v-model="input.password"
                    />

                    <div class="input-group-append">
                      <span class="btn btn-primary" id="basic-addon2">
                        <i class="fa fa-key" aria-hidden="true"></i
                      ></span>
                    </div>
                  </div>
                  <b-button
                    id="login-btn"
                    variant="primary"
                    type="button"
                    v-on:click="login()"
                    >Login</b-button
                  >
                </form>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    /*login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    }*/
    /*checkForm: function() {
      this.errors = ["username", "password"];

      if (!this.name) {
        this.errors.push("username required.");
      }

      if (!this.email) {
        this.errors.push("password required.");
      } else if (!this.validEmail(this.password)) {
        this.errors.push("Valid username required.");
      }

      if (!this.errors.length) {
        return true;
      }
    }*/
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log(formData);
      this.$store.dispatch("Login", {
        email: formData.email,
        password: formData.password
      });
    }
  }
};
</script>

<style scope>
.log-content {
  background-color: lightgrey;
  margin-top: 150px;
  margin-left: 50px;
  margin-right: 50px;
  height: 200px;
}
#left-image {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100px;
}
#login {
  margin-left: 50px;
  padding: 0.2px;
  width: 300px;
}
.log-heading {
  color: brown;
  font-size: 20px;
  margin-left: 0px;
  font-weight: bold;
  font-optical-sizing: 40px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.log-btn-space {
  margin: 0px;
}
/*#input-group-btn {
  margin: 0px;
  background: blue;
}*/
.fa-key,
.fa-envelope-open {
  color: white;
}
.form-control {
  width: 200px;
}
#login-btn {
  margin-left: 0px;
  width: 100%;
}
</style>
