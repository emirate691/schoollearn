<template>
  <div>
    <b-navbar toggleable type="dark" variant="">
      <b-navbar-brand href="#"
        >Topnorch
        <b-image src="logo-1.png" />
      </b-navbar-brand>

      <h4>Techspecialist Academy, Abuja</h4>
      <div id="header-icon">
        <i class="fas fa-envelope-square"></i>
        <i class="fas fa-sign-out-alt"></i>
      </div>

      <div>
        <b-button v-b-toggle.sidebar-variant>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-button>
        <b-sidebar
          id="sidebar-variant"
          title="Topnorch"
          bg-variant=""
          text-variant="light"
          shadow
          no-header-close="false"
          width="240px"
        >
          <div class="header-1">nnnnnn</div>
          <p class="dash-icon">
            <i class="fas fa-home"></i
            ><span class="dash-icon-para">Dashboard</span>
          </p>

          <p class="dash-icon">
            <i class="fas fa-wrench"></i>
            <span class="dash-icon-para">Configuration</span>
            <a v-b-toggle:my-collapse id="sub-btn" variant="light">
              <span class="when-open"><i class="far fa-plus-square"></i></span
              ><span class="when-closed"
                ><i class="far fa-minus-square"></i
              ></span>
            </a>
          </p>

          <b-collapse id="my-collapse">
            <ul>
              <li>App setting</li>
              <li>School information</li>
              <li>Create session</li>
              <li>Create Subject</li>
              <li>Examination Data</li>
              <li>Create Department</li>
              <li>Create Behaviour</li>
              <li>Create skills</li>
            </ul>
          </b-collapse>

          <p class="dash-icon">
            <i class="fas fa-graduation-cap"></i
            ><span class="dash-icon-para">Student Management </span>
            <a v-b-toggle:my-collapse id="sub-btn" variant="light">
              <span class="when-open"><i class="far fa-plus-square"></i></span
              ><span class="when-closed"
                ><i class="far fa-minus-square"></i
              ></span>
            </a>
          </p>

          <b-collapse id="my-collapse">
            <ul>
              <li>Registration</li>
              <li>New Admission</li>
              <li>Student Placement</li>
              <li>Remove Student</li>
              <li>Subject Enrollment</li>
              <li>Remove Subject</li>
              <li>View Enrolment</li>
              <li>Create skills</li>
            </ul>
          </b-collapse>

          <p class="dash-icon">
            <i class="fas fa-user-friends"></i>
            <span class="dash-icon-para">Class Management</span>
            <a v-b-toggle:my-collapse id="sub-btn" variant="light">
              <span class="when-open"><i class="far fa-plus-square"></i></span
              ><span class="when-closed"
                ><i class="far fa-minus-square"></i
              ></span>
            </a>
          </p>
          <div>
            <b-collapse id="my-collapse">
              <ul>
                <li>App setting</li>
                <li>School information</li>
                <li>Create session</li>
                <li>Create Subject</li>
                <li>Examination Data</li>
                <li>Create Department</li>
                <li>Create Behaviour</li>
                <li>Create skills</li>
              </ul>
            </b-collapse>
          </div>
          <p class="dash-icon">
            <i class="fas fa-dollar-sign"></i
            ><span class="dash-icon-para">Payment Management</span>
            <a v-b-toggle:my-collapse id="sub-btn" variant="light">
              <span class="when-open"><i class="far fa-plus-square"></i></span
              ><span class="when-closed"
                ><i class="far fa-minus-square"></i
              ></span>
            </a>
          </p>
          <div>
            <b-collapse id="my-collapse">
              <ul>
                <li>App setting</li>
                <li>School information</li>
                <li>Create session</li>
                <li>Create Subject</li>
                <li>Examination Data</li>
                <li>Create Department</li>
                <li>Create Behaviour</li>
                <li>Create skills</li>
              </ul>
            </b-collapse>
          </div>
          <p class="dash-icon">
            <i class="fas fa-book-open"></i>
            <span class="dash-icon-para">Lesson Management</span>
            <a v-b-toggle:my-collapse id="sub-btn" variant="light">
              <span class="when-open"><i class="far fa-plus-square"></i></span
              ><span class="when-closed"
                ><i class="far fa-minus-square"></i
              ></span>
            </a>
          </p>
          <div>
            <b-collapse id="my-collapse">
              <ul>
                <li>App setting</li>
                <li>School information</li>
                <li>Create session</li>
                <li>Create Subject</li>
                <li>Examination Data</li>
                <li>Create Department</li>
                <li>Create Behaviour</li>
                <li>Create skills</li>
              </ul>
            </b-collapse>
          </div>
          <p class="dash-icon">
            <i class="fas fa-scroll"></i>
            <span class="dash-icon-para">Result Management</span>
            <a v-b-toggle:my-collapse id="sub-btn" variant="light">
              <span class="when-open"><i class="far fa-plus-square"></i></span
              ><span class="when-closed"
                ><i class="far fa-minus-square"></i
              ></span>
            </a>
          </p>
          <b-collapse id="my-collapse">
            <ul>
              <li>App setting</li>
              <li>School information</li>
              <li>Create session</li>
              <li>Create Subject</li>
              <li>Examination Data</li>
              <li>Create Department</li>
              <li>Create Behaviour</li>
              <li>Create skills</li>
            </ul>
          </b-collapse>

          <p class="dash-icon">
            <i class="fas fa-hotel"></i>
            <span class="dash-icon-para">Hostel Management</span>
            <a v-b-toggle:my-collapse id="sub-btn" variant="light">
              <span class="when-open"><i class="far fa-plus-square"></i></span
              ><span class="when-closed"
                ><i class="far fa-minus-square"></i
              ></span>
            </a>
          </p>
          <p class="dash-icon">
            <i class="far fa-envelope"></i>
            <span class="dash-icon-para">SMS</span
            ><a v-b-toggle:my-collapse id="sub-btn" variant="light">
              <span class="when-open"><i class="far fa-plus-square"></i></span
              ><span class="when-closed"
                ><i class="far fa-minus-square"></i
              ></span>
            </a>
          </p>
        </b-sidebar>
      </div>
    </b-navbar>
    <div class="header-1">
      <p>asssssss</p>
      <div class="circle"></div>
    </div>
    <div class="heart"></div>
    <div class="line"></div>
    <div class="heart"></div>
  </div>
