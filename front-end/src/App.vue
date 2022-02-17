<template>
  <header>
    <nav>
      <div>
        <router-link :to="{ name: 'Sailors' }">Matelots</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Candidates' }">Candidats</router-link>
      </div>
      <div>
        <router-link :to="{ name: 'Recruits' }">Recrues</router-link>
      </div>
      <div>
        <router-link  :to="{ name: 'AddSailor' }">Ajouter un membre</router-link>
      </div>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script>
import miligram from "milligram";
import { getSailors } from '@/API/API.js';
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  computed:{
    ...mapGetters({
        sailors : 'sailors'
    })
  },
  methods: {
    ...mapMutations([
      "setSailors"
    ]),

    async getSailors(){
      let sailors = await getSailors();
      console.log(sailors);
      this.setSailors(sailors);
    }
  },
  async mounted(){
    this.emitter.on("load-sailors", async () => {
      console.log("LOAD"); 
      await getSailors();

    })
    await this.getSailors();
  }
}
</script>


<style lang="sass">
html, body
  margin:0

main
  padding: 0 20%

#app
  font-family: Arial, Helvetica, sans-serif

header
  background-color : #9B4DCa 
  margin-bottom: 2rem
  
  nav
    padding: 30px
    display: flex
    justify-content: space-between

    a 
      font-weight: bold
      color: #fff

      &:hover
        color: #d5d5d5 !important

      &.router-link-exact-active
        text-decoration: underline
        color: #fff

</style>
