import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  return (
    <div>
      <LoginLink>Login</LoginLink>
      <LogoutLink>Logout</LogoutLink>
    </div>
  );
}
