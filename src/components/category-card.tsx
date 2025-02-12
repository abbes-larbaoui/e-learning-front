import {Card, CardBody, Typography} from "@material-tailwind/react";

interface CategoryCardProps {
  img: string;
  title: string;
  desc: string;
  field: string;
  // icon: React.ElementType;
}

function CategoryCard({ img, title, desc, field}: CategoryCardProps) {
  return (
    <Card className="relative grid min-h-[12rem] w-full overflow-hidden">
      <img
        width={768}
        height={768}
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 h-full w-full bg-black/50" />
      <CardBody className="relative flex flex-col justify-between">
        {/*<Icon className="h-8 w-8 text-white" />*/}
          <Typography variant="h6" className="mb-1" color="white">
              {field}
          </Typography>
        <div>
          <Typography variant="h4" className="mb-1" color="white">
            {title}
          </Typography>
          <Typography color="white" className="text-xs font-bold opacity-50">
            {desc}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
export default CategoryCard;
