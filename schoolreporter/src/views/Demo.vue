<template>
  <div>
    <Header />
    <div class="container">
      <h4>Request a Demo</h4>
      <p class="demo-para">
        Considering Topnotch? We are happy to provide a personalized demo
        <br />and answer your questions.
      </p>

      <b-row class="section">
        <b-col sm="12" md="6">
          <b-img
            src="https://www.bluebic.com/assets/images/demo-request.png"
            class="img-2"
          >
          </b-img>
        </b-col>
        <b-col sm="12" md="6">
          <form
            ref="form"
            class="right-para-1"
            @submit.stop.prevent="handleSubmit"
          >
            <label for="name" id="lbl-1">School Name</label>
            <b-form-input
              id="name-input"
              v-model="name"
              :state="nameState"
              required
            ></b-form-input>

            <label for="school" id="lbl-1">Subdomain Name</label>
            <b-form-input
              id="school-input"
              v-model="school"
              :state="schoolState"
              required
            ></b-form-input>
            <label for="firstname" id="lbl"> First Name</label>
            <b-form-input
              id="firstname-input"
              v-model="firstName"
              :state="firstNameState"
              required
            ></b-form-input>
            <label for="lastName" id="lbl">Last Name</label>
            <b-form-input
              id="lastname-input"
              v-model="lastName"
              :state="lastNameState"
              required
            ></b-form-input>
            <label for="emailAddress" id="lbl"> Email Address</label>
            <b-form-input
              id="emailaddress-input"
              v-model="emailAddress"
              :state="emailAddressState"
              required
            ></b-form-input>
            <label for="phonenumber" id="lbl">Phone Number</label>
            <b-form-input
              id="phonenumber-input"
              v-model="value"
              @input="acceptNumber"
              required
            ></b-form-input>
            <b-button variant="primary" id="request-btn">request demo</b-button>

            <h6>
              Clicking on <strong>“Get Started”</strong> means you agree to our
              <a href="#">Terms</a> & <a href="#">Privacy policy</a>.
            </h6>
          </form>
        </b-col>
      </b-row>
    </div>

    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Demo",
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.demo-para {
  text-align: center;
  font-size: 21.5px;
  font-weight: 400;
}
h4 {
  color: #007bff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 40px;
}
section {
  margin-top: 150px;
}
#school-input,
#name-input,
#firstname-input,
#lastname-input,
#emailaddress-input,
#phonenumber-input {
  width: 250px;
  margin-left: 30px;
  height: 40px;
  margin-top: 5px;
}
.img-2 {
  height: 380px;
  margin-left: 30px;
  margin-right: 30px;
}
.right-para-1 {
  text-align: justify;
  font-size: 14px;
  margin-right: 70px;
  margin-left: 40px;
}
#lbl {
  margin-top: 25px;
}
#request-btn {
  margin-top: 30px;
  border-radius: 50px;
  margin-left: 80px;
  width: 150px;
  height: 40px;
}

h6 {
  margin-top: 20px;
}
</style>
