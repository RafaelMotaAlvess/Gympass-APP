import { FastifyInstance } from "fastify";

import { register } from "./register-controller";
import { authenticate } from "./authenticate-controller";
import { profile } from "./profile-controller";
import { verifyJWT } from "../../middlewares/verify-jwt";
import { refresh } from "./refresh-controller";
import { authenticateSchema, registerSchema, refreshSchema } from "@/docs/swagger/schemas";


export async function usersRoutes(app: FastifyInstance) {
  app.post("/users", registerSchema, register);
  app.post("/sessions", authenticateSchema ,authenticate);

  app.patch("/token/refresh", refreshSchema ,refresh);

  /** Authenticated */
  app.get("/me", { onRequest: [verifyJWT] }, profile);
}
