<script lang="ts" setup>
import { ref } from "vue";
/* import { user } from "@/api/user.ts" */
import { useRouter } from "vue-router";
import Router from "@/router";
/* import { userInfos as user} from "@/api/user.ts"; */
import { useUserStore } from "@/stores/user";
const userStore=useUserStore()
const  {userAge, userName2, user, modifyUserEmail}=useUserStore()

function gotoProfile2() {
    router.push('/profile2')
  /*   user.value.name='toto' */
  modifyUserEmail('ahle@gmailcom')
}
const router =useRouter()
</script>
<template>
    <div class="center">
        <div>
            Bienvenue {{ user.name }}
            <h2>  Vous êtes né en {{ userStore.userAge }}</h2>
        </div>
        <div>
            <button @click="gotoProfile2">Aller sur Profile 2</button>
        </div>
    </div>
</template>
<style scoped>
    .center{
        margin: 5rem auto;
        text-align: center;
    }
</style>


<style scoped></style>