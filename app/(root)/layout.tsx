import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstname: "Kunal", lastname: "Asude" };
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar 
        user ={loggedIn}/>

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image
            src='/icons/logo2.svg'
            alt="logo"
            width={40}
            height={40} />
            <div>
              <MobileNavbar
              user = {loggedIn}
              />
            </div>
          </div>
          {children}
        </div>

        
    </main>
  );
}
