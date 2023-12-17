import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeCheckInService } from "@/services/factories/make-check-in-service";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createCheckInParamsSchema = z.object({
    gymId: z.string().uuid(),
  });

  const createCheckInBodySchema = z.object({
    userLatitude: z.number().refine((value) => {
      return Math.abs(value) <= 90;
    }),
    userLongitude: z.number().refine((value) => {
      return Math.abs(value) <= 180;
    }),
  });

  const { gymId } = createCheckInParamsSchema.parse(request.params);
  const { userLatitude, userLongitude } = createCheckInBodySchema.parse(
    request.body,
  );

  const createCheckInService = makeCheckInService();

  const { checkIn } = await createCheckInService.execute({
    gymId,
    userId: request.user.sub,
    userLatitude,
    userLongitude,
  });

  return reply.status(201).send({
    checkIn,
  });
}
