import { defineStore } from 'pinia'

/* pro web
export const serverAddress = defineStore('serverAddress', {
    state: () => {
        return {
            address: "https://kristynadrevikovska.cz/api"
        }
    }
})
 */ 

//pro localhost
export const serverAddress = defineStore('serverAddress', {
    state: () => {
        return {
            address: "http://localhost:5174"
        }
    }
})