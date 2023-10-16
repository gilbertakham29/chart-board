// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
],

  
app:{
  head:{
    script:[
      {
        src:"https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
      },
      {
        src:"https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"
      },{
        src:"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.min.js"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
      },
    ],

  }
},

})
