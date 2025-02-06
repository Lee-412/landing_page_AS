import { forwardRef } from "react";

const ServicesSection = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section ref={ref} id="services" className="h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold">Welcome to services</h1>
        </section>
    );
});

export default ServicesSection;
