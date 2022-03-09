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
                  <h3 class="red--text text darken mt-4">Years of Experience</h3>
                  <h1 class="white--text mt-4 number">5+</h1>
                </div>
              </v-col>
             
                  <v-col cols="12" class="mt-12">
                    <h4 class="red--text text darken mt-4">Skills</h4>
                    <h2 class="red--text text darken mt-4">Languages </h2>
                    <!-- <div>
                        <v-tabs
                          v-model="tab" centered icons-and-text>
                          <v-tabs-slider></v-tabs-slider>
                          <v-tab href="#tab-1">
                            Java
                            <v-img src="images/java.svg" contain height="100"></v-img>
                          </v-tab>

                          <v-tab href="#tab-2">
                            Groovy
                            <v-img src="images/groovy.svg" contain height="100"></v-img>
                          </v-tab>

                          <v-tab href="#tab-3">
                            Javascript
                            <v-img src="images/javascript.svg" contain height="100"></v-img>
                          </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                          <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
                            <v-card flat>
                              <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                          </v-tab-item>
                        </v-tabs-items>
                      </div> -->

                      <div>
                        <v-tab v-for="item in items" :key="item">
                          {{ item }}
                            <v-tabs-items v-model="tab">
                            <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
                              <v-card flat>
                                <v-card-text>{{ text }}</v-card-text>
                              </v-card>
                            </v-tab-item>
                          </v-tabs-items>
                        </v-tab>
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
    },
    // data () {
    //   return {
    //     tab: null,
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //   }
    // },
    data(){
      return{
        tab:[
            'fullstack', 'backend', 'frontend', 'sys-admin'
        ],
        text: {
          fullstack: [
            'apache', 'docker', 'flutter', 'git', 'grails', 'groovy', 'heroku', 'hibernate', 'java', 'javascript', 'keycloak', 'linux', 'mysql', 'nginx', 'spring', 'tomcat', 'windows',
          ],
          frontend:[
            'vue', 'flutter'
          ],
          backend: [
            'java', 'groovy', 'grails', 'spring'
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
</style>