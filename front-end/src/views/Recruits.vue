<template>
  <div class="recruits">
    <h2>Les différents membres de l'équipage</h2>
    <template v-if="recruits.length">
        <div class="recruits-list" v-for="(recruit, i) in recruits" :key="i">
            <router-link :to="{ name: 'Sailor', params: { id:recruit.id } }">
                <Sailor :sailor="recruit" />
            </router-link>
        </div>
    </template>
    <div v-else>
        Aucune recrue
    </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import Sailor from '@/components/Sailor'

export default {
  name: 'Sailors',
  components: { Sailor },
  computed: {
    ...mapGetters({
      sailors : 'sailors'
    }),
    recruits(){
        return this.sailors.filter(sailor => sailor.role != "CANDIDATE");
    }

  },
  methods: {
  },
}
</script>

<style lang="sass">
.sailors
  display: flex
  flex-direction: column
  align-items: center

  .recruits-list
    width: 100%

</style>