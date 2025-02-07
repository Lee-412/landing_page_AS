import "../styles/card.css";

interface DataCard {
  imageUrl: string;
  title: string;
  description: string;
  category?: string;
  button?: React.ReactNode;
}

const AboutCard = ({
  imageUrl,
  title,
  description,
  category,
  button,
}: DataCard) => {
  return (
    <div className="max-w-sm bg-[#F9FAFB] rounded-lg shadow-md p-6 ">
      <img className="w-full rounded-lg" src={imageUrl} alt={title} />

      <div className="mt-4 text-left">
        {category && (
          <p className="text-xs text-gray-500 uppercase mb-2">{category}</p>
        )}

        <h3 className="font-semibold text-lg text-black">{title}</h3>

        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>

      <div className="mt-4 text-left">{button}</div>
    </div>
  );
};

export default AboutCard;
