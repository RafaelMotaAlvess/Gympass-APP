import { expect, describe, it, beforeEach } from "vitest";
import { CreateGymService } from "./create-gym-service";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";

let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymService;

describe("Create Gym service", () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymService(gymsRepository);
  });

  it("should be able to create gym", async () => {
    const { gym } = await sut.execute({
      title: "TypeScript Gym",
      description: null,
      phone: null,
      latitude: -27.0025779,
      longitude: -48.6183042,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
