import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mf-vssouza/core-layout",
  app: () => System.import("@mf-vssouza/core-layout"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@mf-vssouza/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location: Location) => location.pathname === "/",
});

registerApplication({
  name: "@mf-vssouza/customers",
  app: () => System.import("@mf-vssouza/customers"),
  activeWhen: ["/customers"],
});

// registerApplication({
//   name: "@vsestudos/navbar",
//   app: () => System.import("@vsestudos/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
