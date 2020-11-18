<template>
  <div>
    <Header />
    <div class="container">
      <h4>Getting Started</h4>
      <p>
        It’s always the right time to do the right thing. We’ve made switching
        to<br />
        Topnotch easy
      </p>
      <b-row class="section">
        <b-col sm="12" md="6">
          <b-img
            src="https://www.bluebic.com/assets/images/getting-started.png"
            class="img-1"
          >
          </b-img>
        </b-col>
        <b-col sm="12" md="6">
          <p class="right-para">
            With Topnotch, you have an account manager who will guide you
            through the process. We transfer your data to Topnotch while
            optimising data quality, and support your employees, parents and
            students through the transition process while improving their
            technology experience
            <br /><br />

            <b-button
              v-b-modal.modal-prevent-closing
              variant="primary"
              size="lg"
              width="40%"
            >
              Continue</b-button
            >
            <b-modal
              id="modal-prevent-closing"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
              ok-only="yes"
              ok-title="Get Started"
              
              button-size="lg"
              footer-class="p-2 border-top-0"
              header-class="p-2 border-bottom-0"
              body-bg-variant="primray"
               
        
            >
              <h4 class="form-head">Getting Started</h4>
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <label for="name" id="lbl">School Name</label>
                <b-form-input
                  id="name-input"
                  v-model="name"
                  :state="nameState"
                  required
                ></b-form-input>

                <label for="school" id="lbl">Subdomain Name</label>
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
                

                <h6>
                  Clicking on <strong>“Get Started”</strong> means you agree to
                  our <a href="#">Terms</a> & <a href="#">Privacy policy</a>.
                </h6>
              </form>
            </b-modal>
          </p>
        </b-col>
      </b-row>

      <b-row class="deta-sub">
        <b-col sm="12" md="12">
          <p class="sub-fig">
            For the best experience, we have simplified the transition process
            into 4 easy steps:
          </p>
        </b-col>
        <b-col sm="12" md="3">
          <div>
            <div class="figure">
              <p class="fig">1</p>
            </div>

            <div class="img">
              <b-img src="https://www.bluebic.com/assets/images/gs-step-1.png">
              </b-img>
            </div>
            <h5>Evaluate the Demo</h5>
            <p id="deta">
              When you are done exploring the service after a successful demo
              request, contact us to begin the migration process.
            </p>
          </div>
        </b-col>
        <b-col sm="12" md="3">
          <div>
            <div class="figure">
              <p class="fig">2</p>
            </div>
            <div class="line"></div>
            <div class="img">
              <b-img src="https://www.bluebic.com/assets/images/gs-step-2.png">
              </b-img>
            </div>
            <h5>Transfer the Data</h5>
            <p id="deta">
              Provide us with access to your data and watch our data experts
              import your data for you, after which you validate and approve our
              work.
            </p>
          </div>
        </b-col>
        <b-col sm="12" md="3">
          <div>
            <div class="figure">
              <p class="fig">3</p>
            </div>
            <div class="line"></div>
            <div class="img">
              <b-img
                src="https://www.bluebic.com/assets/images/gs-step-3.png"
              ></b-img>
            </div>
            <h5>Training</h5>
            <p id="deta">
              Define your ideal training model with your account manager.
              BlueBic will train in-person, via web or/and by train-the-trainer
              model.
            </p>
          </div>
        </b-col>
        <b-col sm="12" md="3">
          <div>
            <div class="figure">
              <p class="fig">4</p>
            </div>
            <div class="line"></div>
            <div class="img">
              <b-img
                src="https://www.bluebic.com/assets/images/gs-step-4.png"
              ></b-img>
            </div>
            <h5>Support</h5>
            <p id="deta">
              24/7 support via in-app, email and phone channels to all your
              staff. There are also clear help docs and your account manager
              stays in touch with your school leadership
            </p>
          </div>
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
    return {
      name: "",
      school: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      value: "",
      boxTwo: "",
      nameState: null,
      schoolState: null,
      firtNameState: null,
      lastNameState: null,
      emailAddressState: null,
      phone: null,
      country: null,
      bindProps: {
        mode: "international",
        defaultCountry: "FR",
        disabledFetchingCountry: false,
        disabled: false,
        disabledFormatting: false,
        placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: false,
        enabledFlags: true,
        preferredCountries: ["AU", "BR"],
        onlyCountries: [],
        ignoredCountries: [],
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        wrapperClasses: "",
        inputClasses: "",
        dropdownOptions: {
          disabledDialCode: false
        },
        inputOptions: {
          showDialCode: false
        }
      },
      submittedNames: []
    };
  },
  methods: {
    /*addButton() {
      this.$router.push({ path: "/Login" });
    }*/
    acceptNumber() {
      var x = this.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.value = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
    countryChanged(country) {
      this.country = "+" + country.dialCode;
    },
    submit() {
      console.log(this.phone);
      console.log(this.country);
    },

    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      this.schoolState = valid;
      this.firtNameState = valid;
      this.lastNameState = valid;
      this.emailAddressState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.school = "";
      this.firstName = "";
      this.lastName = "";
      this.emailAddress = "";
      this.nameState = null;
      this.schoolState = null;
      this.firtNameState = null;
      this.lastNameState = null;
      this.emailAddressState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    showMsgBoxTwo() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxOk("Data was submitted successfully", {
          title: "Confirmation",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true
        })
        .then(value => {
          this.boxTwo = value;
        });
    }
  },
  _components: {
    Header,
    Footer
  },
  get components_1() {
    return this._components;
  },
  set components_1(value) {
    this._components = value;
  },
  get components() {
    return this._components;
  },
  set components(value) {
    this._components = value;
  }
};
</script>

