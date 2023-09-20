import { v4 } from "uuid";

const series = [
  {
    id: v4(),
    name: "shingeki no kyojin",
    description:
      "La trama gira en torno a Eren Jaeger quien después de perder a su madre a manos de los titanes, decide unirse al «Ejército de las murallas» junto a su Mikasa Ackerman y su Armin Arlert con el objetivo de vengar la muerte de su madre y destruir a los titanes.",
    video: "https://www.youtube.com/embed/sFuAhHTgABs?si=9W1GfjhnVVica6gP",
    imagen:
      "https://i.blogs.es/f7af36/attack-on-titan-final-season/450_1000.jpeg",
    category: "accion",
  },
  {
    id: v4(),
    name: "Full Metal Alchemist",
    description:
      "En un universo donde la Alquimia es una ciencia que bordea la magia, Edward y Alphonse Elric cometen el mayor tabú existente. Luego de perder a su madre, intentan utilizar la alquimia para devolverle la vida. Este error les costará caro, Edward pierde un par de extremidades, mientras que Alphonse pierde todo su cuerpo. Ahora, Edward debe cargar con esta culpa y con el alma de su hermano trasmutada en una armadura de metal, mientras ambos intentarán dar con la piedra filosofal, el mítico artefacto que necesitan para recuperar el cuerpo de Alphonse.",
    video: "https://www.youtube.com/embed/J6YdEvsTQHg?si=dtpn3RwSHC_XcKVu",
    imagen:
      "https://areajugones.sport.es/wp-content/uploads/2022/06/fullmetal-alchemist-cosplay.jpg",
    category: "accion",
  },
  {
    id: v4(),
    name: "Dragon ball Z",
    description:
      "En este clásico de la animación que ya todos deberíamos conocer, seguimos a Goku, que vive una vida pacífica con su esposa e hijo luego de haber ganado el torneo mundial de artes marciales cinco años antes.",
    video: "https://www.youtube.com/embed/UQHFLYOLjn0?si=-StHKy_Q65wGb3I0",
    imagen:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/36bdc5ea4443cd8e42f22ec7d3884cbb.jpe",
    category: "accion",
  },
  {
    id: v4(),
    name: "Naruto",
    description:
      "Naruto, un joven huérfano en la aldea de Konoha, siempre ha sido marginado por tener dentro una bestia sellada que podría acabar con la aldea entera y todos sus habitantes. A pesar de ser un paría, Naruto intenta ver la vida de la manera más positiva posible, y sueña con convertirse en el ninja con mayor rango de toda la aldea, el Hokage, para probarles a todos que no es un bueno para nada.",
    video: "https://www.youtube.com/embed/VZGH9QuWVoY?si=cUzjUdI55l3DccTs",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnY2zz8Xt87khDJWdiIpkJjl3EM1jnFy66KQ&usqp=CAU",
    category: "accion",
  },
  {
    id: v4(),
    name: "Caballeros del Zodiaco",
    description:
      "En la antigüedad, un grupo de jóvenes tenía que cumplir con la tarea de proteger a la diosa de la guerra y la sabiduría, Atena. Estos jóvenes podían luchar sin armas, solo sus puños eran tan poderosos que podían levanta runa tormenta. Ahora, en el presente, un nuevo grupo de jóvenes debe aplicar para cumplir con esta tarea sagrada, y entre ellos se encuentra Seiya, un joven que lleva seis años entrenando para obtener la armadura de Pegaso.",
    video: "https://www.youtube.com/embed/0OtZaVoiH2g?si=1xZBItsH_btfKkKk",
    imagen:
      "https://i.pinimg.com/1200x/74/7c/80/747c809a8ced1bbe34538c32b55fc6a0.jpg",
    category: "accion",
  },
  {
    id: v4(),
    name: "One piece",
    description:
      "Luego de la ejecución de Gol D. Roger, el Rey Pirata, el mundo cambió. El legendario pirata, como sus últimas palabras, declaró que había ocultado el mayor tesoro del mundo, conocido como One Piece. Esto, creó la era de un mundo lleno de piratas. Entre ellos, Luffy D. Monkey, un joven de 17 años que parece todo menos el típico pirata, y que se ve atraído por el One Piece debido a la aventura que conlleva encontrarlo.",
    video: "https://www.youtube.com/embed/Zrq3kt21HXU?si=uq4DVi96xSEz9wtk",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyMI9-xT_OAI86HvTBXU7iwtWesOke8O2Dusn92JcB9xxgD7QVoY_gfaJNG0Vkn90K34&usqp=CAU",
    category: "accion",
  },
  {
    id: v4(),
    name: "Hunter x Hunter",
    description:
      "Gon Freecs, un joven que sueña con seguir los pasos de su padre desaparecido, se inscribirá en la legendaria prueba del cazador para ganar las habilidades que necesita para encontrarlo. En esta prueba, conocerá curiosos e interesantes aliados que se convertirán en grandes amigos, y juntos unirán fuerzas para vivir una aventura sin igual.",
    video: "https://www.youtube.com/embed/h47u8Y8n9O4?si=BUslg3mqhs_uv7Nf",
    imagen:
      "https://cdn.superaficionados.com/imagenes/6-animes-accion-hunter-x-hunter-cke.jpg",
    category: "accion",
  },
  {
    id: v4(),
    name: "Bleach",
    description:
      "Ichigo Kurosaki es un estudiante promedio, cuya vida cambia drásticamente el día en que su familia es atacada por un Hollow, un ser corrupto que busca devorar almas humanas. Durante este ataque, Ichigo conoce a Rukia Kuchiki, una shinigami, que sale lastimada durante el ataque protegiendo a la familia del joven, así que le ofrece ayuda. Rukia acepta, y convierte a Ichigo en un shinigami, una persona que tiene conexiones con el mundo espiritual y el mundo de los vivos.",
    video: "https://www.youtube.com/embed/vLUnH2FMoZA?si=VPDZb5l2M3BiaHR_",
    imagen:
      "https://cdn.superaficionados.com/imagenes/7-animes-accion-bleach-0-cke.jpg",
    category: "accion",
  },
  {
    id: v4(),
    name: "C Danchi",
    description:
      "La historia de C Danchi se centra en Kimi, quien vive en un pequeño y económico complejo residencial ubicado en el pueblo costero de Kurosaki. Los problemas parecen seguirla donde quiera que vaya y comienzan a ocurrir incidentes horribles. ¿Está acechando un antiguo mal a los residentes del Complejo residencial C?",
    video: "https://www.youtube.com/embed/JT8QtXL4GSs?si=C8GUrcMq5Ubc6Jtb",
    imagen:
      "https://cdn.superaficionados.com/imagenes/1-animes-de-terror-c-danchi.jpg",
    category: "horror",
  },
  {
    id: v4(),
    name: "Mieruko",
    description:
      "Miko Yotsuya está muy acostumbrada a usar cualquier técnica de distracción existente para ignorar, a como dé lugar, a los fantasmas y espíritus horribles que la plagan todos los días. Por desgracia, estos espíritus siempre quieren llamar su atención, y es la única que puede verlos. Así que su estrategia es molestar a los amigos y compañeros de Miko hasta lograr que los vea. Pero Miko es tenaz, y después de prometerse que nunca más reconocería su existencia, hará todo lo que esté en sus manos para cumplir su promesa. Incluso si la asustan tanto que le dan ganas de llorar.",
    video: "https://www.youtube.com/embed/ZnAjSrPnGZQ?si=ShFe-o4K490ByYyG",
    imagen:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5bc8f71d913ed8604bc3cc6db65a0c2c.jpe",
    category: "horror",
  },
  {
    id: v4(),
    name: "Kagewani",
    description:
      'El anime cuenta la historia de Sousuke Banba, un reconocido científico que viaja por el mundo investigando criaturas monstruosas (conocidas como "UMA" - Animal Misterioso Desconocido) que surgieron recientemente y que están destruyendo a la humanidad.',
    video: "https://www.youtube.com/embed/ejL8tAO3RlQ?si=Fi3PBO-ZUzMVV5im",
    imagen:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/eb2554bf28570b7a2aa1dbf3f3febe41.jpe",
    category: "horror",
  },
  {
    id: v4(),
    name: "Corpse Party",
    description: `La historia sucede en una escuela primaria que fue demolida después de haber sido escenario de terribles asesinatos. En el lugar fue construida la Academia Kisaragi, un colegio de la escuela secundaria donde estudian los personajes de la trama.

      Toda la pesadilla comienza cuando un grupo de amigos se queda en el colegio contando historias de terror y, antes de marcharse, deciden hacer un pacto de amistad (sachiko-san onegai shimasu). De repente, comienza un violento terremoto que transporta a todos a una dimensión donde la antigua escuela embrujada todavía existe. A partir de ahí, prepárate para cerrar los ojos, porque lo que sigue es una sucesión de muertes a cada cual más terrible.`,
    video: "https://www.youtube.com/embed/9vfNJSTvzE8?si=08VvDN1Q-BR8HveE",
    imagen:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8bf177dc47226ba416fc7b963dde40f4.jpe",
    category: "horror",
  },
  {
    id: v4(),
    name: "Yamishibai",
    description:
      "Este anime tiene carácter antológico, es decir, cada episodio presenta una historia diferente, normalmente abordando mitos y leyendas clásicos que forman parte del imaginario fantástico oriental.",
    video: "https://www.youtube.com/embed/J8OiGThCPOc?si=TQMTbzG8cMwfCZn3",
    imagen:
      "https://mikesblogofrandomness.files.wordpress.com/2016/04/97542fa02dfc3449468f32ecf75238091452195110_fwide.jpg?w=640",
    category: "horror",
  },
  {
    id: v4(),
    name: "Another",
    description:
      "La historia trata sobre una clase maldita del colegio Yomiyama Norte (la clase 3-3), lugar donde hace 26 años estudió el joven Misaki Yomiyama, un alumno ejemplar y adorado por todos. Sin embargo, Misaki muere inesperadamente y sus compañeros de clase continúan a comportarse como si el chico aún siguiera vivo, llegando incluso a conversar con la silla donde el joven solía sentarse en clase (y que se había quedado vacía).",
    video: "https://www.youtube.com/embed/04Sw7qZAd4U?si=5ARxZzRiNx9uVop-",
    imagen: "https://images6.alphacoders.com/639/639813.jpg",
    category: "horror",
  },
  {
    id: v4(),
    name: "Boku no hero",
    description:
      "Otro anime dramático y emocionante con múltiples temporadas y una popularidad abrumadora. La obra cuenta la historia de un joven que sueña con ser un superhéroe, pero que no tiene poder en un mundo donde el 70% de la población tiene alguna habilidad..",
    video: "https://www.youtube.com/embed/1NZdCOOQ9tE?si=bYdiGACCHqqOwRyL",
    imagen:
      "https://guiltybit.com/wp-content/uploads/2022/12/My-Hero-Academia-capitulo-12-Temporada-6.webp",
    category: "drama",
  },
  {
    id: v4(),
    name: "Jujutsu kaisen",
    description:
      "De entrada, 'Jujutsu Kaisen' es la historia de Yuji Itadori, un adolescente casi normal que se convierte en el recipiente de una maldición poderosísima y empieza a formarse como hechicero para aprender a controlar sus nuevos poderes.",
    video: "https://www.youtube.com/embed/MnORnqi3uMM?si=u0ZG7wP2cOgwjJFH",
    imagen:
      "https://laverdadnoticias.com/__export/1693349400081/sites/laverdad/img/2023/08/29/cuando-y-a-que-hora-sale-jujutsu-kaisen-arco-de-shinuya-en-crunchyroll.jpg_911186587.jpg",
    category: "drama",
  },
  {
    id: v4(),
    name: "violet evergarden",
    description: `Violet Evergarden es uno de los animes dramáticos con la mejor animación jamás producida. El paisaje, los personajes, el entorno, los sonidos y los colores son hermosos al tacto y llenan tus ojos de lágrimas. El anime también tiene una historia emocionante y dramática.

      Violet Evergarden cuenta la historia de una niña que fue utilizada como arma de guerra, pero que luego, sin saber qué hacer con su vida, termina convirtiéndose en escritora de cartas, conociendo un poco del mundo y algunas situaciones emocionantes que las cartas proporcionan`,
    video: "https://www.youtube.com/embed/g5xWqjFglsk?si=6xTcEdi-I9D_RnP3",
    imagen:
      "https://occ-0-590-299.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXANZUSAuiWFF3nuIkyU2cRpjeCM3N4AFIBrQ0smgp5xud2O_y4PuVT_KnT56o_RQlwWSbsGzTcRUkGaSBZbdrsZ_WoOpcsfggTb.jpg?r=2bc",
    category: "drama",
  },
  {
    id: v4(),
    name: "Chainsaw man",
    description:
      "'Chainsaw Man' es la historia de Denji, un adolescente que carga con las inmensas deudas de su padre y que malvive como puede para saldarlas, ya sea vendiendo sus órganos o haciendo todo tipo de trabajos malpagados. Su única compañía es Pochita, un demonio motosierra.",
    video: "https://www.youtube.com/embed/K9Gnl0VeIVI?si=5M7zBVCv_8wyQ6jm",
    imagen:
      "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/07/12/16576479472091.jpg",
    category: "drama",
  },
  {
    id: v4(),
    name: "Banana Fish",
    description:
      "Banana Fish es una serie anime que sigue la historia de Ash Lynx, un chico bastante atractivo y un gran luchador que forma una pandilla a sus 17 años en plena ciudad de Nueva York. Pero una noche, un hombre tiroteado por sus secuaces le da a Ash una dirección con dos palabras: Banana Fish.",
    video: "https://www.youtube.com/embed/VekCU4YJiR8?si=Q3uymZm8P49MskXZ",
    imagen:
      "https://gaminguardian.com/wp-content/uploads/2018/02/Banana-Fish.jpg",
    category: "drama",
  },
  {
    id: v4(),
    name: "Berserk",
    description:
      "Un antihéroe oscuro y mal encarado, con un cuerpo hercúleo cincelado durante su desempeño como mercenario, sin un ápice de empatía por sus enemigos ni por sus semejantes.",
    video: "https://www.youtube.com/embed/BAe_aw8nRz8?si=2kem-jFKJPTqoxfi",
    imagen:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/Griffith-Stands-With-His-Soldiers-In-Berserk.jpg",
    category: "drama",
  },
  {
    id: v4(),
    name: "spy x family",
    description: `Twilight es el detective más aplicado de una agencia que se dedica a prevenir guerras y mantener la paz entre dos naciones en conflicto. Su más reciente misión, sin embargo, prueba ser la más dura de todas las que le han asignado. Tiene que "formar" una familia para dar con un elusivo político que solo aparece en la escuela elitista de su hijo.`,
    video: "https://www.youtube.com/embed/YOIJOJsUkUg?si=NB3IbQVGFBxYT98l",
    imagen:
      "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2022/04/Cuando-sale-Spy-x-Family-doblada-al-espanol-de-Latinoamerica.jpg?fit=1224%2C646&ssl=1",
    category: "comedia",
  },
  {
    id: v4(),
    name: "Senpai ga Uzai Kouhai no Hanashi",
    description: `También conocida como My Senpai is Annoying. Futaba, que trabaja en una empresa comercial, lleva años orgullosa de su posición, la cual logró encontrar gracias a la amabilidad de su superior, Harumi Takeda. No obstante, su superior se burla de su corta estatura de manera constante, además de tratarla como una niña pequeña, sacándola de quicio. Sin embargo, Takeda confía plenamente en Futaba, y sabe que es perfectamente capaz en su trabajo. Esta conexión que tienen es especial, ¿pero si pasan más tiempo juntos, se podrán volver algo más que solo compañeros de trabajo?`,
    video: "https://www.youtube.com/embed/Q4DoDFH_MHo?si=QfZ-4JU5HuNtfSeC",
    imagen:
      "https://www.anmosugoi.com/wp-content/uploads/2021/10/Senpai-ga-Uzai-Kouhai-no-Hanashi-y-Kawaii-dake-ja-Nai-Shikimori-San-anuncian-una-colaboracion.jpg",
    category: "comedia",
  },
  {
    id: v4(),
    name: "Gokushufudou",
    description: `También conocida como The Way of the Househusband. En esta hilarante historia, seguimos a Tatsu, un antiguo yakuza reformado que ahora se dedica a ser amo de casa. Luego de dejar la vida dentro de la mafia japonesa, descubrirá que el trabajo de llevar el hogar es más complicado de lo que pensaba, pero poco a poco, va perfeccionando el arte de la cocina, la limpieza y el orden. Y todo por ser un buen esposo y un hombre digno para la mujer de su vida.`,
    video: "https://www.youtube.com/embed/cvZ9thKolOA?si=L2K2tBAi-Ue-YEr9",
    imagen:
      "https://i0.wp.com/mariviu.com/wp-content/uploads/2021/04/the-way-of-the-househusband-Netflix.jpg?fit=1000%2C625&ssl=1",
    category: "comedia",
  },
  {
    id: v4(),
    name: "Grand Blue",
    description: `Iori Kitahara se acaba de mudar a una ciudad costera durante su primer año como universitario. Pronto comienza a trabajar en Grand Blue, la tienda de productos de submarinismo de su abuelo, y al entrar en la misma por primera vez, descubre un mundo lleno de fiestas irresponsables con muchas bebidas incluidas. Todas estas personas pertenecen al club de submarinismo de su universidad, y pronto se une al grupo de fiesteros sin control.`,
    video: "https://www.youtube.com/embed/CPhpXnfS7Oc?si=GScsOoXa18zLnZ2E",
    imagen:
      "https://m.media-amazon.com/images/S/pv-target-images/d06be18365f460449056a4e3bcb22198f5a3c01a72ec9787f2fafd7a100f948b.jpg",
    category: "comedia",
  },
  {
    id: v4(),
    name: "Aggretsuko",
    description: `Cuando tu oficina está llena de los típicos clichés jerárquicos, hay que aprender a llevarlos. En esta historia seguimos a Retsuko, una panda roja que ha llevado mucha carga laboral por culpa de compañeros de trabajo que son buenos para nada. Entre eso y su jefe que pretende trabajar cuando realmente no hace nada, Retsuko necesita una forma de descargar toda su ira.`,
    video: "https://www.youtube.com/embed/VBvHvjLGvhY?si=8ttRJZHQ_STpgXBl",
    imagen:
      "https://www.hollywoodreporter.com/wp-content/uploads/2019/10/aggretsuko-moment-feature-image_copy.jpg",
    category: "comedia",
  },
  {
    id: v4(),
    name: "Bungou Stray Dogs",
    description: `Atsushi Nakajima es un huérfano que nunca ha tenido un sentido de pertenencia sólido. En el orfanato lo tratan como basura, y decir que está aliviado de haber sido expulsado del mismo, no sería exagerar. Sin embargo, antes de irse, dejó un pendiente: la aparición misteriosa de un tigre que solamente Atsushi parece no haber visto.`,
    video: "https://www.youtube.com/embed/f9OV_KzR3SM?si=rzEHHnwO1Gk0bFMy",
    imagen:
      "https://areajugones.sport.es/wp-content/uploads/2022/08/bungou-stray-dogs-s4-imagen.jpg",
    category: "comedia",
  },
  {
    id: v4(),
    name: "Saiki Kusuo no Psi-nan",
    description: `En teoría, ser psíquico puede parecer espectacular, pero en realidad puede ser muy aburrido. Saiki Kusuo no Psi-nan es un anime ligero que se centra precisamente en la voluntad de ser normal de un joven poderoso con un conjunto de personajes hilarantes y un protagonista memorable.`,
    video: "https://www.youtube.com/embed/LpkBwNqI3HA?si=Mpt2PovVTgNrIDFM",
    imagen:
      "https://freakelitex.com/wp-content/uploads/2018/09/The-Disastrous-Life-of-Saiki-K..jpg",
    category: "comedia",
  },
  {
    id: "kimetsu",
    name: "Kimetsu no Yaiba",
    description: `La serie narra las desventuras de Tanjiro, un joven de un Japón feudal
    fantástico que se ve abocado a la venganza después de que un demonio
    acabe con toda su familia, a excepción de su hermana, Nezuko, también
    demoníaca y sedienta de sangre.`,
    video: "https://www.youtube.com/embed/h50uJvY0Ikw?si=yp3ZAxAr1RiqYio5",
    imagen: "",
    category: "",
  },
];

export default series;
