<template>
    <div>
        <Header />
        <h3> Security at Topnotch </h3>
        <p>Partner with a company embracing security</p>
        <div class="security-first-sec">
        <b-row>
        <b-col sm="6" md="6">
        <b-img src="https://www.bluebic.com/assets/images/security.png" />
        </b-col>
        <b-col cols="6" md="6">
        <p class="sec-section">
        Customer confidence and data security is critical to everything to we do, and we are proud to exceed industry standards when it comes to protecting your institution and students. 
 
       <br> Topnotch certifies the security of our application, database, and infrastructure. The master admin, who holds the subscription, has control over who has access and what they are able to do on the system. 

        </p>
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
h3 {
  margin-top: 30px;
}
.sec-section {
  
  text-align:justify;
  margin-right:40px;
  margin-left:0px
}
.security-first-sec {
  margin-top: 70px
}
</style>