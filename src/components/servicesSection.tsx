import { forwardRef } from "react";
import CardBase from "./card_base";

const ServicesSection = forwardRef<HTMLElement, { data: any }>(({ data }, ref) => {
    console.log(data);

    const cardData = [
        {
            imageUrl: "/card-top.jpg",
            title: "The Coldest Sunset",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            tags: ["photography", "travel", "winter"]
        },
        {
            imageUrl: "/card-top.jpg",
            title: "The Brightest Sunrise",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
            tags: ["nature", "sunrise", "morning"]
        },
        {
            imageUrl: "/card-top.jpg",
            title: "The Deepest Ocean",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
            tags: ["ocean", "adventure", "blue"]
        }
    ];

    return (
        <div className="w-full mx-auto flex justify-center items-center bg-[#F3F4F6] py-16">
            <section ref={ref} id="services" className="w-full flex flex-col items-center justify-center px-6 sm:px-8 ">
                <div className="flex flex-col w-full max-w-5xl items-center">
                    <div className="mb-12 flex flex-col items-center text-center">
                        <h1 className="text-[#343A40] font-extrabold text-3xl sm:text-4xl">Our Services</h1>
                        <p className="text-[#9B9BAE] max-w-lg mt-4">
                            Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                        {cardData.map((card, index) => (
                            <CardBase
                                key={index}
                                imageUrl={card.imageUrl}
                                title={card.title}
                                description={card.description}
                                tags={card.tags}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
});

export default ServicesSection;
