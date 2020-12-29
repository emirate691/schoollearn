<template>
  <b-navbar toggleable type="dark" variant=""  id="header"> 
   
    <div class="before-header">
      
      
        <a href="#" class="phone" v-b-modal.modal-sm ><i class="fas fa-comments"></i>Chat with our sales</a>
        <right>
        <b-modal id="modal-sm"   
              class="modal-prevent-closing"
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk" header-bg-variant="warning" 
              title-tag="h6" 
              ok-variant="warning" 
              size="sm" 
              title="Please fill out the form below and we will get back to as soon"  border-variant="primary" ok-only="yes"  ok-title="Submit" footer-class="p-2 border-top-0" header-class="p-2 border-bottom-0" no-stacking="false">
           <form ref="form" @submit.stop.prevent="handleSubmit">
             <div class="form-group">
            <label for="recipient-name" class="col-form-label">Name</label>
            <input type="text" v-model="name" :states="nameState" class="form-control" id="recipient-name" maxlength="30" required>
          </div>
          <div class="form-group">
            <label for="recipient-email" class="col-form-label">Email:</label>
            <input type="email"  v-model="email" :states="emailState" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
           </form>
        </b-modal>
        </right>
      
      
      <a href="" class="phone"><i class="fas fa-phone-alt"></i>+2348160238112</a>
  
      <i class="fab fa-facebook" id="head-icon"></i>
        <i class="fab fa-instagram-square" id="head-icon"></i>
        <i class="fab fa-twitter-square" id="head-icon"></i>

        

      </div>
    <b-navbar-brand href="#"
      >
      
      
      <div id="myDiv">
        <img src="https://schoolreporter.com.ng/app/school_logo/demo123/1589582560.png" id="header-img">
      
      
      <a href="#"  class="btn active" @click="gotoFeature()">FEATURES</a>
    
      
      <a href="#"  class="btn active" @click="gotoAbout()">ABOUT US</a>
       <a href="#"  class="btn active" @click="gotoSecurity()">SECURITY $ TRUST</a>
       
       <a href="#"  class="btn active" >PRICING</a>
       
        
        </div>
      
    </b-navbar-brand>

    

  </b-navbar>
</template>

<script>
//import Demo from "@/views/Demo.vue";
//import { component } from "vue/types/umd";
export default {
  name: "Header",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
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
    
  },
  
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
  margin-left:50px;
  margin-top:24px;
  text-decoration:none;
  font-weight:200;
  
  
  
}
.btn:hover {
  color:#e0a800;
  border-bottom-color:#ffc107;
  
  
}
a:link{
 color:darkslateblue
}



.before-header {
  
  padding-left: 400px;
  
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
#header-img {
 height: 80px; 
}
form {
  
  border: 1px solid silver;

}
.chat-message {
  color: steelblue;
}

#header {
  
  border-bottom-color: #2fcaba;
  
}
.form-group {
  padding-left: 10px;
  padding-right:10px;
}

#modal-sm {
  background-color: #ffc107;
}
#head-icon,.fa-facebook, .fa-instagram-square, .fa-twitter-square {
  font-size:30px;
  color:silver
}
.fa-comments {
  padding-left:5px
  
}


</style>
