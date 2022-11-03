const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const colors = {
  blue: "#4417c7",
  darkBlue: "#3d15b2",
  green: "#2AD76F",
  white: "#FFFFFF",
  black: "#000000",
};

const buttonArrowImage =
  "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/5f01858ae08dc78b0b7926d9_Pointer.svg";

const BASE_QUESTIONS = [
  // {
  //   question: "Which best describes you in your financial journey?",
  //   es: "¿Qué es lo que más te gusta en tu viaje financiero?",
  //   answer: [],
  //   type: "radio",
  //   style: {
  //     gridTemplateColumns: "repeat(2, 250px) !important",
  //   },
  //   options: [
  //     {
  //       label: "Need to know where to start",
  //       value: "Need to know where to start",
  //       es: "Necesito saber dónde empezar",
  //       icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa4334b522c266f4260_Group%20294.svg",
  //     },
  //     {
  //       label: "Need a more clear route",
  //       value: "Need a more clear route",
  //       es: "Necesito una ruta más clara",
  //       icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa4cb718ec356a073b2_Group%20295.svg",
  //     },
  //     {
  //       label: "Got off track. Need help",
  //       value: "Got off track. Need help",
  //       es: "Me desvié. Necesitas ayuda",
  //       icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa4bec6bf77be327fa6_Group%20296.svg",
  //     },
  //     {
  //       label: "Getting close to my destination",
  //       value: "Getting close to my destination",
  //       es: "Acercándome a mi destino",
  //       icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa46b0b64ddecfe609a_Group%20297.svg",
  //     },
  //   ],
  // },
  {
    question: "Who is with you on your financial journey?",
    es: "¿Quién está con vos en tu viaje financiero?",
    answer: [],
    type: "radio",
    style: {
      gridTemplateColumns: "repeat(2, 250px) !important",
    },
    options: [
      {
        label: "My spouse.  I am married",
        value: "My spouse.  I am married",
        es: "Mi cónyuge. Estoy casado",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa43d07080c413621d7_Group%20298.svg",
      },
      {
        label: "My fiance.  I am engaged.",
        value: "My fiance.  I am engaged.",
        es: "Mi novio. Estoy comprometido",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa43d07080c413621d7_Group%20298.svg",
      },
      // {
      //   label: "Kids under 18 (or plan to)",
      //   value: "Kids under 18 (or plan to)",
      //   es: "Niños menores de 18 años (o planean hacerlo)",
      //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa508009b48e2c5c553_Group%20299.svg",
      // },
      {
        label: "My domestic partner.  I am unmarried.",
        value: "My domestic partner.  I am unmarried.",
        es: "Mi pareja doméstica. Estoy soltero",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa4734cdf3e21d7b805_Group%20300.svg",
      },
      // {
      //   label: "Actively saving for retirement",
      //   value: "Actively saving for retirement",
      //   es: "Ahorro activo para la jubilación",
      //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5ce5ba4b9e45399b4_Group%20301.svg",
      // },
      {
        label: "Just me.  I am solely responsible",
        value: "Just me.  I am solely responsible",
        es: "Sólo yo. Estoy solo responsable",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5f9b0b0373efe4cfe_Group%20302.svg",
      },
      // {
      //   label: "Self-Employed",
      //   value: "Self-Employed",
      //   es: "Trabajadores por cuenta propia",
      //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5efe60d8386fb1bfc_Group%20303.svg",
      // },
      {
        label: "None of these",
        value: "None of these",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa6f2f85f5b3e5ef315_Group%20312.svg",
        es: "Ninguno de esos",
      },
    ],
  },
  {
    question: "Now, a little about you and/or your partner.",
    es: "Ahora, un poco sobre ti y/o tu pareja.",
    answer: [],
    type: "checkbox",
    style: {
      gridTemplateColumns: "repeat(2, 250px) !important",
    },
    options: [
      // {
      //   label: "Married or have a domestic partner",
      //   value: "Married or have a domestic partner",
      //   es: "Casado o con pareja de hecho",
      //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa43d07080c413621d7_Group%20298.svg",
      // },
      //
      // {
      //   label: "Buying / Own a home",
      //   es: "Comprar / Ser dueño de una casa",
      //   value: "Buying / Own a home",
      //   icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa4734cdf3e21d7b805_Group%20300.svg",
      // },
      {
        label: "Actively saving for retirement",
        value: "Actively saving for retirement",
        es: "Ahorro activo para la jubilación",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5ce5ba4b9e45399b4_Group%20301.svg",
      },
      {
        label: "Kids under 18 (or plan to)",
        value: "Kids under 18 (or plan to)",
        es: "Niños menores de 18 años (o planean hacerlo)",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa508009b48e2c5c553_Group%20299.svg",
      },
      {
        label: "Employee",
        value: "Employee",
        es: "Empleado",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5f9b0b0373efe4cfe_Group%20302.svg",
      },
      {
        label: "Self-Employed or Business Owner",
        value: "Self-Employed or Business Owner",
        es: "Propietario de negocio o empleado",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5efe60d8386fb1bfc_Group%20303.svg",
      },
      {
        label: "None of these",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa6f2f85f5b3e5ef315_Group%20312.svg",
        value: "None of these",
        es: "Ninguno de esos",
      },
    ],
  },
  {
    question: "What are areas you want to evaluate or know more about?",
    es: "¿Qué áreas te gustaría evaluar o saber más sobre?",
    answer: [],
    type: "checkbox",
    style: {
      gridTemplateColumns: "repeat(4, 250px) !important",
    },
    options: [
      {
        label: "Roth IRA",
        es: "Roth IRA",
        value: "Roth IRA",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa507dd8c52fb18c7aa_Group%20304.svg",
      },
      {
        label: "Budget / Saving More",
        value: "Budget / Saving More",
        es: "Presupuesto / Ahorro más",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5ba9df5ead351661e_Group%20305.svg",
      },
      {
        label: "Saving for College",
        value: "Saving for College",
        es: "Ahorro para la universidad",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5bb0d5e4d9f8f84d5_Group%20306.svg",
      },
      {
        label: "401k/403b/IRA Investment Choices",
        value: "401k/403b/IRA Investment Choices",
        es: "401k/403b/Inversiones en IRAs",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5ba9df5475851661f_Group%20307.svg",
      },
      {
        label: "Will / Trust Life Insurance",
        es: "Seguro de vida de testamento/fideicomiso",
        value: "Will / Trust Life Insurance",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa53d0708ba1c3621e0_Group%20308.svg",
      },
      {
        label: "Eliminating Credit Card Debt",
        value: "Eliminating Credit Card Debt",
        es: "Eliminar la deuda de la tarjeta de crédito",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa569791dd57ee027f7_Group%20309.svg",
      },
      {
        label: "Rolling Over Old 401k",
        es: "Rodando sobre la vieja 401k",
        value: "Rolling Over Old 401k",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa54fe71c93b968bcce_Group%20310.svg",
      },
      {
        label: "An Overall Plan For My Future",
        value: "An Overall Plan For My Future",
        es: "Un plan general para mi futuro",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa508009b8754c5c557_Group%20311.svg",
      },
      {
        label: "None of these",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa6f2f85f5b3e5ef315_Group%20312.svg",
        value: "None of these",
        es: "Ninguno de esos",
      },
    ],
  },
  {
    question: "What Interests you most?",
    es: "¿Qué te interesa más?",
    answer: [],
    type: "checkbox",
    style: {
      gridTemplateColumns: "repeat(2, 250px) !important",
    },
    options: [
      {
        label: "Part-time Projects",
        es: "Proyectos de parte de tiempo",
        value: "Part-time Projects",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621e20e5ea3b957635659c45_Group%20293.svg",
      },
      {
        label: "Be My Own Boss",
        value: "Be My Own Boss",
        es: "Ser mi propio jefe",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa5a7d8b4fce3ad4e28_Group%20315.svg",
      },
      {
        label: "New Career More Upside",
        es: "Nueva carrera Más ventajas",
        value: "New Career More Upside",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa615e53c24f87d7dac_Group%20313.svg",
      },
      {
        label: "I’m just open minded",
        value: "I’m just open minded",
        es: "solo soy de mente abierta",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa6f2f85f5b3e5ef315_Group%20312.svg",
      },
      {
        label: "None of these",
        value: "None of these",
        es: "Ninguno de esos",
        icon: "https://uploads-ssl.webflow.com/5efa44384416ea7ad59bfba6/621f8aa6f2f85f5b3e5ef315_Group%20312.svg",
      },
    ],
  },
];

const questions = {
  BOTH: BASE_QUESTIONS,
  MANAGE_MONEY_BETTER: BASE_QUESTIONS,
  MAKE_MORE_MONEY: BASE_QUESTIONS,
};

const getLastSlash = (str) => str.split("/").pop();

export { questions, alphabets, colors, getLastSlash, buttonArrowImage };
