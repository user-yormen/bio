<template>
  
  <v-app-bar app color="#111111" dark flat class="px-8">
  
    <v-btn>
      <v-icon color="#ffffff">
        fas fa-user
      </v-icon>
    </v-btn>
    
    <v-spacer></v-spacer>

    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('more_details')">About Me</v-btn>
    <v-btn text @click="scroll('projects')">Projects</v-btn>
    <v-btn text @click="scroll('reach_out')">Get to me</v-btn>
  
  </v-app-bar>

</template>

<script>
export default {
  methods:{
    scroll(refName){
      const element = document.getElementById(refName);
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style>

</style>