const app = Vue.createApp({
    data(){
        return {
            user: {
                title: "Hello World",
                name: "Giovany",
                age: 17,
                movies: ["super rapidos y mega furiosos", "el santo y las momias", "el komander: el ejecutor"],
                url: "https://google.com",
                img: "https://cdn.pixabay.com/photo/2019/06/08/21/32/castle-4261029_960_720.jpg",
                classValue: "error",
            }
        }
    }
});
console.log(app.title);
