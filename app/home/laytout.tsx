export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-screen h-screen bg-neutral-100 ">
    <div className="">{children}</div>
    </div>
  );
}