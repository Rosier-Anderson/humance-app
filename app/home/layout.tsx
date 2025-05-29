export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="">
      <main className="w-screen h-screen bg-neutral-100 "> {children}</main>;
    </div>
  );
}
