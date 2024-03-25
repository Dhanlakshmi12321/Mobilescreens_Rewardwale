export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {/* <nav>This is dashboard nav bar</nav> */}
      {children}
    </section>
  );
}
