"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, User, Phone, Sun, Moon, Hash, Folder } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

function MenuBar() {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  const pageHashtags = {
    "/": [
      { name: "Bosh sahifa", icon: Hash, href: "#home" },
      { name: "Men haqimda", icon: Hash, href: "#data" },
      { name: "Qobiliyatlar", icon: Hash, href:"#skils"}
    ],
    "/portfolio": [
      { name: "Proyektlar", icon: Hash, href: "#projects" },
      { name: "Blog", icon: Hash, href: "#blog" },
    ],
    "/biografiya": [
      { name: "Maqsad", icon: Hash, href: "#objective" },
      { name: "Ta'lim", icon: Hash, href: "#education" },
      { name: "Ko'nikmalari", icon: Hash, href: "#skills" },
      { name: "Qo'shimcha ma'lumot", icon: Hash, href: "#additionalinformation" },
    ],
    "/call": [
      { name: "Visit Karta", icon: Hash, href: "#visit" },
      { name: "Bog'lanish", icon: Hash, href: "#link" },
    ],
  };

  const hashteklar = pageHashtags[pathname] || [];

  return (
    <Sidebar className="fixed left-0 top-0 h-screen bg-[#242830]" > {/* Shu yerga o'zgarish kiritildi */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" className="flex items-center gap-2">
                <img src="/favicon.ico" alt="Logo" className="h-7" />
                <span className="font-bold">
                  Yo'ldoshev<span className="text-blue-500">Coder</span>
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarHeader className="text-gray-500">
        <span className="text-xs uppercase">Sahifalar</span>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {[
              { name: "Kirish", icon: Home, href: "/" },
              { name: "Portfolio", icon: Folder, href: "/portfolio" },
              { name: "Biografiya", icon: User, href: "/biografiya" },
              { name: "Aloqa", icon: Phone, href: "/call" },
            ].map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <Link href={item.href} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        {hashteklar.length > 0 && (
          <>
            <SidebarHeader className="text-gray-500">
              <span className="text-xs uppercase">#Hashteglar</span>
            </SidebarHeader>
            <SidebarGroup>
              <SidebarMenu>
                {hashteklar.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>
    </Sidebar>
  );
}

export default MenuBar;