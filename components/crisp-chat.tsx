"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(()=>{
        Crisp.configure("0e432485-99f4-4410-8489-67faea617b14");
    },[])

    return null;
}