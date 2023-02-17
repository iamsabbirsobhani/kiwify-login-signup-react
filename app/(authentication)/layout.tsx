import AuthHeader from "@/components/(authentication)/AuthHeader";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-12">
        <div className="max-w-md w-full mx-auto">
          <AuthHeader />
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-8 sm:px-10">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
