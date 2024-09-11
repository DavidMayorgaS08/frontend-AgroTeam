import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useLoginStore = defineStore("login", () => {
    let token = ref("");
    let user = ref("");

    let login = async (data) => {
        try {
            let res = await axios.post("/api/login", data);
            console.log(res.data);
            token.value = res.data.token;
            user.value = res.data.admin;
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    };

    return {
        token,
        user,
        login,
    };
},
{
    persist: {
        paths: ["token", "user"],
    },
});