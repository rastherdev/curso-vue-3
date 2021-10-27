const app = Vue.createApp({
  data: () => ({
    title: "Gradients",
    c1: "#ffffff",
    c2: "#ffffff",
    orientation: 1,
  }),
  computed: {
    setColor() {
        if (this.orientation == 1) {
            return `background: linear-gradient(to right, ${this.c1}, ${this.c2});`;
        }
        if (this.orientation == 2) {
            return `background: linear-gradient(to left, ${this.c1}, ${this.c2});`;
        }
        if (this.orientation == 3) {
            return `background: linear-gradient(to top, ${this.c1}, ${this.c2});`;
        }
        if (this.orientation == 4) {
            return `background: linear-gradient(to bottom, ${this.c1}, ${this.c2});`;
        }
    },
  },
});
