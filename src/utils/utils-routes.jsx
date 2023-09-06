export const routesHash = [
  {
    route: "/",
    headerButtons: [
      { isLogged: false, text: "Sign In", location: "/login" },
      { isLogged: true, text: "Explorar", location: "/inicio" },
    ],
    headerStyle: "main",
  },
  {
    route: "/login",
    headerButtons: [
      {
        isLogged: false,
        text: "Regresar",
        location: "/",
        customButton: "login",
      },
    ],
    headerStyle: "login",
  },
  {
    route: "/inicio",
    headerButtons: [
      { isLogged: true, text: "Inicio", location: "/" },
      { isLogged: true, text: "Nueva serie", location: "/serie" },
      { isLogged: false, text: "Sign In", location: "/login" },
    ],
    headerStyle: "inicio",
  },
];
