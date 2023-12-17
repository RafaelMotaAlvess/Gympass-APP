import { makeGetUserMetricsService } from "@/services/factories/make-get-user-metrics-service";
import { FastifyRequest, FastifyReply } from "fastify";

export async function metrics(request: FastifyRequest, reply: FastifyReply) {
  const getUserMetricsService = makeGetUserMetricsService();

  const { checkInsCount } = await getUserMetricsService.execute({
    userId: request.user.sub,
  });

  return reply.status(200).send({
    checkInsCount,
  });
}
