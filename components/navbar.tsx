import MobileSidebar from "@/components/mobile-sidebar";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { checkSubscription } from "@/lib/subscription";

interface navbarProps{
  count: number
}

const Navbar: React.FC<navbarProps> = async({
  count
}) => {

  const isPro = await checkSubscription();

  return(
    <div className="flex items-center p-4">
        <MobileSidebar 
          count={count}
          isPro={isPro}
        />
        <div className="flex w-full justify-end">
            <UserButton 
            afterSignOutUrl="/"
            />
        </div>
    </div>
  )
};

export default Navbar;
