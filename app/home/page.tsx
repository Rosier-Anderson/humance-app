// This is a React component that serves as the home page of a web application.
import PreHeader from "../ui/home/pre-header";
export default function HomePage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-screen h-screen bg-neutral-100 ">
      <main className="w-full h-full flex flex-col ">
       <PreHeader />
      </main>
    </div>
  );
}
