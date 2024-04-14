import Login from "./login";
import { useTranslations } from "next-intl";
import { Screen } from "@/components/screen";

export default function LoginPage() {
  const t = useTranslations("login");
  const Transition = {
    SignUp: t("SignUp"),
    SignIn: t("SignIn"),
    Username: t("Username"),
    Password: t("Password"),
    ForgotPassword: t("ForgotPassword"),
    ResetPassword: t("ResetPassword"),
    NoAccount: t("NoAccount"),
    UsernameIsRequired: t("UsernameIsRequired"),
    PasswordIsRequired: t("PasswordIsRequired"),
    EmailIsRequired: t("EmailIsRequired"),
    Verify: t("Verify"),
    VerifyEmail: t("VerifyEmail"),
  };

  return (
    <div>
      <Screen>
        <Login Transition={Transition}/>
      </Screen>
    </div>
  );
}
