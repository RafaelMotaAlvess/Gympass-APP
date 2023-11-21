import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryCheckInsRepository } from "@/repositories/in-memory/in-memory-check-ins-repository";
import { FetchUserCheckInsHistoryService } from "./fetch-user-check-ins-history-service";

let checkInRepository: InMemoryCheckInsRepository;
let sut: FetchUserCheckInsHistoryService;

describe("Fetch User Check-in History Service", () => {
  beforeEach(async () => {
    checkInRepository = new InMemoryCheckInsRepository();
    sut = new FetchUserCheckInsHistoryService(checkInRepository);
  });

  it("should be able to fetch check-in history", async () => {
    await checkInRepository.create({
      gym_id: "gym-01",
      user_id: "user-01",
    });

    await checkInRepository.create({
      gym_id: "gym-02",
      user_id: "user-01",
    });

    const { checkIns } = await sut.execute({
      userId: "user-01",
    });

    expect(checkIns).toHaveLength(2);
    expect(checkIns).toEqual([
      expect.objectContaining({ gym_id: "gym-01" }),
      expect.objectContaining({ gym_id: "gym-02" }),
    ]);
  });
});
