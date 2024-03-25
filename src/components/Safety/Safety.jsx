import React from "react";
import Container from "../Shared/Container";

const Safety = () => {
  return (
    <Container>
      <div className="safety-updates my-20">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h1 className="text-center mb-3 text-4xl font-bold text-[#111430]">
                Safety and Travel{" "}
                <span className="text-[#57baea]">Updates</span>
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                We prioritize your safety and well-being during your travels.
                Stay informed about the latest safety measures, travel
                advisories, and health-related guidelines.
              </p>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Key Updates</h3>
                <ul className="list-disc list-inside text-gray-800">
                  <li>
                    Check official travel advisories and warnings issued by your
                    government or international health organizations for your
                    travel destination.
                  </li>
                  <li>
                    Follow local health and safety guidelines in the regions you
                    visit, such as mask mandates, social distancing, and hygiene
                    practices.
                  </li>
                  <li>
                    Stay updated on entry requirements, including visa and
                    vaccination requirements, and be aware of quarantine rules
                    if applicable.
                  </li>
                </ul>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                For the most up-to-date information and resources, we recommend
                visiting official sources:
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0ea5e9] hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg inline-block"
                >
                  Official Safety Updates
                </a>
                <a
                  href="https://wwwnc.cdc.gov/travel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0ea5e9] hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg inline-block"
                >
                  Health Guidelines
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1268257924/photo/travel-during-the-covid-19-pandemic-airplane-model-with-face-mask-and-travel-documents.webp?b=1&s=170667a&w=0&k=20&c=TVntuADuoUlXrX7QJ2EM2AAjx8jhoJcTmq249_xidVE="
                alt="Safety and Travel Updates"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Safety;
