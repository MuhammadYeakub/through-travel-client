import React from "react";
import Container from "../shared/Container";

const LocalCuisineSection = () => {
  const foodieAdventures = [
    {
      title: "Taste of Italy",
      description:
        "Indulge in the flavors of Italy with authentic pasta, pizza, and gelato.",
      image:
        "https://images.unsplash.com/photo-1496134732667-ae8d2853a045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      link: "/italy-food-tour",
    },
    {
      title: "Spices of India",
      description:
        "Experience the vibrant and diverse culinary culture of India.",
      image:
        "https://images.unsplash.com/photo-1560703876-77b86f04b8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/india-food-tour",
    },
    {
      title: "Sushi Delights in Japan",
      description:
        "Discover the art of sushi-making in the heart of Japan. Test your culinary sense.",
      image:
        "https://images.unsplash.com/photo-1592304620205-347272c51580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/japan-sushi-tour",
    },
    {
      title: "Mediterranean Gastronomy",
      description:
        "Savor the Mediterraneans finest cuisine with fresh seafood and mezze.",
      image:
        "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/mediterranean-food-tour",
    },
    {
      title: "Thai Street Food Adventure",
      description:
        "Explore the vibrant street food scene of Thailand with local delicacies.",
      image:
        "https://images.unsplash.com/photo-1571197161439-9cc39b68aedd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/thailand-street-food-tour",
    },
    {
      title: "French Pastry Experience",
      description:
        "Delight in the sweet and savory world of French pastries and cuisine.",
      image:
        "https://images.unsplash.com/photo-1579372785655-a81b19e99b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRyYXZlbCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      link: "/french-pastry-tour", // Link to the detailed food tour page
    },
  ];

  return (
    <Container>
      <div className="container mx-auto my-20">
        <h1 className="text-center text-4xl font-bold text-[#111430]">
          Explore Cuisine <span className="text-[#57baea]">Adventures</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
          {foodieAdventures.map((adventure, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={adventure.image}
                alt={adventure.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {adventure.title}
                </h3>
                <p className="text-gray-600 mb-4">{adventure.description}</p>
                <a
                  href={adventure.link}
                  className="text-sky-500 hover:underline"
                >
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LocalCuisineSection;
