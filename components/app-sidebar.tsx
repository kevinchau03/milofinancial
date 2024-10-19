import { Goal, Home, FileStack, PiggyBank } from "lucide-react";
import Link from "next/link"; // Import Link from next/link

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items with respective URLs.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard", // Link to /dashboard
    icon: Home,
  },
  {
    title: "Budget",
    url: "/budget", // Link to /budget
    icon: PiggyBank,
  },
  {
    title: "Goals",
    url: "/goals", // Link to /goals
    icon: Goal,
  },
  {
    title: "Transactions",
    url: "/transactions", // Link to /transactions
    icon: FileStack,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Milo Financial</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {/* Use Next.js Link for navigation */}
                    <Link href={item.url}>
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
