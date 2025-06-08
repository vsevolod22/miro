import { rqClient } from "@/shared/api/instance";
import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/kit/card";
import { Link } from "react-router-dom";
import { AuthLayout } from "./ui/auth-layout";
import { LoginForm } from "./ui/login-form";

function LoginPage() {



  return (
    <AuthLayout
      title="Вход в систему"
      description="Введите ваш email и пароль для входа в систему"
      footerText={<>Нет аккаунта? <Link className="underline text-primary" to={ROUTES.REGISTER}>Зарегестрироваться</Link> </>}
      form={
        <LoginForm/>
      }
      >

      </AuthLayout>)
    
  
}

export const Component = LoginPage;
