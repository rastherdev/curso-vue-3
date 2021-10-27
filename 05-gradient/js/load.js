if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((reg) => console.log("ok"))
      .catch((err) => console.log(err));
  }