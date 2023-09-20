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
        text: "Home",
        location: "/",
        customButton: "login",
      },
    ],
    headerStyle: "login",
  },
  {
    route: "/inicio",
    headerButtons: [
      { isLogged: true, text: "Home", location: "/" },
      { isLogged: true, text: "Nueva serie", location: "/serie-form" },
      { isLogged: false, text: "Sign In", location: "/login" },
    ],
    headerStyle: "inicio",
  },
  {
    route: "/serie-form",
    headerButtons: [
      { isLogged: true, text: "Inicio", location: "/inicio" },
      { isLogged: false, text: "Sign In", location: "/login" },
    ],
    headerStyle: "inicio",
  },
  {
    route: "/categoria-form",
    headerButtons: [
      { isLogged: true, text: "Inicio", location: "/inicio" },
      { isLogged: true, text: "Regresar", location: "/serie-form" },
      { isLogged: false, text: "Sign In", location: "/login" },
    ],
    headerStyle: "inicio",
  },
];
