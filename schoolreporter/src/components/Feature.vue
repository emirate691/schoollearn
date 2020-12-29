<template>
  <div>
    <Header />
    <h3>Features </h3>
    <p> Comprehensive, yet Simple </p>
    <div class="container" id="feature-first-sec">
    <h3 class="teacher">Topnotch for Teacher </h3>
    <p class="feature-para">Eliminate stress from teaching with our comprehensive but simple modules. Easily manage<br> everything from class schedule, students attendance, assessments, and grading. Teaching <br>has never been this stress-free!</p>
    </div>
    <div class="container">
     <b-row class="feature-card">
       <b-col>
         <b-card class="card-body">
           <b-card-title class="feature-card-title">Homework Management</b-card-title>
           <b-card-text>
             Create homework with defined due dates, subject notes, and resources in seconds and instantly share with students. Assign, track & evaluate homework of every student with this smart homework management tool.
           </b-card-text>
         </b-card>
       </b-col>
        <b-col>
         <b-card class="card-body">
            <b-card-title class="feature-card-title">Attendance Management</b-card-title>
           <b-card-text>
             Eliminate absenteeism and lateness with BlueBIc’s attendance module. Keep track of your students’ attendance, including lateness. Generate weekly, monthly and termly reports.
           </b-card-text>
         </b-card>
       </b-col>
      
     </b-row>
     <b-row class="feature-card-2">
       <b-col>
         <b-card class="card-body">
           <b-card-title class="feature-card-title">Grading & Assessment</b-card-title>
           <b-card-text>
             Unlimited flexibility in creating assessment formats for computing and assigning grades. Keep parents up to date with their child’s progress, plus quickly identify and address patterns of progress for groups or individuals
           </b-card-text>
         </b-card>
       </b-col>
        <b-col>
         <b-card class="card-body">
            <b-card-title class="feature-card-title">Report Cards</b-card-title>
           <b-card-text>
            Fully customizable report cards according to your grading criteria. Generate error-free reports and transcripts.
           </b-card-text>
         </b-card>
       </b-col>
      
     </b-row>
    </div>
  <div class="container" id="feature-first-sec">
    <h3 class="teacher">Topnotch for Administrators </h3>
    <p class="feature-para">Monitor all activities that occur in your institution. From student and staff management to <br>inventory and financial transactions oversight. Instantly generate any report you need.</p>    
    </div>
    <div class="container">
     <b-row class="feature-card">
       <b-col>
         <b-card class="card-body">
           <b-card-title class="feature-card-title">Student management</b-card-title>
           <b-card-text>
             Create homework with defined due dates, subject notes, and resources in seconds and instantly share with students. Assign, track & evaluate homework of every student with this smart homework management tool.
           </b-card-text>
         </b-card>
       </b-col>
        <b-col>
         <b-card class="card-body">
            <b-card-title class="feature-card-title">Human Resource management</b-card-title>
           <b-card-text>
             Eliminate absenteeism and lateness with BlueBIc’s attendance module. Keep track of your students’ attendance, including lateness. Generate weekly, monthly and termly reports.
           </b-card-text>
         </b-card>
       </b-col>
      
     </b-row>
     <b-row class="feature-card-2">
       <b-col>
         <b-card class="card-body">
           <b-card-title class="feature-card-title">Grading, Results, & transcripts</b-card-title>
           <b-card-text>
             Unlimited flexibility in creating assessment formats for computing and assigning grades. Keep parents up to date with their child’s progress, plus quickly identify and address patterns of progress for groups or individuals
           </b-card-text>
         </b-card>
       </b-col>
        <b-col>
         <b-card class="card-body">
            <b-card-title class="feature-card-title">Timetable Management</b-card-title>
           <b-card-text>
            Fully customizable report cards according to your grading criteria. Generate error-free reports and transcripts.
           </b-card-text>
         </b-card>
       </b-col>
      
     </b-row>
    </div>
  <div class="container" id="feature-first-sec">
    <h3 class="teacher">Topnotch for Parents </h3>
    <p class="feature-para">Monitor all activities that occur in your institution. From student and staff management to <br>inventory and financial transactions oversight. Instantly generate any report you need.</p>    
    </div>
    <div class="container">
     <b-row class="feature-card">
       <b-col>
         <b-card class="card-body">
           <b-card-title class="feature-card-title">Parent Dashboard</b-card-title>
           <b-card-text>
             Create homework with defined due dates, subject notes, and resources in seconds and instantly share with students. Assign, track & evaluate homework of every student with this smart homework management tool.
           </b-card-text>
         </b-card>
       </b-col>
        <b-col>
         <b-card class="card-body">
            <b-card-title class="feature-card-title">Academic Progress</b-card-title>
           <b-card-text>
             Eliminate absenteeism and lateness with BlueBIc’s attendance module. Keep track of your students’ attendance, including lateness. Generate weekly, monthly and termly reports.
           </b-card-text>
         </b-card>
       </b-col>
      
     </b-row>
     <b-row class="feature-card-2">
       <b-col>
         <b-card class="card-body">
           <b-card-title class="feature-card-title">Grading & Assessment</b-card-title>
           <b-card-text>
             Unlimited flexibility in creating assessment formats for computing and assigning grades. Keep parents up to date with their child’s progress, plus quickly identify and address patterns of progress for groups or individuals
           </b-card-text>
         </b-card>
       </b-col>
        <b-col>
         <b-card class="card-body">
            <b-card-title class="feature-card-title">Finance & Fees Payment</b-card-title>
           <b-card-text>
            Fully customizable report cards according to your grading criteria. Generate error-free reports and transcripts.
           </b-card-text>
         </b-card>
       </b-col>
      
     </b-row>
    </div>
  <div class="container" id="feature-first-sec">
    <h3 class="teacher">Topnotch for Students </h3>
    <p class="feature-para">Monitor all activities that occur in your institution. From student and staff management to <br>inventory and financial transactions oversight. Instantly generate any report you need.</p>    
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
p {
  text-align: center;
}
#feature-first-sec {
  text-align: left;
}
#feature-first-sec, .feature-para {
  text-align: left;
}

.feature-card {
  padding-top: 100px;
}
.feature-card-2 {
  margin-top: 20px;
}
.feature-card-title {
  font-size: 16px;
  margin-top: 0;
  text-align: left;
  font-weight:700
} 
.card-body {
  height: 200px;
}
</style>