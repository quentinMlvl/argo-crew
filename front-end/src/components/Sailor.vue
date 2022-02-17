<template>
    <div class="sailor">
        <img :src="avatar" alt="avatar" />
        <div>
            <div class="profile">
            <strong> {{ sailor.name }} </strong> <br>
            {{ sailor.age }} ans <br>
                {{ role }}  
            </div>
            <div class="skills">
                Nage : {{ swim_lvl }} <br>
                Combat : {{ fight_lvl }} <br>
                Leadership : {{ lead_lvl }}
            </div>
        </div>
    </div>
</template>

<script>
import stringHash from "string-hash"
import { getLvlName }from "@/utils/lvl.js";
import { getRoleName }from "@/utils/role.js";

export default {
    name: "Sailor",
    props: ["sailor"],
    data(){
        return {
            role : getRoleName(this.sailor.role),
            swim_lvl : getLvlName(this.sailor.swim_lvl),
            fight_lvl : getLvlName(this.sailor.fight_lvl),
            lead_lvl : getLvlName(this.sailor.lead_lvl),
        }
    },
    computed: {
        avatar : function() {
            let hashedName = stringHash(this.sailor.name) + this.sailor.name;
            return `https://avatars.dicebear.com/api/open-peeps/${hashedName}.svg`;
        }
    },
    mounted(){
    }

}
</script>

<style lang="sass" scoped>
.sailor
    border: 1px solid black
    width: auto
    border-radius: 5px
    margin: 1rem
    padding: 1rem
    display: flex
    align-items: center

    &>div
        display: flex
        width: 100%
        align-items: center
        justify-content: space-between

    img
        width: 100%
        max-width: 100px
        height: auto
        padding-right: 2rem

    .profile
        padding: 0 1rem 
        text-align: left

    .skills
        text-align: right
        
        
</style>