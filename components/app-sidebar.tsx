import { Goal, Home, FileStack, PiggyBank } from "lucide-react";
import Link from "next/link"; // Import Link from next/link

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items with respective URLs.
const items = [
  {
    title: "Dashboard",
    url: "/financial/dashboard", // Link to /dashboard
    icon: Home,
  },
  {
    title: "Budget",
    url: "/financial/budget", // Link to /budget
    icon: PiggyBank,
  },
  {
    title: "Goals",
    url: "/financial/goals", // Link to /goals
    icon: Goal,
  },
  {
    title: "Transactions",
    url: "/financial/transactions", // Link to /transactions
    icon: FileStack,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
      Milo Financial App
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} prefetch={true}>
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Help</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/financial/help">Help</Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
