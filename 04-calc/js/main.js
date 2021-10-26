const app = Vue.createApp({
  data: () => ({
    title: "calc",
    n1: 0,
    n2: 0,
  }),
  computed: {
    add() {
      return this.n1 + this.n2;
    },
    rest() {
      return this.n1 - this.n2;
    },
    mult() {
      return this.n1 * this.n2;
    },
    div() {
        const res = this.n1 / this.n2
        return res=== Infinity || res === -Infinity ? "indefined" : res
    },
  },
});
