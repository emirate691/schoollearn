<template>
  <div class="footer">
    <div class="sub-footer">
      <div >
    
      <p id="footer-top-para"> 
      
        
    start growing with <br /><span class="top-pic">TopNotch</span></p>
      </div>
      
      <div class="footer-btn-started">
        
        <b-button id="contents-1-btn" variant="warning" @click="gotoPage()"
          >Get Started</b-button
        ><br /><br />
        <b-button id="contents-1-btn" variant="primary" @click="addBtn()"
          >Request Demo</b-button
        >
      </div>
    </div>
    <br /><br />
    <hr class="footer-bottom" />
    <b-row>
      <b-col cols="4">
        <h4 class="foot">Company</h4>
        <li>About us</li>
        <li>Gallery</li>
        <li>Features Module</li>
        <li>Subscription plan</li>
      </b-col>
      <b-col cols="4">
        <h4 class="foot">Learn More</h4>
        <li>Our product</li>
        <li>Our Service</li>
        <li>FAQS</li>
        <li>Terms and conditions</li>
      </b-col>
      <b-col cols="4">
        <h4 class="foot">Contact us</h4>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram-square"></i>
        <i class="fab fa-twitter-square"></i>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  methods: {
    addBtn() {
      this.$router.push({ path: "/Demo" });
    },
    gotoPage() {
      this.$router.push({ path: "/Detail" });
    }
  }
};
</script>
<style>
.footer {
  background-image: linear-gradient(lightyellow, darkslateblue);
  height: 530px;
  margin-top: 250px;
  width: 992px;
  
}
.footer-bottom {
  background-color: brown;
  margin-top: 150px;
}
.footer-para {
  color: white;
  text-align: center;
  font: outline;
  font-style: oblique;
  font-weight: 500;
}
/*.par {
  margin-top: 0px;
  margin-left: 65px;
}*/

.fa-facebook,
.fa-instagram-square,
.fa-linkdin-square,
.fa-twitter-square {
  padding: 5px;
  padding-left: 5px;
  font-size: 40px;
}

.footer-btn-started {
  float: right;
  margin-top: 60px;
}
#contents-1-btn {
  margin-right: 60px;
  width: 300px;
  height: 50px;
  border-radius: 40px;
}
#footer-top-para {
  float: left;
  margin-left: 40px;
  margin-top: 70px;
  color:rgb(41, 41, 35);
  text-align: justify;
  font-size:20px
  
}
.footer-top-para-1 {
 border-right: 3px solid beige;
 height: 100px;
 border-spacing: 3px;

 
 
}

.top-pic {
  font-weight: 600;
  font-size: 35px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color:rgb(41, 41, 35)
}
  
  

.foot {
  color: black;
  font-size: 25px;
  font-weight: 50;
}
.sub-footer {
  background-color: red;
  margin-top: 30px;
}
</style>
