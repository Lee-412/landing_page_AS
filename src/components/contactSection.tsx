import { forwardRef } from "react";

const ContactSection = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section ref={ref} id="contact" className="h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold">Welcome to contact</h1>
        </section>
    );
});

export default ContactSection;
