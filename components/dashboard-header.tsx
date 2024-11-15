'use client'
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { UserNav } from "@/components/user-nav"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function DashboardHeader() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(path => path)

  // Capitalize first letter and remove hyphens
  const formatPathName = (path: string) => {
    return path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-4 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {paths.map((path, index) => {
              const href = `/${paths.slice(0, index + 1).join('/')}`
              const isLast = index === paths.length - 1

              return (
                <BreadcrumbItem key={path}>
                  {isLast ? (
                    <BreadcrumbPage className="text-blue-500">{formatPathName(path)}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={href}>
                        {formatPathName(path)} /
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <UserNav />
    </header>
  )
} 