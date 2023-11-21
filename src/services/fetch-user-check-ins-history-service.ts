import { CheckIn } from "@prisma/client";
import { CheckInsRepository } from "@/repositories/check-ins-repository";

interface FetchUserCheckInsHistoryServiceRequest {
  userId: string;
}

interface FetchUserCheckInsHistoryServiceResponse {
  checkIns: CheckIn[];
}

export class FetchUserCheckInsHistoryService {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: FetchUserCheckInsHistoryServiceRequest): Promise<FetchUserCheckInsHistoryServiceResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserID(userId);

    return {
      checkIns,
    };
  }
}
