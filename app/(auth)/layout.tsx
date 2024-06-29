import ThemeToggler from "@/components/ThemeToggler";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex items-center justify-center relative">
      <div className="absolute bottom-5 right-0 text-white">
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
