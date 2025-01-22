import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",

    }
  },
  modules: [
    {
        resolve: "@medusajs/medusa/payment",
        options: {
            providers: [
                {
                    resolve: "@medusajs/medusa/payment-stripe",
                    id: "stripe",
                    options: {
                        apiKey: process.env.STRIPE_API_KEY || 'sk_test_51QWeGcE83VjUWPFNgj9OLP4Q8ebK06G6w35RYRzTbPXrsjla5DzSdAoM34z9fro8HqHxJie4jHQWZRzMZ2d4qjGE004oEJuP8y',
                        automatic_payment_methods: true,
                        capture: true,
                    },
                },
            ],
        },
    },

],
})
