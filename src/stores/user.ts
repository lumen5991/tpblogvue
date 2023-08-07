/* import { stat } from "fs/promises"; */
import { defineStore } from "pinia";
export const useUserStore = defineStore("user-store",{
    state:()=>{
        return{
            user:{
                email:"lumenahle@gmail.com",
                name:"Lumen",
                age:28
            },
        };
    },

    actions:{
        modifyUserName(name:string){
            this.user.name=name
        },
        modifyUserEmail(email:string){
            this.user.email=email
        }

    },
    getters:{
        userName:(state)=>state.user.email.split("@")[0],
        /* return state.user.email.split("@")[0]; */
        
        userName2(state){
            const email = state.user.email;
            const uname = email.split("@")[0];
            return uname;
        },
        userName3:(state)=>{
            const email = state.user.email;
            const uname = email.split("@")[0];
            return uname;
        },
        userAge(state){
            const newYear = new Date().getFullYear()
            const age = newYear - state.user.age
            return age
        
        }
    }
})