<template>
  <div class="candidates">
    <h2>Les différents membres de l'équipage</h2>
    <template v-if="candidates.length">
        <div class="candidates-list" v-for="(candidate, i) in candidates" :key="i">
        <router-link :to="{ name: 'Sailor', params: { id:candidate.id } }">
            <Sailor :sailor="candidate" />
        </router-link>
        </div>
    </template>
    <div v-else>
        Aucun candidat
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
    candidates(){
        return this.sailors.filter(sailor => sailor.role == "CANDIDATE");
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

  .candidates-list
    width: 100%

</style>