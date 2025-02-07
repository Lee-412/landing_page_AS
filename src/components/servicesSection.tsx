import { forwardRef } from "react";
import CardBase from "./card_base";
import { Container } from "lucide-react";



const ServicesSection = forwardRef<HTMLElement>((_, ref) => {
    return (
        <div className="w-full mx-auto flex justify-center items-center bg-[#F3F4F6]">
            <section ref={ref} id="services" className="h-screen flex items-center justify-center">

                <div className="grid grid-cols-3 gap-8">
                    <CardBase />
                    <CardBase />
                    <CardBase />
                </div>
            </section>
        </div>

    );
});

export default ServicesSection;
