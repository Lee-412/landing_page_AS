import { forwardRef } from "react";
import CardBase from "./card_base";
import '../styles/servicesSection.css'


const ServicesSection = forwardRef<HTMLElement, { data: any }>(({ data }, ref) => {
    console.log(data);

    const cardData = [
        {
            imageUrl: "/public/card-top.jpg",
            title: "The Coldest Sunset",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            tags: ["photography", "travel", "winter"]
        },
        {
            imageUrl: "/public/card-top.jpg",
            title: "The Brightest Sunrise",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
            tags: ["nature", "sunrise", "morning"]
        },
        {
            imageUrl: "/public/card-top.jpg",
            title: "The Deepest Ocean",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
            tags: ["ocean", "adventure", "blue"]
        }
    ];

    return (
        <div className="w-full mx-auto flex justify-center items-center bg-[#F3F4F6] body_section">
            <section ref={ref} id="services" className="h-screen flex items-center justify-center container_section">
                <div className="box_container">
                    <div className="title_box">
                        <h1 className="title">Our Services</h1>
                        <p className="description">Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8">

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
