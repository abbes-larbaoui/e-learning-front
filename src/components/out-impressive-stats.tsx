import { Typography } from "@material-tailwind/react";
import {
  UserIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon, UserCircleIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "./stats-card";
import {useEffect, useState} from "react";
import {StatSection} from "../types/statSection.ts";
import {fetchStatSection} from "../services/statService.ts";


const STATS = [
  {
    icon: UserIcon,
    count: "10,200+",
    title: "Students",
  },
  {
    icon: UserCircleIcon,
    count: "50+",
    title: "Instructors",
  },
  {
    icon: PencilSquareIcon,
    count: "10+",
    title: "Courses",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Support",
  },
];

export function OutImpressiveStats() {

  const [statData, setStatData] = useState<StatSection | null>(null);

  useEffect(() => {
    fetchStatSection().then((data) => setStatData(data));
  }, []);

  return (
    <section className="px-8 pt-60">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            {statData ? statData.title : "Loading..."}
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            {statData ? statData.description : "Loading..."}
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard icon={UserIcon} count={statData ? statData.students.toString() : "0"} title={"Students"} />
            <StatsCard icon={UserCircleIcon} count={statData ? statData.teachers.toString() : "0"} title={"Instructors"} />
            <StatsCard icon={PencilSquareIcon} count={statData ? statData.plans.toString() : "0"} title={"Plans"} />
            <StatsCard icon={PhoneArrowDownLeftIcon} count={statData ? statData.support : "24/7"} title={"Support"} />

        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;