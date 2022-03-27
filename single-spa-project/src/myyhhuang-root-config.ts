import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@myyhhuang/single-spa-vue",
  app: () => System.import('@myyhhuang/single-spa-vue'),
  activeWhen: ["/vue"],
});

registerApplication({
  name: "@myyhhuang/single-spa-react",
  app: () => System.import('@myyhhuang/single-spa-react'),
  activeWhen: ["/react"],
});

// registerApplication({
//   name: "@myyhhuang/navbar",
//   app: () => System.import("@myyhhuang/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
