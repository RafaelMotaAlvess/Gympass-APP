import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { AuthenticateService } from "../authenticate-service";

export function makeAuthenticateService() {
  const usersRepository = new PrismaUsersRepository();
  const service = new AuthenticateService(usersRepository);

  return service;
}
