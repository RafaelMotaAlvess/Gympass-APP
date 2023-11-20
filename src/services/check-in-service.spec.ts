import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryCheckInsRepository } from "@/repositories/in-memory/in-memory-check-ins-repository";
import { CheckInService } from "./checkin-service";

let checkInRepository: InMemoryCheckInsRepository;
let sut: CheckInService;

describe("Check In service", () => {
  beforeEach(() => {
    checkInRepository = new InMemoryCheckInsRepository();
    sut = new CheckInService(checkInRepository);
  });

  it("should be able to check in", async () => {
    await checkInRepository.create({
      user_id: "user-id-test",
      gym_id: "gym-id-test",
    });

    const { checkIn } = await sut.execute({
      userId: "user-id-test",
      gymId: "gym-id-test",
    });

    expect(checkIn.id).toEqual(expect.any(String));
  });
});
