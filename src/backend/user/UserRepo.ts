import { User } from "@/core/model/Usuario";
import { PrismaClient } from "@prisma/client";

export default class UserRepo {
  private static db: PrismaClient = new PrismaClient();

  static async getAll(): Promise<User[]> {
    return await this.db.user.findMany();
  }

  static async getOne(id: string): Promise<User> {
    const user = await this.db.user.findUnique({ where: { id } });

    return user as User;
  }

  static async save(user: User) {
    return await this.db.user.upsert({
      where: { id: user.id },
      update: user,
      create: user,
    });
  }

  static async delete(id: string): Promise<User> {
    const user = await this.db.user.delete({ where: { id } });

    return user as User;
  }
}
