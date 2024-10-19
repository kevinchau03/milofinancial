import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

 
export default function FinancialLayout({ children }: { children: React.ReactNode }) {

  return (
    <SidebarProvider>
      <AppSidebar />
        <main style={{ width: '100%', height: '100%' }}>
            {children}
        </main>
    </SidebarProvider>
  )
}