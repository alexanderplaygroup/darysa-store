import { AppBreadcrumb, BreadcrumbItemType } from '@/common/components/custom-ui/AppBreadcrumb';
import { Container } from '@/common/components/custom-ui/Container';
import { Heading } from '@/common/components/custom-ui/Heading';
import { Separator } from '@/common/components/shadcn-ui/separator';
import { SidebarDashboard } from '@/modules/dashboard/components/sidebar-dashboard/SidebarDashboard';
const breadcrumbItems: BreadcrumbItemType[] = [
  { label: 'Home', href: '/' },
  { label: 'Perfil de Usuario', isCurrent: true },
];
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Container className="bg-darysa-gris-800/20 mb-6 h-px" /> */}
      <Container className="mt-10 mb-5 space-y-4">
        <AppBreadcrumb items={breadcrumbItems} className="sm:gap-1.5" />
        <Heading variant="heading" className="text-darysa-gris-950 font-bold md:text-3xl">
          Perfil de Usuario
        </Heading>
      </Container>
      <Container className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[auto_1fr] xl:gap-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:gap-10 xl:gap-24">
          <SidebarDashboard />
          <Separator orientation="vertical" className="bg-darysa-gris-800 hidden lg:block" />
        </div>
        <div className="flex-1">{children}</div>
      </Container>
    </>
  );
}
