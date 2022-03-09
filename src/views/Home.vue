<template>
  <v-app id="home" :style="{background: $vuetify.theme.themes.dark.background}">
    <Navbar />
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-img src="coding-0.svg" contain max-height="500"></v-img>
        </v-col>
        <v-col cols="6">
          <h4 class="red--text text-darken-4 top">R. T. O. Nmai</h4>
          <h1 class="white--text">Java/Grails Developer</h1>
          <p class="grey--text">
            With more than  five years building complex systems like single sign on with Keycloak, 
            open source project like SORMAS, mobile application and APIs for external access.....
            <!-- I have used spring boot and a few other stacks to keep my work simple and straight forward -->
          </p>
          <v-btn tile color="#EE1EE" dark>About me</v-btn>
        </v-col>
        <v-col cols="12" class="padd">
          <div class="first" id="projects">
            <v-row>
              <v-col cols="12">
                <div class="child bigColor1">
                  <v-icon color="#A7121D" x-large class="ml-3">
                    mdi-key
                  </v-icon>
                  <h3 class="white--text ml-3mt-4">SSO</h3>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
<style scoped>  
  .top{
    margin-top: 190px;
    font-size: 25px;
  }
  .topInverse{
    margin-top: -250px;
  }
  .topToolBar{
    margin-top: 100px;
    text-align: center;
  }

  .first{
    width: 100%;
    height: 640px;
    background: linear-gradient(
      to right,
      #181818,
      #181818 50%,
      #111111 50%,
      #111111 50%
    );
    text-align: center;
    padding: 2rem 2rem;
  }
  .second{
    width: 100%;
    height: 400px;
    background: #181818;
    text-align: center;
    padding: 2rem 2rem;
  }

  .secondchild1{
    display: inline-block;
    background-color: #1e1e1e;
    text-align: left;
    padding: 2rem 2rem;
    vertical-align: middle;
    margin-top: 250px;
  }

  .child{
    display: inline-block;
    padding: 2rem 2rem;
    vertical-align: middle;
    margin-right: 5px;
    width: 240px;
  }

  .child2{
    display: inline-block;
    vertical-align: middle;
    margin-right: 245px;
  }

  .margin-right{
    margin-right: 10px;
  }

  .bargin-bottom{
    margin-bottom: 10px;
  }

  .padding{
    padding: 10px 0px;
  }

  .col-12-pad{
    padding: 12px 0 !important;
  }

  .col-12-child-col{
    padding: 0 important;
  }

  h1.number{
    font-size: 50px;
    font-weight: bold;
  }
</style>