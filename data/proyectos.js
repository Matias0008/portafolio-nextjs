import rick from "../public/img/proyects/rickandmorty.webp";
import mailer from "../public/img/proyects/mdmailer.webp";
import lallegada from "../public/img/proyects/lallegada.webp";
import weatherapp from "../public/img/proyects/weatherapp.webp";

export const ProyectosData = [
  {
    name: "Rick and Morty",
    subtitle: "Consumiendo la API de Rick and Morty",
    image: rick,
    desc: "Aplicacion la cual se utiliza fetch para realizar requests a la API y utilizar esa informacion a nuestro gusto.",

    url: "https://md-rickandmorty.herokuapp.com/",
    id: 1,
  },

  {
    name: "La Llegada",
    subtitle: "Aplicacion web de administración",
    image: lallegada,
    desc: "Aplicacion que permite la administracion de clientes, productos y ventas. Mediante la base de datos MySQL.",

    url: "https://md-lallegada.herokuapp.com/",
    id: 2,
  },

  {
    name: "Weather App",
    subtitle: "Aplicacion web para ver el clima",
    image: weatherapp,
    desc: "Mediante el consumo de la API podemos obtener el clima de diferentes ciudades en todas las partes del mundo.",

    url: "https://md-weatherapp.herokuapp.com/",
    id: 3,
  },

  {
    name: "Mailer App",
    subtitle: "Aplicacion web para enviar correos",
    image: mailer,
    desc: "Con la ayuda de SendGrid podemos enviar correos a quien sea. Ademas, podemos visualizarlos ya que estos son guardados.",

    url: "http://md-mailer.herokuapp.com/",
    id: 4,
  },
];
