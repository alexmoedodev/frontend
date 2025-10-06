import React from "react"

import { FaTruck } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export type WhyChooseProps = {
    icon: React.ReactNode
    name: string
    details:string
}

export const WhyChooseService:WhyChooseProps[] = [
    {
        icon: <FaTruck/>,
        name: "Free Delivery",
        details: "Free shopping on all order"
    },
    {
        icon: <FaCreditCard />,
        name: "Monet Return",
        details: "Back guarantee under 7 day"
    },
    {
        icon: <MdOutlineSupportAgent />,
        name: "Online Support",
        details: "Support online 24 hours a day"
    },
    {
        icon: <VscWorkspaceTrusted />,
        name: "Reliable",
        details: "Trusted by 1000+ brands"
    },
]