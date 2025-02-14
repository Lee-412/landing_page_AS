


import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
const navLinks = [
    { name: "Home", refName: "homeRef" },
    { name: "About", refName: "aboutRef" },
    { name: "Services", refName: "servicesRef" },
    { name: "Contact", refName: "contactRef" },
];

export default function Header({ sectionRefs }: { sectionRefs: Record<string, React.RefObject<HTMLElement>> }) {
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px", threshold: 0.2 }
        );

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, [sectionRefs]);

    const handleSmoothScroll = (refName: string) => {
        sectionRefs[refName]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(refName.replace("Ref", ""));
    };

    const handleClickGetStart = () => {

        window.open('http://103.237.147.55:7000/if/flow/default-authentication-flow/?next=%2Fif%2Fadmin%2F%23%2Fadministration%2Foverview', '_blank')
    }
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold logo_app">AuthStream</h1>
                <nav className="hidden md:flex space-x-6 bg-white">
                    {navLinks.map((link) => (
                        <Button
                            key={link.name}
                            variant="ghost"
                            onClick={() => handleSmoothScroll(link.refName)}
                            className={cn(
                                "px-4 py-2 transition text-gray-700 hover:text-blue-600 bg-white border-none",
                                "focus:ring-0 focus:outline-none focus-visible:ring-0",
                                "hover:border-none",
                                "hover:shadow-md",
                                activeSection === link.refName.replace("Ref", "") && "text-blue-600 font-semibold"
                            )}
                        >
                            {link.name}
                        </Button>
                    ))}
                </nav>
                <div className="hidden md:flex space-x-4">
                    <Button onClick={handleClickGetStart}
                        className="hover:border-none"

                    >Get Started</Button>
                </div>
            </div>
        </header >
    );
}
