import { expect, describe, it, beforeEach, vi, afterEach } from "vitest";
import { InMemoryCheckInsRepository } from "@/repositories/in-memory/in-memory-check-ins-repository";
import { CheckInService } from "./checkin-service";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { Decimal } from "@prisma/client/runtime/library";

let checkInRepository: InMemoryCheckInsRepository;
let gymsRepository: InMemoryGymsRepository;
let sut: CheckInService;

describe("Check In service", () => {
  beforeEach(async () => {
    checkInRepository = new InMemoryCheckInsRepository();
    gymsRepository = new InMemoryGymsRepository();
    sut = new CheckInService(checkInRepository, gymsRepository);

    await gymsRepository.create({
      id: "gym-id-test",
      title: "Test Gym",
      description: "",
      phone: "",
      latitude: -27.0025779,
      longitude: -48.6183042,
    });

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should be able to check in", async () => {
    const { checkIn } = await sut.execute({
      userId: "user-id-test",
      gymId: "gym-id-test",
      userLatitude: -27.0025779,
      userLongitude: -48.6183042,
    });

    expect(checkIn.id).toEqual(expect.any(String));
  });

  it("should not be able to check in twice in the same day", async () => {
    vi.setSystemTime(new Date(2023, 0, 20, 8, 0, 0));
    await sut.execute({
      userId: "user-id-test",
      gymId: "gym-id-test",
      userLatitude: -27.0025779,
      userLongitude: -48.6183042,
    });

    expect(async () => {
      await sut.execute({
        userId: "user-id-test",
        gymId: "gym-id-test",
        userLatitude: -27.0025779,
        userLongitude: -48.6183042,
      });
    }).rejects.toBeInstanceOf(Error);
  });

  it("should be able to check in twice but in different days", async () => {
    vi.setSystemTime(new Date(2023, 0, 20, 8, 0, 0));
    await sut.execute({
      userId: "user-id-test",
      gymId: "gym-id-test",
      userLatitude: -27.0025779,
      userLongitude: -48.6183042,
    });

    vi.setSystemTime(new Date(2023, 0, 21, 8, 0, 0));

    const { checkIn } = await sut.execute({
      userId: "user-id-test",
      gymId: "gym-id-test",
      userLatitude: -27.0025779,
      userLongitude: -48.6183042,
    });

    expect(checkIn.id).toEqual(expect.any(String));
  });

  it("should not be able to check in on distant gym", async () => {
    gymsRepository.items.push({
      id: "gym-id-test2",
      title: "Test Gym",
      description: "",
      phone: "",
      latitude: new Decimal(-27.0019519),
      longitude: new Decimal(-48.6190639),
    });

    expect(async () => {
      await sut.execute({
        userId: "user-id-test",
        gymId: "gym-id-test2",
        userLatitude: -27.0025779,
        userLongitude: -48.6183042,
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
