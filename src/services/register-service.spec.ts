import { expect, describe, it } from "vitest";
import { RegisterService } from "./register-service";
import { compare } from "bcryptjs";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";

// Test Unit

describe("Register service", () => {
  it("should hash user password upon registration", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerService = new RegisterService(usersRepository);

    const { user } = await registerService.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const isPasswordCorrectlyHashed = await compare(
      "123456",
      user.password_hash,
    );

    expect(isPasswordCorrectlyHashed).toBeTruthy();
  });
});
