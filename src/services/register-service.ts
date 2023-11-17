import { prisma } from "@/lib/prisma";
import { PrismaUsersRepository } from "@/repositories/prisma-users-repository";
import { hash } from "bcryptjs";

interface RegisterServiceParams {
  name: string;
  email: string;
  password: string;
}

export async function registerService({
  name,
  email,
  password,
}: RegisterServiceParams) {
  const password_hash = await hash(password, 6);

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userWithSameEmail) {
    throw new Error("E-mail already exists!");
  }

  const prismaUsersRepository = new PrismaUsersRepository();

  await prismaUsersRepository.create({
    name,
    email,
    password_hash,
  });
}
