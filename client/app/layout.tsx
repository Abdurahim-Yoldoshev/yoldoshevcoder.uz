import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import MenuBar from "./_components/sidebar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yo'ldoshev Coder",
  description: "Yo'ldoshev coder official website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#242830] text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider defaultOpen={true}>
            <div className="flex">
              {/* Sidebar - hidden on mobile, shown on desktop */}
              <div className="hidden md:block">
                <MenuBar />
              </div>
              
              {/* Main content */}
              <main className="flex-1 p-6 relative">
                {/* Sidebar trigger - shown only on mobile */}
                <div className="md:hidden fixed top-4 left-4 z-50">
                  <SidebarTrigger />
                </div>
                {children}
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}