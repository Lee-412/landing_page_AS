import { forwardRef } from "react";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

const HomeSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="home"
      className=" py-20 bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/public/card-top.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hello,
          </h1>
          <h2 className="text-3xl md:text-4xl text-gray-900 mt-5">
            We Help You To Boost Your Business
          </h2>
          <p className="text-lg mt-4 text-gray-500 leading-relaxed">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione.
          </p>

          <div className="mt-6">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2.5 text-sm font-semibold rounded-md">
              Get Started <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/public/card-top.jpg"
            alt="Business Boost"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
});

export default HomeSection;
