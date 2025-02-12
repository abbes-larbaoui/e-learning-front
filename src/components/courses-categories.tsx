import {Button, Card, CardBody, Typography,} from "@material-tailwind/react";

import {GlobeEuropeAfricaIcon, HeartIcon, MicrophoneIcon, PuzzlePieceIcon,} from "@heroicons/react/24/solid";

import CategoryCard from "./category-card";
import React, {useEffect, useState} from "react";
import {SubjectsSection} from "../types/subjects-section.ts";
import {fetchSubjectsSection} from "../services/subject-service.ts";


// const CATEGORIES = [
//   {
//     img: "/image/blogs/blog-3.png",
//     icon: HeartIcon,
//     title: "Frontend Web Development",
//     desc: "300 Courses",
//   },
//   {
//     img: "/image/blogs/blog-12.jpeg",
//     icon: PuzzlePieceIcon,
//     title: "Backend Web Development",
//     desc: "200 Courses",
//   },
//   {
//     img: "/image/blogs/blog-10.jpeg",
//     icon: GlobeEuropeAfricaIcon,
//     title: "Web Security & Performance",
//     desc: "240 Courses",
//   },
//   {
//     img: "/image/blogs/blog-13.png",
//     icon: MicrophoneIcon,
//     title: "Full-Stack Web Development",
//     desc: "100 Courses",
//   },
// ];

export function CoursesCategories() {

  const [subjectsSectionData, setSubjectsSectionData] = useState<SubjectsSection | null>(null);

  useEffect(() => {
    fetchSubjectsSection().then((data) => setSubjectsSectionData(data));
  }, []);

  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          {subjectsSectionData ? subjectsSectionData.title : "Loading..."}
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          {subjectsSectionData ? subjectsSectionData.description : "Loading..."}
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="grid grid-cols-2 col-span-2 gap-x-6 gap-y-6">
          {subjectsSectionData?.subjects.map((props, key) => (
              <CategoryCard
                  key={key}
                  title={props.name}
                  desc={props.description}
                  img={props.image}
                  field={props.field.name}
              />
          ))}
        </div>
        <Card
            color="gray"
            className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            {/*<Typography color="white" className="text-xs font-bold opacity-50">*/}
            {/*  HTML, CSS & Javascript*/}
            {/*</Typography>*/}
            <Typography variant="h4" className="mt-9" color="white">
              {subjectsSectionData ? subjectsSectionData.title : "Loading..."}
            </Typography>
            <Typography
                color="white"
                className="mt-4 mb-14 font-normal opacity-50"
            >
              {subjectsSectionData ? subjectsSectionData.description : "Loading..."}
            </Typography>
            <Button size="sm" color="white">
              show all
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default CoursesCategories;