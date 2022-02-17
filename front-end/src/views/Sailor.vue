<template>
    <div class="sailor-vue" v-if="sailor"> 
        <h2> Modifier {{ sailor.name }} </h2>
        <form @submit.prevent="modifySailor" class="modify-sailor">
            <div>
                <label for="name">Nom : </label>
                <input type="text" name="name" id="name" v-model="name" />
            </div>
            <div>
                <label for="age">Age : </label>
                <input type="number" name="age" id="age" v-model="age" />
            </div>
            <div>
                <label for="role">Rôle : </label>
                <select  name="role" id="role" v-model="role" >
                    <option valeur="CANDIDATE">Candidat</option>
                    <option valeur="SAILOR">Marin</option>
                    <option valeur="LIEUTENANT">Lieutenant</option>
                    <option valeur="CAPTAIN">Capitaine</option>
                </select>
            </div>
            <div>
                <label for="swim_lvl">Niveau de nage : </label>
                <select  name="swim_lvl" id="lvl" v-model="swim_lvl" >
                    <option valeur="0">Nul</option>
                    <option valeur="1">Débutant</option>
                    <option valeur="2">Intermediaire</option>
                    <option valeur="3">Avancé</option>
                    <option valeur="4">Expert</option>
                </select>
            </div><div>
                <label for="fight_lvl">Niveau en combat : </label>
                <select  name="fight_lvl" id="fight_lvl" v-model="fight_lvl" >
                    <option valeur="0">Nul</option>
                    <option valeur="1">Débutant</option>
                    <option valeur="2">Intermediaire</option>
                    <option valeur="3">Avancé</option>
                    <option valeur="4">Expert</option>
                </select>
            </div>
            <div>
                <label for="lead_lvl">Niveau de Leadership : </label>
                <select  name="lead_lvl" id="lead_lvl" v-model="lead_lvl" >
                    <option valeur="0">Nul</option>
                    <option valeur="1">Débutant</option>
                    <option valeur="2">Intermediaire</option>
                    <option valeur="3">Avancé</option>
                    <option valeur="4">Expert</option>
                </select>
            </div>
            <div class="buttons-container">
                <input type="button" value="Supprimer" @click="deleteSailor"/>
                <input type="submit" value="Valider" />
            </div>
        </form>
    </div>
    <div v-else>Sailor not found</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getLvlName, getLvlInt }from "@/utils/lvl.js";
import { getRoleName, getRoleValue }from "@/utils/role.js";
import { modifySailor as modifySailorRequest, deleteSailor as deleteSailorRequest } from '@/API/API.js';

    export default {
        data(){
            return {
                id: this.$route.params.id,
                sailor: null,
                findingSailor: null,
                name: '',
                age: '',
                role: '',
                swim_lvl: '',
                fight_lvl: '',
                lead_lvl: '',
            }
        },
        computed: {
            ...mapGetters({
                sailors: 'sailors'
            }),
        },
        methods: {
            findSailor() { 
                this.sailor = this.sailors.find(s => s.id  == this.id); 
                if(this.sailor)  this.setSailor() 
            },
            setSailor() {
                this.name = this.sailor.name;
                this.age = this.sailor.age;
                this.role = getRoleName(this.sailor.role);
                this.swim_lvl = getLvlName(this.sailor.swim_lvl);
                this.fight_lvl = getLvlName(this.sailor.fight_lvl);
                this.lead_lvl = getLvlName(this.sailor.lead_lvl);
            },
            async modifySailor(){
                let data = {
                    "id": this.id, 
                    "name": this.name, 
                    "age": this.age,
                    "role": getRoleValue(this.role), 
                    "swim_lvl": getLvlInt(this.swim_lvl), 
                    "fight_lvl": getLvlInt(this.fight_lvl), 
                    "lead_lvl": getLvlInt(this.lead_lvl), 
                };
                await modifySailorRequest(this.id, data);
                this.emitter.emit("load-sailors");
                this.$router.push({ name: 'Sailors' });
            },
            async deleteSailor(){
                if(confirm("Êtes-vous sûr de vouloir supprimer" + this.sailor.name + " ?")){
                    await deleteSailorRequest(this.id);
                    this.emitter.emit("load-sailors");
                    this.$router.push({ name: 'Sailors' });

                }
            }
        },
        created(){ this.findSailor() },
        mounted(){
            if (!this.sailor){
                this.findingSailor = setInterval(() => {
                   this.findSailor();
               }, 2000)
            }

        },
        watch: {
            sailor: function(){ 
                if (this.sailor) {
                    clearInterval(this.findingSailor);
                }
            }
        }

    }
</script>

<style lang="sass" scoped>
.buttons-container
    display: flex
    justify-content: space-between
</style>