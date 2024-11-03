import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/AppSidebar"

export  function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar className=" bg-black"/>
      <main>
        <SidebarTrigger className="fixed right-4 top-6  "/>
        {children}
      </main>
    </SidebarProvider>
  )
}
