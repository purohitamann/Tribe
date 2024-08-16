import React from 'react'
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
export default function DemoLinks() {
    return (
        <section>
            {siteConfig.demoLinks.map((item) => (
                <div key={item.href}>
                    <NextLink
                        className={clsx(
                            linkStyles({ color: "foreground" }),
                            "data-[active=true]:text-primary data-[active=true]:font-medium",
                        )}
                        color="foreground"
                        href={item.href}
                    >
                        {item.label}
                    </NextLink>
                </div>
            ))}
        </section>
    )
}


