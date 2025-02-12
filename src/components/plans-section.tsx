import {Typography} from "@material-tailwind/react";
import PlanCard from "./plan-card.tsx";
import {useEffect, useState} from "react";
import {PlansSectionType} from "../types/plans-section.ts";
import {fetchPlansSection} from "../services/plan-service.ts";

export function PlansSection() {

  const [plansSectionData, setPlansSectionData] = useState<PlansSectionType | null>(null);

  useEffect(() => {
    fetchPlansSection().then((data) => setPlansSectionData(data));
  }, []);

  return (
    <section className="px-8 mb-36">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          {plansSectionData ? plansSectionData.title : "Loading..."}
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          {plansSectionData ? plansSectionData.description : "Loading..."}
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {plansSectionData?.plans.map((plan, idx) => (
          <PlanCard key={idx} plan={plan} />
        ))}
      </div>
    </section>
  );
}

export default PlansSection;
