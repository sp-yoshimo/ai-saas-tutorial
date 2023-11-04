"use client"

import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


import { Menu } from "lucide-react"
import React ,{ useState, useEffect }from "react";

interface MobileSidebarProps{
    count: number,
    isPro: boolean
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
    count,
    isPro
}) => {
    
    const [isMounted, setIsMoounted] = useState(false);

    useEffect(()=>{
        setIsMoounted(true)
    }, [])

    if(!isMounted){
        return null;
    }


    return (
        <Sheet>
            <SheetTrigger>
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent
            side="left"
            className="p-0 text-white"
            >   
                <Sidebar
                    apiLimitCount={count}
                    isPro
                />
            </SheetContent>
        </Sheet>
    )
};

export default MobileSidebar;
