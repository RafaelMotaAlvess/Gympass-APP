import { makeSearchGymService } from "@/services/factories/make-search-gym-service";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const searchGymsQuerySchema = z.object({
    query: z.string(),
    page: z.coerce.number().min(1).default(1),
  });

  const { query, page } = searchGymsQuerySchema.parse(request.query);

  const searchGymsService = makeSearchGymService();

  const { gyms } = await searchGymsService.execute({
    query,
    page,
  });

  return reply.status(201).send({
    gyms,
  });
}
