// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },
//   components: [
//     {
//       path: '~/components',
// +     pathPrefix: true,
//     },
//   ],
})