<style scoped>
.login {
  margin-top: 0px;
}

h4 {
  color: #007bff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 40px;
}
p {
  text-align: center;
  font-size: 21.5px;
  font-weight: 400;
}
.right-para {
  text-align: justify;
  font-size: 14px;
  margin-right: 50px;
  margin-left: 40px;
}
.button {
  margin-left: 0px;
  width: 200px;
}
.figure {
  width: 60px;
  height: 60px;
  background-color: #007bff;
  border-radius: 100%;
  margin-top: 50px;
  margin-left: 90px;
}
.fig {
  margin-top: 12.5px;
  color: mintcream;
  font-weight: bold;
}
.sub-fig {
  margin-top: 0px;
  font-size: 30px;
  text-align: center;
  margin-left: 100px;
  margin-right: 100px;
  font-weight: 100;
}
.img {
  margin-top: 0px;
  padding-top: 0px;
  background-color: mintcream;
  height: 110px;
  border-radius: 100%;
  width: 110px;
  margin-left: 50px;
}
#deta {
  text-align: justify;
  font-size: 14px;
  margin-left: 30px;
  margin-right: 10px;
  font-size-adjust: unset;
  -ms-text-kashida-space: 2%;
}
.img-1 {
  height: 250px;
  margin-left: 30px;
  margin-right: 30px;
}
h5 {
  color: #007bff;
  margin-left: 25px;
}
.line {
  margin-top: 0px;
  border-width: 2px;
  width: 25%;
}
.sub-content {
  margin-top: 0px;
}
.deta-sub {
  margin-top: 100px;
}

.section {
  margin-top: 150px;
}
#school-input,
#name-input,
#firstname-input,
#lastname-input,
#emailaddress-input,
#phonenumber-input {
  width: 400px;
  margin-left: 30px;
  height: 60px;
  margin-top: 5px;
}
#school-label {
  color: red;
  margin-left: 0px;
}
.form-label {
  background-color: aquamarine;
  padding-top: 0px;
}
#lbl {
  margin-top: 65px;
}
h6 {
  margin-left: 30px;
  margin-top: 20px;
  font-size: small;
}
.form-head {
  text-align: center;
}
</style>
