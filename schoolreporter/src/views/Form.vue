<template>
  <div class="form-group">
    <b-row>
      <b-col sm="12" md="12">
        <div class="container-form">
          <form id="app" @submit="checkForm" method="post" novalidate="true">
            <p v-if="errors.length">
              <b> please correct the following error(s):</b>
            </p>
            <h1 class="form-heading">Subscription Form</h1>
            <hr class="line" />
            <p>
              <label for="name">Name <span class="star">*</span></label
              ><br />
              <input
                id="name"
                v-model="name"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </p>
            <p>
              <label for="email">email <span class="star">*</span></label
              ><br />
              <input
                id="email"
                placeholder="Email Address"
                class="email"
                v-model="email"
                type="email"
                name="email"
                required
              />
            </p>

            <p>
              <label for="phonenumber"
                >Phone Number <span class="star">*</span></label
              ><br />
              <input
                id="number"
                placeholder="Phone Number"
                v-model="phonenumber"
                type="phonenumber"
                name="phonenumber"
                required
              />
            </p>
            <p>
              <label for="school">School <span class="star">*</span></label
              ><br />
              <input
                id="school"
                placeholder="school"
                v-model="school"
                type="text"
                name="school"
                required
              />
            </p>
            <p>
              <label for="address">Address <span class="star">*</span></label
              ><br />
              <input
                id="address"
                placeholder="Address"
                v-model="address"
                type="text"
                name="school"
                required
              />
            </p>
            <p>
              <label for="category">Category <span class="star">*</span></label
              ><br />
              <select id="category" name="category" required>
                <option value="" active selected>Select Category</option>
                <option value="coffee">Single plan </option>
                <option value="tea">Double plan</option>
                <option value="milk">Triple plan</option>
              </select>
            </p>

            <p>
              <label for="state">State <span class="star">*</span></label
              ><br />

              <select id="state" name="state" required>
                <option value="" active selected>Select State</option>
                <option>FCT </option>
                <option> Abia </option>
                <option> Adamawa </option>
                <option>Akwa Ibom </option>
                <option> Anambra </option>
                <option> Bauchi </option>
                <option>Benue </option>
                <option> Borno </option>
                <option> Cross River </option>
                <option>Delta </option>
                <option> Edo</option>
                <option> Ekiti </option>
                <option>Enugun</option>
                <option>Gombe </option>
                <option> Imo</option>
                <option> Jigawa</option>
                <option> Kaduna</option>
                <option>kano </option>
                <option> Kebbi </option>
                <option> Kogi </option>
                <option>Kwara</option>
                <option>Lagos </option>
                <option> Ogun </option>
                <option>Ondo</option>
                <option>Oyo</option>
                <option>Pleatue </option>
                <option>River</option>
                <option>Sokoto </option>
                <option> Taraba</option>
                <option>Yobe</option>
                <option>Zamfara</option>
              </select>
            </p>

            <div class="submit-btn"></div>
            <div>
              <p id="submit-btn-1">
                <input type="submit" id="submit" value="submit" />
              </p>
            </div>
          </form>
        </div> </b-col
      >"
    </b-row>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      errors: [],
      name: null,
      email: null,
      category: null,
      state: null,
      phonenumber: null,
      school: null,
      password: null
    };
  },
  methods: {
    checkForm: function() {
      this.errors = ["name", "email"];

      if (!this.name) {
        this.errors.push("Name required.");
      }

      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.errors.length) {
        return true;
      }
    }
  }
};
</script>
<style>
.form-group {
  margin-top: 5px;
  /* background-position: 50%;*/
  background-origin: padding-box;
  width: 940.1px;
  height: 300px;
}
.form-heading {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: normal;
  font-stretch: extra-expanded;
  font-weight: 800;
  margin-left: 0px;
  text-align: center;
}
.container-form {
  padding-left: 105px;
}
#name,
#email,
#number,
#category,
#state,
#school,
#password,
#address {
  width: 700px;
  height: 30px;
  margin-left: 20px;
}
label {
  margin-left: 25px;
}
.star {
  color: red;
}
#submit {
  background-color: darkslateblue;
  height: 50px;
  width: 100px;
  font: 1em sans-serif;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: whitesmoke;
  margin-left: 29px;
}
/*:first-child {
  border-left: 5px solid blue;
  border-top: 5px solid blue;
  border-bottom: 5px solid blue;
  width: 2%;
  height: 50px;
  margin-top: 40px;
  border-bottom-width: 75%;
}*/
</style>
