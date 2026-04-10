import SideNav from "@/app/ui/dashboard/sidenav";

import { Metadata } from "next";

/* You can also include a metadata object from any layout.js or page.js file to add additional page information like title and description. Any metadata in layout.js will be inherited by all pages that use it. */

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
