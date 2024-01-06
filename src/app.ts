import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import { ZodError } from "zod"; 
import { env } from "./env";
import { usersRoutes } from "./http/controllers/users/routes";
import { gymsRoutes } from "./http/controllers/gyms/routes";
import { checkInsRoutes } from "./http/controllers/check-ins/routes";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { swaggerConfig } from "./docs/swagger/swagger-config";

export const app = fastify();

app.register(fastifySwagger);
app.register(fastifySwaggerUi, swaggerConfig)

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: "refreshToken",
    signed: false,
  },
  sign: {
    expiresIn: "10m",
  },
});

app.register(fastifyCookie);

app.register(usersRoutes);
app.register(gymsRoutes);
app.register(checkInsRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Validation error",
      issues: error.format(),
    });
  }
  
  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // TODO: Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: "Internal server error." });
});
