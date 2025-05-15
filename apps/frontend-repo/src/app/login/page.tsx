"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUserToken, login } from "@/apis/auth";
import LoginTemplate from "@/components/templates/login-template";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await login(email, password);
      document.cookie = `authToken=${await getCurrentUserToken()}; path=/`;
      router.push("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Email atau password salah");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginTemplate
      email={email}
      password={password}
      onEmailChange={(e) => setEmail(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
    />
  );
}
