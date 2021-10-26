const app = Vue.createApp({
    data: () => ({
        title: "forms",
        datos: {
            langs: [],
            genre: []
        }
    }),
    methods: {
        handleSubmit(){
            console.log(this.datos)
        }
    },
})