<template>
  <v-app id="home" :style="{background: $vuetify.theme.themes.dark.background}">
    <Navbar />
    <v-container fluid>
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
        
        <v-col cols="12" class="pad">
          <div class="first" id="projects">
            <v-row>
              <v-col cols="12">
                
                <div class="child bgColor1">
                  <v-icon color="#A7121D" x-large class="ml-3">
                    mdi-web
                  </v-icon>
                  <h3 class="white--text ml-3 mt-4">SSO</h3>
                  <p class="grey--text ml-3 mt-6">
                    Keycloak is an open source software <br/> to allow single sign-on with Identity...
                  </p>
                  <v-btn color="#A7121D" dark text>
                    View On GitHub
                    <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                
                <div class="child bgColor2">
                  <v-icon x-large class="ml-3" dark>
                    mdi-api
                  </v-icon>
                  <h3 class="white--text ml-3 mt-4">Restful APIs</h3>
                  <p class="grey--text ml-3 mt-6">
                    Keycloak is an open source software product <br/> to allow single sign-on...
                  </p>
                  <v-btn dark text>
                    Check Here
                    <v-icon> mdi-arrow-right</v-icon>
                  </v-btn>
                </div>

                <div class="child bgColor1">
                  <v-icon color="#A7121D" x-large class="ml-3">
                    mdi-cellphone
                  </v-icon>
                  <h3 class="white--text ml-3 mt-4">SSO</h3>
                  <p class="grey--text ml-3 mt-6">
                    WildFly community project is under <br/> the stewardship of Red Hat...
                  </p>
                  <v-btn color="#A7121D" dark text>
                    View On GitHub
                    <v-icon>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-col>

              <v-col cols="12" class="mt-10">
                <div class="child1">
                  <h3 class="red--text text darken mt-2">Years of Experience</h3>
                  <h1 class="white--text mt-4 number">5+</h1>
                </div>
              </v-col>

              <v-col cols="12" class="mt-10">
                <!-- <h4 class="red--text text darken mt-2">Skills Set</h4> -->
                <h2 class="red--text text darken mt-4">Skill Set </h2>
                <div class="mt-4">
                    <v-tabs v-model="tab" centered icons-and-text>
                      <v-tabs-slider></v-tabs-slider>
                      
                      <v-tab v-for="item in items" :key="item">
                      {{ item }}
                      </v-tab>
                    </v-tabs>
                    
                    <v-tabs-items v-model="tab">
                        <v-tab-item v-for="text in texts" :key="text" >
                          <v-row align-v="text-center" class="middle">
                            <v-div v-for="stack in text" :key="stack">
                              <v-tab class="mt-4">
                                <v-col cols="12" >
                                  {{ stack }}
                                  <img :src="'images/' + stack + '.svg'" contain height="40">
                                </v-col>
                                
                              </v-tab>
                            </v-div>
                          </v-row>
                        </v-tab-item>
                      </v-tabs-items>
                  </div>
              </v-col>

              <v-col cols="12">

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
    },
    data(){
      return{
        tab: null,
        items:[
            'fullstack', 'backend', 'frontend', 'sysadmin'
        ],
        texts: {
          fullstack: [
            'apache', 'docker', 'flutter', 'git', 'grails', 'groovy', 'heroku', 'hibernate', 'java', 'javascript', 'keycloak', 'linux', 'mysql', 'nginx', 'spring', 'tomcat', 'windows',
          ],
          backend: [
            'java', 'groovy', 'grails', 'spring', 'hibernate'
          ],
          frontend:[
            'vue', 'flutter'
          ],
          sysadmin: [
            'apache', 'docker', 'git', 'heroku', 'keycloak', 'linux', 'mysql', 'nginx', 'spring', 'tomcat', 'windows',
          ]
        }
      }
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
    height: 610px;
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
    padding: 2rem 1rem;
    vertical-align: middle;
    margin-right: 8px;
    width: 240px;
  }

  .bgColor1{
    background-color: #111000;
  }

  .bgColor2{
    background-color: #CE1000;
  }

  .child1{
    display: inline-block;
    padding: 2rem 1rem;
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
    margin-right: 8px;
  }

  .bargin-bottom{
    margin-bottom: 8px;
  }

  .padding{
    padding: 8px 0px;
  }

  .col-12.pad{
    padding: 12px 0 !important;
  }

  .col-12.childcol{
    padding: 0 important;
  }

  h1.number{
    font-size: 50px;
    font-weight: bold;
  }
  .middle{
    display: inline-flex;
  }
</style>