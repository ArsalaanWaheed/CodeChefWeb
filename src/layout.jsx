import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/AppSidebar"

export  function Layout({ children }) {
  return (
    <SidebarProvider className=" ">
      <AppSidebar className=" bg-black"/>
      <main className="bg-black overflow-hidden ">
        <SidebarTrigger className="fixed right-0 top-6  "/>
        {children}
      </main>
    </SidebarProvider>
  )
}
