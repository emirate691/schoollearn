<template>
  <b-navbar toggleable type="dark" variant="" sticky> 
   
    <div class="before-header">
      <a href="" class="phone">Chat with our sales</a>
      <a href="" class="phone">+2348160238112</a>
    
      <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram-square"></i>
        <i class="fab fa-twitter-square"></i>

      </div>
    <b-navbar-brand href="#"
      >Topnorch
      <b-image src="logo-1.png" />
      <a href="#" @click="gotoFeature()">Features</a>
    
      
      <a href="#" @click="gotoAbout()">About us</a>
       <a href="#" @click="gotoSecurity()">Security $ Trust</a>
       
       <a href="#"
              v-b-modal.modal-prevent-closing
              variant="primary"
              size="sm"
              width="5%"
              
            >
              Pricing</a
            >
            <b-modal
              id="modal-prevent-closing"
              class="chat"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
              ok-only="yes"
              ok-title="Submit"
              
              button-size="sm"
              footer-class="p-2 border-top-0"
              header-class="p-2 border-bottom-0"
              body-bg-variant="primray"
               
        
            >
              
              <form ref="form" @submit.stop.prevent="handleSubmit">
               
                
                <label for="emailAddress" id="lbl"> Email Address</label>
                <b-form-input
                  id="emailaddress-input"
                  v-model="emailAddress"
                  :state="emailAddressState"
                  required
                ></b-form-input>
                <label for="password" id="lbl">password</label>
                <b-form-input
                  id="password-input"
                  v-model="value"
                  @input="acceptNumber"
                  required
                  value="hide"
                ></b-form-input>
                

                
              </form>
            </b-modal>
 
      
      
    </b-navbar-brand>

    


  </b-navbar>
</template>

<script>
//import Demo from "@/views/Demo.vue";
//import { component } from "vue/types/umd";
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    gotoFeature() {
      this.$router.push({ path: "/Feature" });
    },
    gotoAbout() {
      this.$router.push({ path: "/About" });
    },
     gotoSecurity() {
      this.$router.push({ path: "/Security" });
    }
    
  }
  /*components: {
    Demo
  }*/
};
</script>
<style scoped>
.ml-auto {
  text-align: left;
  font-size: 20px;
}
.toggle-btn {
  font: size 40px;
  height: 30px;
}
#page {
  border-bottom: 2px solid white;
  width: 20%;
  margin-top: 30px;
  color: #2fcaba;
  font-size: 20px;
}
a {
  padding:10px 20px;
  margin-left:20px;
  margin-top:24px
}
a:hover {
  color:yellowgreen;
  border-bottom-color:yellowgreen
  
}
.before-header {
  
  padding-left: 450px;
  
}

.phone {
  color:silver;
  margin-top: 0;


}
#password-input {
  width: 250px;
  margin-left: 30px;
  height: 40px;
  margin-top: 5px;
}
.chat {
  background-color:red
}
.top-icon {
  background: #2fcaba;
  
}

</style>
