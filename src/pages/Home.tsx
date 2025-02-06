

import { useRef } from "react";
import Header from "../components/header";
import HomeSection from "../components/homeSection";
import AboutSection from "../components/aboutSection";
import ServicesSection from "../components/servicesSection";
import ContactSection from "../components/contactSection";


export default function Home() {
    // Tạo ref cho từng section
    const homeRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    return (
        <div>
            <Header sectionRefs={{ homeRef, aboutRef, servicesRef, contactRef }} />
            <main>
                <HomeSection ref={homeRef} />
                <AboutSection ref={aboutRef} />
                <ServicesSection ref={servicesRef} />
                <ContactSection ref={contactRef} />
            </main>
        </div>
    );
}
