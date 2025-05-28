export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      
       <main className="w-screen h-screen bg-neutral-100 "> {children}</main>;
    </div>
    
  )
 
}
