<template>
  <div class="sailors">
    <h1>Bienvenu Jason dans la gestion de l'équipage de l'Argo !</h1>
    <hr />
    <div v-if="freePlaces>0">
      <h2>Il reste {{ freePlaces }} place{{ (freePlaces==1) ? '' : 's' }}</h2> 
    </div>
    <div v-else>
      <h2>L'équipage de l'Argo est au complet</h2>
      <button @click="go">Souquez les artimuses !!!</button>
    </div>
      

    <h2>Les différents matelots et candidats</h2>
    <div class="sailors-list" v-for="(sailor, i) in sailors" :key="i">
      <router-link :to="{ name: 'Sailor', params: { id:sailor.id } }">
        <Sailor :sailor="sailor" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Sailor from '@/components/Sailor'
import { maxRecruits } from "../../app.config.json"

export default {
  name: 'Sailors',
  components: { Sailor },
  computed: {
    ...mapGetters({
      sailors : 'sailors'
    }),
    freePlaces(){
      return maxRecruits - this.sailors.filter(sailor => sailor.role != "CANDIDATE").length;
    }

  },
  methods: {
    go(){
      alert("C'est ainsi que parti Jason en quête de la toison d'or, à bord de l'Argo, accompagné par ses " + maxRecruits + " fidèles compagnons.")
    }
  },
}
</script>

<style lang="sass">
.sailors
  display: flex
  flex-direction: column
  align-items: center

  h1
    font-size: 4rem
    text-align: center

  &>div
    text-align: center

  .sailors-list
    width: 100%

</style>