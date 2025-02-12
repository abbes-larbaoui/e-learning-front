import { useEffect, useState } from "react";
import { Button, Typography, Card } from "@material-tailwind/react";
import {HeroSection} from "../types/heroSection.ts";
import {fetchHeroSection} from "../services/heroService.ts";
import {Link} from "react-router-dom";

function Hero() {

  const [heroData, setHeroData] = useState<HeroSection | null>(null);

  useEffect(() => {
    fetchHeroSection().then((data) => setHeroData(data));
  }, []);

  return (
      <div className="!flex h-[55vh] w-full items-center justify-between px-10">
        <img
            width={1200}
            height={1200}
            src="/image/image8.svg"
            alt="bg-img"
            className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
        />
        <div className="container mx-auto mt-28">
          <div className="grid grid-cols-12 text-center lg:text-left">
            <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
              <Typography variant="h1" color="blue-gray" className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl">
                {heroData ? heroData.title : "Loading..."}
              </Typography>
              <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
                {heroData ? heroData.description : "Loading..."}
              </Typography>
              <div className="mb-8 flex justify-center gap-4 lg:justify-start">
                  <Link to="/plans" className="px-4 py-2 text-sm font-medium text-white bg-black content-center  rounded-xl hover:drop-shadow-lg">
                      View All Plans
                  </Link>

                  <Link to="/fields" className="px-4 py-2 text-sm font-medium text-black bg-white content-center border  rounded-xl hover:drop-shadow-lg">
                      EXPLORE OUR FIELDS
                  </Link>
              </div>
              {heroData && heroData.fields.length > 0 && (
                  <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
                    {heroData.fields.map((field) => (
                        <Typography key={field.id} variant="h4" className="font-bold text-xl text-center text-gray-500">
                          {field.name}
                        </Typography>
                    ))}
                  </div>
              )}
            </Card>
          </div>
        </div>
      </div>
  );
}

export default Hero;