</template>
<script>
export default {
  name: "Secure",
  data() {
    return {};
  },
  mounted() {
    this.$root.$on("bv::collapse::state", (collapseId, isJustShown) => {
      console.log("collapseId:", collapseId);
      console.log("isJustShown:", isJustShown);
    });
  }
};
</script>
<style scoped>
.dash-icon {
  font-weight: bold;
  color: #4a4a4a;
  margin-top: 0;
  text-align: justify;
  padding: 5px 10px;
  margin-top: 20px;
}
.dash-icon-para {
  font-size: 15px;
  padding: 0px;
  font-weight: bold;
  text-align: justify;
  padding-left: 8px;
}

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
button {
  float: right;
  margin-top: 0px;
}
.sub-header {
  width: 100%;
  height: 50px;
}
#header-detail,
h4 {
  margin-left: 2px;
  color: crimson;
}
.fa-envelope-square,
.fa-sign-out-alt {
  color: red;
  padding-left: 10px;
  font-size: 50px;
}
ul li {
  list-style-type: none;
  text-align: justify;
}
#sub-btn {
  width: 20px;
  height: 20px;
}
.fa-minus-square,
.fa-plus-square {
  margin-top: 0px;
  width: 20px;
  height: 10px;
  background-color: rgb(175, 68, 68);
  font-weight: bold;
  color: #4a4a4a;
  margin-top: 0;
  text-align: justify;
  padding: 5px 10px;
  margin-top: 20px;
}
.header-1 {
  border-left: 10px solid;
  margin-left: 100px;
  height: 320px;
  border-top-left-radius: 50%;
  border-bottom: 13px solid yellowgreen;
  width: 20%;

  border-top: 12px solid red;
  border-right: 13px green;
}
.circle {
  width: 100%;
  border-radius: 100%;
  margin-left: 10px;
  /*background-color:turquoise;*/
  height: 80%;
  border-top: 45px solid blue;
  border-bottom: 45px solid red;
  border-left: 32px solid green;
  border-right: 32px solid yellow;
}
.heart {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: wheat;
  margin-left: 370px;
  margin-top: 0px;
  border-top-left-radius: 4%;
  border-top-right-radius: 3%;
  border-bottom-left-radius: 55%;
  border-bottom-right-radius: 3%;
  border-top: 4%;
}
.line {
  border: 3px solid wheat;
  height: 370px;
  width: 00px;
  margin-top: 0px;
  margin-left: 420px;
  background-color: wheat;
  border-bottom-left-radius: 3px solid red;
}
p {
  padding-left: 200px;
}
</style>
