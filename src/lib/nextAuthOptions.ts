import { UsersRecord, getXataClient } from "@/lib/xata";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/code",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: "Code",
      credentials: {
        code: { label: "Code", type: "text" },
      },
      async authorize(credentials, req): Promise<UsersRecord> {
        const xata = getXataClient();
        const code = credentials?.code;
        const totp = await xata.db.totp
          .filter({ code, wasUsed: false })
          .getFirst();

        if (!totp) {
          console.error(`Unable to find provided code in the database ${code}`);
          throw new Error();
        }

        const telegramId = totp.telegramUser["id"] as number;
        const existing = await xata.db.users.filter({ telegramId }).getFirst();
        const user =
          existing ||
          (await xata.db.users.create({
            telegramId,
            firstName: totp.telegramUser["first_name"],
            lastName: totp.telegramUser["last_name"],
          }));

        await xata.db.totp.update(totp.id, { wasUsed: true });
        return user;
      },
    }),
  ],
};
