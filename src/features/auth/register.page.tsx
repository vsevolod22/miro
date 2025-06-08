import { ROUTES } from "@/shared/model/routes";
import { Link } from "react-router-dom";
import { AuthLayout } from "./ui/auth-layout";
import { RegisterForm } from "./ui/register-form";

function RegisterPage() {
  return (
    <AuthLayout
    title="Регистрация"
    description="Введите ваш email и пароль для регистрации в системе"
    footerText={<>Уже есть аккаунт? <Link className="underline text-primary" to={ROUTES.LOGIN}>Войти</Link> </>}
    form={
      <RegisterForm/>
    }
    >

    </AuthLayout>
  );
}

export const Component = RegisterPage;
