<template>
    <div>
        <h1>Add Sailor</h1>
        <form @submit.prevent="addSailor" class="add-sailor">
            <div>
                <label for="name">Nom : </label>
                <input type="text" name="name" id="name" v-model="name" required/>
            </div>
            <div>
                <label for="age">Age : </label>
                <input type="number" name="age" id="age" v-model="age" required/>
            </div>
            <div>
                <label for="role">Role : </label>
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
                    <option valeur="0">Aucun</option>
                    <option valeur="1">Débutant</option>
                    <option valeur="2">Intermediaire</option>
                    <option valeur="3">Avancé</option>
                    <option valeur="4">Expert</option>
                </select>
            </div><div>
                <label for="fight_lvl">Niveau en combat : </label>
                <select  name="fight_lvl" id="fight_lvl" v-model="fight_lvl" >
                    <option valeur="0">Aucun</option>
                    <option valeur="1">Débutant</option>
                    <option valeur="2">Intermediaire</option>
                    <option valeur="3">Avancé</option>
                    <option valeur="4">Expert</option>
                </select>
            </div>
            <div>
                <label for="lead_lvl">Niveau de Leadership : </label>
                <select  name="lead_lvl" id="lead_lvl" v-model="lead_lvl" >
                    <option valeur="0">Aucun</option>
                    <option valeur="1">Débutant</option>
                    <option valeur="2">Intermediaire</option>
                    <option valeur="3">Avancé</option>
                    <option valeur="4">Expert</option>
                </select>
            </div>
            <input type="submit" value="Valider" :disabled="isFormNotValid"/>
        </form>
    </div>
</template>

<script>
import { getLvlName, getLvlInt }from "@/utils/lvl.js";
import { getRoleName, getRoleValue }from "@/utils/role.js";
import { addSailor as insertSailor } from '@/API/API.js';


    export default {
        name: "AddSailor",
        data(){
            return {
                name: '',
                age: '18',
                role: getRoleName("CANDIDATE"),
                swim_lvl: getLvlName(0),
                fight_lvl: getLvlName(0),
                lead_lvl: getLvlName(0),
            }
        },
        computed: {
            isFormNotValid(){
                return !(this.name.length && this.age)
            }
        },
        methods: {
            async addSailor(){

                if(this.isFormNotValid) {
                    alert("Formulaire non valide"); 
                    return;
                }

                let data = {
                    "name": this.name, 
                    "age": this.age,
                    "role": getRoleValue(this.role), 
                    "swim_lvl": getLvlInt(this.swim_lvl), 
                    "fight_lvl": getLvlInt(this.fight_lvl), 
                    "lead_lvl": getLvlInt(this.lead_lvl), 
                };                
                await insertSailor(data);
                this.emitter.emit("load-sailors");
                this.$router.push({ name: 'Sailors' });
            }

        }
    }
</script>

<style lang="sass" scoped>

</style>