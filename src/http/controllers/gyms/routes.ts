import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";
import { FastifyInstance } from "fastify";
import { search } from "./search-controller";
import { nearby } from "./nearby-controller";
import { create } from "./create-controller";
import { createGymSchema, nearbyGymSchema } from "@/docs/swagger/schemas";

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook("onRequest", verifyJWT);

  app.get("/gyms/search", search);
  app.get("/gyms/nearby", nearbyGymSchema, nearby);

  app.post("/gyms", { onRequest: [verifyUserRole("ADMIN")], ...createGymSchema }, create);
}
