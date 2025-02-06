import { forwardRef } from "react";

const HomeSection = forwardRef<HTMLElement>((_, ref) => {
    return (
        <section ref={ref} id="home" className="h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold">Welcome to Home</h1>
        </section>
    );
});

export default HomeSection;
