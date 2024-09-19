"use client"
import { Card } from "antd";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function MainCard({tshirt}) {
    const router = useRouter()
  return (
    <Card
    onClick={()=>router.push(`/product/${tshirt?.id}`)}
     className="border-transparent cursor-pointer"
      style={{
        width: 300,
      }}
      cover={<Image width={300} height={300} alt="example" src={tshirt.imageSrc} />}
    >
      <p className="text-[#2563EB] text-base font-bold mb-2  ">{tshirt.tShirtNo}</p>
      <p className="text-[#2563EB] text-sm font-normal ">
       {tshirt.about}
      </p>
    </Card>
  );
}
