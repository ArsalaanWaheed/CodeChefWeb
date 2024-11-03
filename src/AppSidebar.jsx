import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import navImg from "./navbar/navImg.jpg";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Events",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Webinar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Learn",
    url: "#",
    icon: Search,
  },
  {
    title: "Leads",
    url: "#",
    icon: Settings,
  },
  {
    title: "Team",
    url: "#",
    icon: Settings,
  },
  {
    title: "Contact Us",
    url: "#",
    icon: Settings,
  }
]

export function AppSidebar() {
  return (
    <Sidebar className="" >
      <SidebarContent className="active:border-none"style={{backgroundImage:`url(${navImg})`}} >
        <SidebarGroup className="">
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="">
              {items.map((item) => (
                <SidebarMenuItem className="" key={item.title}>
                  <SidebarMenuButton className="" asChild>
                    <a className="h-16" href={item.url}>
                      <item.icon />
                      <span className=" h-[40px] text-white p-0 text-[2.2em]">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
