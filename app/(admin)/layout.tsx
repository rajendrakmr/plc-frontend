 
import { ReactNode } from "react";
import AdminSidebar from "@/app/components/admin/AdminSidebar";
import AdminHeader from "@/app/components/admin/AdminHeader";

export const metadata = {
  title: {
    default: "Admin",
    template: "%s | Admin Panel %s",
  },
  description: "PLC automation spare parts supplier",
};
export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div id="admin-panel">
        <AdminSidebar />
        <div className="admin-main">
          <AdminHeader />
          <div className="admin-content" id="admin-content">
            <main className="min-h-screen">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}