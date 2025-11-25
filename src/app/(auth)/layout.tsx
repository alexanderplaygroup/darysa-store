export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth();
  // if (session) {
  //   redirect('/');
  // }
  return <>{children}</>;
}
