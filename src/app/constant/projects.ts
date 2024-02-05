import { Project } from "@/app/types/project";

export const PROJECTS: Project = {
  en: [
    {
      title: "RestoBooking",

      images: [
        { alt: "app-logo", src: "/assets/bookingImage2.webp" },
        {
          alt: "app-logo",
          src: "/assets/bookingImage.webp",
        },
      ],

      description:
        "App for booking restaurants with a customer facing UI for end-users to book for a restaurant and an admin side for the owner to manage reservations. \n{ How to test => Login: test@gmail.com, Password: Test123!!! }",

      url: {
        source: "https://github.com/benhlel0slim/booking-app",
        live: "https://bookingrestaurant.vercel.app/",
      },

      links: {
        source: "Check Source",
        live: "See Live",
      },

      techs: [
        {
          color: "rgba(255, 255, 255, 1)",
          name: "css",
          background: "rgba(41, 101, 241, 1)",
        },
        {
          color: "rgba(255, 255, 255, 1)",
          name: "TypeScript",
          background: "rgba(0, 122, 204, 1)",
        },
        {
          color: "rgba(14, 37, 57, 1)",
          name: "React",
          background: "rgba(97, 219, 251, 1)",
        },
        {
          color: "rgba(14, 37, 57, 1)",
          name: "Vercel",
          background: "rgba(232, 235, 237, 1)",
        },
      ],
    },
    {
      title: "Le_Couscous",

      images: [
        { alt: "app-logo", src: "/assets/couscous_home_page.webp" },
        {
          alt: "app-logo",
          src: "/assets/couscous_menu.webp",
        },
      ],

      description:
        "Danish restaurant app with reservations, a webshop, and online food ordering.",

      url: {
        source: "https://github.com/Midbytes/couscous-restaurant",
        live: "https://curious-shortbread-7a0d78.netlify.app/en",
      },

      links: {
        source: "Check Source",
        live: "See Live",
      },

      techs: [
        {
          color: "rgba(255, 255, 255, 1)",
          name: "Sass",
          background: "rgb(204, 102, 153)",
        },
        {
          color: "rgba(255, 255, 255, 1)",
          name: "TypeScript",
          background: "rgba(0, 122, 204, 1)",
        },
        {
          color: "rgba(255, 255, 255, 1)",
          name: "Next.js",
          background: "rgba(0, 0, 0, 1)",
        },
        {
          color: "rgba(255, 255, 255, 1)",
          name: "Netlify",
          background: "rgb(0, 70, 69)",
        },
      ],
    },
  ],
  fr: [
    {
      title: "RestoBooking",

      images: [
        { alt: "app-logo", src: "/assets/bookingImage2.webp" },
        {
          alt: "app-logo",
          src: "/assets/bookingImage.webp",
        },
      ],

      description:
        "Application de réservation de restaurants avec une interface utilisateur destinée aux clients permettant aux utilisateurs finaux de réserver pour un restaurant et un côté administrateur permettant au propriétaire de gérer les réservations. \n{ Comment tester => Login : test@gmail.com, Mot de passe : Test123 !!! }",

      url: {
        source: "https://github.com/benhlel0slim/booking-app",
        live: "https://bookingrestaurant.vercel.app/",
      },

      links: {
        source: "Voir le code source",
        live: "Visiter",
      },

      techs: [
        {
          color: "rgba(255, 255, 255, 1)",
          name: "css",
          background: "rgba(41, 101, 241, 1)",
        },
        {
          color: "rgba(255, 255, 255, 1)",
          name: "TypeScript",
          background: "rgba(0, 122, 204, 1)",
        },
        {
          color: "rgba(14, 37, 57, 1)",
          name: "React",
          background: "rgba(97, 219, 251, 1)",
        },
        {
          color: "rgba(14, 37, 57, 1)",
          name: "Vercel",
          background: "rgba(232, 235, 237, 1)",
        },
      ],
    },
    {
      title: "Le_Couscous",

      images: [
        { alt: "app-logo", src: "/assets/couscous_home_page.webp" },
        {
          alt: "app-logo",
          src: "/assets/couscous_menu.webp",
        },
      ],

      description:
        "une application pour un restaurant danois avec des fonctionnalités de réservation et la possibilité de vendre des articles culinaires en ligne.",

      url: {
        source: "https://github.com/Midbytes/couscous-restaurant",
        live: "https://curious-shortbread-7a0d78.netlify.app/en",
      },

      links: {
        source: "Voir le code source",
        live: "Visiter",
      },

      techs: [
        {
          color: "rgba(255, 255, 255, 1)",
          name: "Sass",
          background: "rgb(204, 102, 153)",
        },
        {
          color: "rgba(255, 255, 255, 1)",
          name: "TypeScript",
          background: "rgba(0, 122, 204, 1)",
        },
        {
          color: "rgba(255, 255, 255, 1)",
          name: "Next.js",
          background: "rgba(0, 0, 0, 1)",
        },
        {
          color: "rgba(255, 255, 255, 1)",
          name: "Netlify",
          background: "rgb(0, 70, 69)",
        },
      ],
    },
  ],
};
