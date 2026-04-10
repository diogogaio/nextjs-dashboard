import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import { Metadata } from "next";

/* You can use the title.template field in the metadata object to define a template for your page titles. This template can include the page title, and any other information you want to include.

In your root layout, update the metadata object to include a template: */

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

/* The %s in the template will be replaced with the specific page title.

Now, in your /dashboard/invoices page, you can add the page title:

/app/dashboard/invoices/page.tsx
export const metadata: Metadata = {
  title: 'Invoices',
};
Navigate to the /dashboard/invoices page and check the <head> element. You should see the page title is now Invoices | Acme Dashboard. */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
