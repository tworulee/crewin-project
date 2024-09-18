import { Card } from "antd";
import Image from "next/image";
// import tShirtImage from '../images/t-shirt.png';

export default function MainCard({tshirt}) {
  return (
    <Card
     className="border-transparent"
      style={{
        width: 264,
      }}
      cover={<Image layout="fill"  alt="example" src={tshirt.imageSrc} />}
    >
      <p className="text-[#2563EB] text-base font-semibold mb-2  ">{tshirt.tShirtNo}</p>
      <p className="text-[#2563EB] text-sm font-normal ">
       {tshirt.about}
      </p>
    </Card>
  );
}
