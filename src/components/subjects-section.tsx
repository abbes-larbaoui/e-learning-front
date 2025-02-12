import {Card, CardBody, Typography,} from "@material-tailwind/react";

import CategoryCard from "./category-card";
import React, {useEffect, useState} from "react";
import {SubjectsSectionType} from "../types/subjects-section.ts";
import {fetchSubjectsSection} from "../services/subject-service.ts";
import {Link} from "react-router-dom";


export function SubjectsSection() {

  const [subjectsSectionData, setSubjectsSectionData] = useState<SubjectsSectionType | null>(null);

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
            <Link to="/subjects" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-300 transition">
              Show all
            </Link>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default SubjectsSection;