'use client';

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Chip
} from "@heroui/react";


export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {label: "About", href: "/about"},
        {label: "Open Source", href: "open-source"},
        {label: "Resume", href: "resume"},
        {label: "Contact Me", href: "contact-me"}
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBordered>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link color="foreground" href="/" className="text-lg">
                        {"</Onkar>"}
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            {/* External Chip with margin */}
            <Chip className="py-5 m-4">
                {/* Centered Menu Items */}
                <NavbarContent className="hidden sm:flex gap-4 justify-center">
                    {["About", "Open Source", "Resume", "Contact Me"].map((item, index) => (
                        <Chip
                            key={index}
                            className="transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white px-4 py-2 m-2"
                        >
                            <NavbarItem>
                                <Link
                                    color="foreground"
                                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                                    className="text-md"
                                >
                                    {item}
                                </Link>
                            </NavbarItem>
                        </Chip>
                    ))}
                </NavbarContent>
            </Chip>

            {/* Mobile Menu */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link
                            className="w-full text-2xl"
                            href={item.href}
                            size="md"
                            color={"foreground"}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
