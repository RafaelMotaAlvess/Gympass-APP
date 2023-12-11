import { SearchGymService } from "../search-gym-service";
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository";

export function makeSearchGymService() {
  const gymsRepository = new PrismaGymsRepository();
  const service = new SearchGymService(gymsRepository);

  return service;
}
