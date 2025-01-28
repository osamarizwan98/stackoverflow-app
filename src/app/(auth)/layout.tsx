"use client";

import { useAuthStore } from "@/store/Auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  if (session) {
    return null;
  }
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center py-12">
      <div className="relative">{children}</div>
    </div>
  );
};

export default Layout;