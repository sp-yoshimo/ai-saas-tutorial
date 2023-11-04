"use client"

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";

interface SubscriptionButtonProps {
    isPro: boolean
}

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({
    isPro = false
}) => {

    const [isLoading, setIsLoading] = useState(false);

    const onClick = async() => {
        try{

            setIsLoading(true)
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url

        }catch(error){
            console.log("BILLING_ERROR", error)
        }finally{
            setIsLoading(false)
        }
    }

    return (
        <Button
            variant={isPro ? "default" : "premium"}
            onClick={onClick}
            disabled={isLoading}
        >
            {isPro ? "Manage Subscription" : "Upgrade"}
            {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
        </Button>
    )
};

export default SubscriptionButton;
