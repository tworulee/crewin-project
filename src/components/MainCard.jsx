import { Card } from "antd";
import Image from "next/image";
// import tShirtImage from '../images/t-shirt.png';

export default function MainCard({tshirt}) {
  return (
    <Card
     className="border-transparent"
      style={{
        width: 300,
      }}
      cover={<Image width={300} height={300} alt="example" src={tshirt.imageSrc} />}
    >
      <p className="text-[#2563EB] text-base font-semibold mb-2  ">{tshirt.tShirtNo}</p>
      <p className="text-[#2563EB] text-sm font-normal ">
       {tshirt.about}
      </p>
    </Card>
  );
}
