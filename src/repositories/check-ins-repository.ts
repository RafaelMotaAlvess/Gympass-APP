import { CheckIn, Prisma } from "@prisma/client";

export interface CheckInsRepository {
  findByID(id: string): Promise<CheckIn | null>;
  findManyByUserID(userId: string, page: number): Promise<CheckIn[]>;
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>;
  countByUserID(userId: string): Promise<number>;
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>;
  save(checkIn: CheckIn): Promise<CheckIn>;
}
