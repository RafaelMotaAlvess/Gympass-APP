import { expect, describe, it, beforeEach, vi, afterEach } from "vitest";
import { InMemoryCheckInsRepository } from "@/repositories/in-memory/in-memory-check-ins-repository";
import { CheckInService } from "./checkin-service";

let checkInRepository: InMemoryCheckInsRepository;
let sut: CheckInService;

describe("Check In service", () => {
  beforeEach(() => {
    checkInRepository = new InMemoryCheckInsRepository();
    sut = new CheckInService(checkInRepository);

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should be able to check in", async () => {
    vi.setSystemTime(new Date(2023, 0, 20, 8, 0, 0));

    const { checkIn } = await sut.execute({
      userId: "user-id-test",
      gymId: "gym-id-test",
    });

    console.log(checkIn.created_at);

    expect(checkIn.id).toEqual(expect.any(String));
  });

  it("should not be able to check in twice in the same day", async () => {
    vi.setSystemTime(new Date(2023, 0, 20, 8, 0, 0));
    await sut.execute({
      userId: "user-id-test",
      gymId: "gym-id-test",
    });

    expect(async () => {
      await sut.execute({
        userId: "user-id-test",
        gymId: "gym-id-test",
      });
    }).rejects.toBeInstanceOf(Error);
  });

  it("should be able to check in twice but in different days", async () => {
    vi.setSystemTime(new Date(2023, 0, 20, 8, 0, 0));
    await sut.execute({
      userId: "user-id-test",
      gymId: "gym-id-test",
    });

    vi.setSystemTime(new Date(2023, 0, 21, 8, 0, 0));

    const { checkIn } = await sut.execute({
      userId: "user-id-test",
      gymId: "gym-id-test",
    });

    expect(checkIn.id).toEqual(expect.any(String));
  });
});
