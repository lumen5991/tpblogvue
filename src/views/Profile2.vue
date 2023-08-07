<script lang="ts" setup>
    import { ref } from "vue"
    /* import { user } from "@/api/user.ts" */
    import { userInfos as user} from "@/api/user.ts";
    import { storeToRefs } from "pinia";
    import { useUserStore } from "@/stores/user";

    const {userName2}=storeToRefs(useUserStore())
</script>
<template>
    <div class="profile">
        Bonjour {{ userName2 }}
    </div>
</template>


<style scoped>


</style>