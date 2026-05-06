import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
       <Header />
      <main className="min-h-screen">{children}</main>
     <Footer />
    </>
  );
}