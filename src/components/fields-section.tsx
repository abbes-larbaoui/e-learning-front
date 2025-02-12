import {Button, Card, CardBody, Typography,} from "@material-tailwind/react";

import CategoryCard from "./category-card";
import {useEffect, useState} from "react";
import {FieldsSectionType} from "../types/fields-section.ts";
import {fetchFieldsSection} from "../services/field-service.ts";

export function FieldsSection() {

  const [fieldsSectionData, setFieldsSectionData] = useState<FieldsSectionType | null>(null);

  useEffect(() => {
    fetchFieldsSection().then((data) => setFieldsSectionData(data));
  }, []);

  return (
    <section className="container mx-auto px-8 pt-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          {fieldsSectionData ? fieldsSectionData.title : "Loading..."}
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          {fieldsSectionData ? fieldsSectionData.description : "Loading..."}
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
            color="gray"
            className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography variant="h4" className="mt-9" color="white">
              {fieldsSectionData ? fieldsSectionData.title : "Loading..."}
            </Typography>
            <Typography
                color="white"
                className="mt-4 mb-14 font-normal opacity-50"
            >
              {fieldsSectionData ? fieldsSectionData.description : "Loading..."}
            </Typography>
            <Button size="sm" color="white">
              show all
            </Button>
          </CardBody>
        </Card>
        <div className="grid grid-cols-2 col-span-2 gap-x-6 gap-y-6">
          {fieldsSectionData?.fields.map((props, key) => (
              <CategoryCard
                  key={key}
                  title={props.name}
                  desc=""
                  img={props.image}
                  field=""
              />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FieldsSection;