import { forwardRef } from "react";

const AboutSection = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section ref={ref} id="about" className="h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold">Welcome to about</h1>
        </section>
    );
});

export default AboutSection;
