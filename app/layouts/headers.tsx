"use client"

import { NavigationMenuDemo } from '@/components/navigation-bar'
import React from 'react'
 
export default function Header() {
    return (
    <div className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <span className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">Jace.dev</span>

        <div>
            <NavigationMenuDemo/>
        </div>
    </div>
    )
}