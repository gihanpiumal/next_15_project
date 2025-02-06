import NextAuth from "next-auth";
import GitHab from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHab],
});
