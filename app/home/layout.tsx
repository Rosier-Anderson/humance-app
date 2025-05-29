export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-screen h-screen bg-neutral-100">
      {/* This is the main wrapper for your page */}
      {children}
    </main>
  );
}
