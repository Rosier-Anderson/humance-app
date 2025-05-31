// components/home/FeaturesSection.tsx
import Image from "next/image";
import AnalyticsIcon from "../../../public/Analytics.jpeg";
const features = [
  {
    title: "Planning and Analytics",
    description:
      "Metus torquent platea aenean orci ridiculus potenci feugiat ultricies.",
    icon: AnalyticsIcon,
  },
  {
    title: "Recruitment & Staffing",
    description:
      "Metus torquent platea aenean orci ridiculus potenci feugiat ultricies.",
    icon: AnalyticsIcon,
  },
  {
    title: "Employee Engagement",
    description:
      "Metus torquent platea aenean orci ridiculus potenci feugiat ultricies.",
    icon: AnalyticsIcon,
  },
  {
    title: "Policy Management",
    description:
      "Metus torquent platea aenean orci ridiculus potenci feugiat ultricies.",
    icon: AnalyticsIcon,
  },
];

export default function FeaturesSection() {
  return (
    <div className="flex flex-wrap justify-around mt-8">
      {features.map((feature, idx) => (
        <article key={idx} className="max-w-sm p-4">
          <h1 className="font-bold text-lg">{feature.title}</h1>
          <Image
            src={feature.icon}
            width={100}
            height={100}
            className=""
            alt="Analytics icon"
          />
          <hr className="my-2" />
          <p className="text-sm text-gray-700">{feature.description}</p>
        </article>
      ))}
    </div>
  );
}
