"use client";

import { useEffect, useState } from "react";
import LoginForm from "@/components/molecules/form/login";

interface Bubble {
  id: number;
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
}

type LoginTemplateProps = {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
  error: string;
};

export default function LoginTemplate(props: LoginTemplateProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // Initialize bubbles once on component mount
  useEffect(() => {
    const initialBubbles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.3,
    }));
    setBubbles(initialBubbles);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-black">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent from-40% to-blue-100/30 to-90% animate-pulse-slow opacity-70"></div>

        {/* Persistent Bubbles */}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-blue-200/30 backdrop-blur-sm"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              animation: `float ${bubble.duration}s infinite ease-in-out ${bubble.delay}s`,
              opacity: bubble.opacity,
            }}
          />
        ))}
      </div>

      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-md px-6 py-8">
        <LoginForm
          email={props.email}
          password={props.password}
          onEmailChange={props.onEmailChange}
          onPasswordChange={props.onPasswordChange}
          onSubmit={props.onSubmit}
          isLoading={props.isLoading}
          error={props.error}
        />
      </div>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(2deg);
          }
          50% {
            transform: translateY(10px) translateX(-10px) rotate(-2deg);
          }
          75% {
            transform: translateY(-10px) translateX(5px) rotate(1deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
