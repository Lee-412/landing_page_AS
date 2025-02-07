import { Briefcase, Settings, Star } from "lucide-react";
import { forwardRef } from "react";
import { Button } from "../components/ui/button";
import AboutCard from "./about_card";

const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  const cardData = [
    {
      imageUrl: "/public/card-top.jpg",
      title: "Product Development",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni.",
      category: "Development",
    },
    {
      imageUrl: "/public/card-top.jpg",
      title: "Marketing Product",
      description:
        "Temporibus autem quibusdam a officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.",
      category: "Marketing",
    },
  ];
  return (
    <section ref={ref} id="about" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold text-black">About Us</h1>
        <p className="text-gray-500 mt-2 max-w-lg mx-auto">
          Ut enim ad minima veniam quis nostrum exercitationem ullam corporis
          suscipit laboriosam nisi commodi consequatur.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
        <div className="text-left">
          <h2 className="text-3xl text-black">
            Productive & Customizable For{" "}
            <span className="font-bold">Developers</span>
          </h2>
          <p className="text-lg mt-4 text-gray-500">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil atque corrupti molestiae.
          </p>
          <ul className="mt-6 space-y-3 text-lg text-gray-800">
            <li className="flex items-center gap-3">
              <Briefcase className="text-blue-500" size={20} />{" "}
              <span>Marketing program activities</span>
            </li>
            <li className="flex items-center gap-3">
              <Settings className="text-blue-500" size={20} />{" "}
              <span>Customization product</span>
            </li>
            <li className="flex items-center gap-3">
              <Star className="text-blue-500" size={20} />{" "}
              <span>At vero eos accusamus iusto</span>
            </li>
          </ul>
          <Button
            variant="link"
            className="mt-6 text-blue-600 text-lg font-semibold bg-transparent border-none text-left w-fit p-0"
          >
            More Information →
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <AboutCard
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              category={card.category}
              button={
                <Button
                  variant="link"
                  className="text-blue-600 mt-2 bg-transparent border-none text-left w-fit p-0 "
                >
                  Read More →
                </Button>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
