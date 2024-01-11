import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";
import { FastifyInstance } from "fastify";
import { create } from "./create-controller";
import { validate } from "./validate-controller";
import { history } from "./history-controller";
import { metrics } from "./metrics-controller";
import { checkInsMetricsSchema, createCheckInSchema, searchCheckinsHistory, validateCheckInSchema } from "@/docs/swagger/schemas";

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook("onRequest", verifyJWT);

  app.get("/check-ins/history", searchCheckinsHistory, history);
  app.get("/check-ins/metrics",  checkInsMetricsSchema, metrics);

  app.post("/gyms/:gymId/check-ins", createCheckInSchema, create);

  app.patch(
    "/check-ins/:checkInId/validate",
    { onRequest: [verifyUserRole("ADMIN")], ...validateCheckInSchema  },
    validate,
  );
}
