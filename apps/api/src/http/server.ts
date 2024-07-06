import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
  // jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { createAccount } from './routes/auth/create-account'

const PORT = 3333

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.register(createAccount)

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`Server is running on port ${PORT} 🚀`)
  })
