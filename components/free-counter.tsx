"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { MAX_FREE_COUNT } from "@/constnsts"
import { Zap } from "lucide-react"
import { useProModal } from "@/hooks/use-pro-modal"

interface FreeCounterProps {
    count: number,
    isPro: boolean
}

export const FreeCounter: React.FC<FreeCounterProps> = ({
    count,
    isPro
}) => {

    const [mounted, setMounted] = useState(false);
    const proModal = useProModal();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    if(isPro){
        return null;
    }

    return (
        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-6">
                    <div className="text-cnnter text-sm text-white mb-4 space-y-2">
                        <p className="pb-1 ">
                            {count} / {MAX_FREE_COUNT} Free Generations
                        </p>
                        <Progress
                            className="h-3"
                            value={(count / MAX_FREE_COUNT) * 100}
                        />
                    </div>
                    <Button
                        onClick={proModal.onOpen}
                        variant={"premium"}
                        className=" w-full">
                        Upgrade
                        <Zap className="h-4 w-4 ml-2 fill-white" />
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}