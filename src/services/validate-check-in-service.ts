import { CheckIn } from "@prisma/client";
import { CheckInsRepository } from "@/repositories/check-ins-repository";

import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface ValidateCheckInServiceRequest {
  checkInID: string;
}

interface ValidateCheckInServiceResponse {
  checkIn: CheckIn;
}

export class ValidateCheckInService {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    checkInID,
  }: ValidateCheckInServiceRequest): Promise<ValidateCheckInServiceResponse> {
    const checkIn = await this.checkInsRepository.findByID(checkInID);

    if (!checkIn) {
      throw new ResourceNotFoundError();
    }

    checkIn.validated_at = new Date();

    await this.checkInsRepository.save(checkIn);

    return {
      checkIn,
    };
  }
}
