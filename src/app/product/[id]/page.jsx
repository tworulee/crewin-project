import Image from "next/image";
import tshirt from "/public/images/t-shirt.png";
import {
  StarFilled,
  StarOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";
import { Button, Flex } from "antd";

export default function Page() {
  return (
    <div className="grid grid-cols-4 mt-16  ml-20 mr-20 mb-14">
      <div className="col-span-2 border border-blue-500">
        <Image
          src={tshirt}
          alt="T-Shirt"
          width={400}
          height={400}
          layout="responsive"
          className="object-cover"
        />
      </div>
      <div className="col-span-2 ml-7 mt-7">
        <p className="text-[#2563EB] mb-1">text</p>
        <p className="text-[#1D4ED8] font-semibold text-2xl mb-2">T-shirt 1</p>
        <p className="text-[#2563EB] font-medium text-lg mb-6">$190</p>
        <div className="flex gap-5 mb-10">
          <p className="text-[#2563EB] font-normal">4.5/5</p>
          <div className=" flex text-[#2563EB] gap-1">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
          </div>
          <p className="text-[#2563EB] font-normal underline">Description</p>
        </div>
        <p className="text-[#2563EB] mb-5">Color</p>
        <div className="gap-4 mb-8">
          <MinusSquareOutlined className="text-[#2563EB] text-2xl" />
          <MinusSquareOutlined className="text-[#2563EB] text-2xl" />
          <MinusSquareOutlined className="text-[#2563EB] text-2xl" />
          <MinusSquareOutlined className="text-[#2563EB] text-2xl" />
        </div>
        <p className="text-[#2563EB] mb-5">Title</p>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="col-span-2 border border-blue-500 p-4">
            <p className="text-[#1D4ED8] font-semibold">Small</p>
            <p className="text-[#2563EB]">120 by 18 inches</p>
          </div>
          <div className="col-span-2 border border-blue-500 p-4">
            <p className="text-[#1D4ED8] font-semibold">Medium</p>
            <p className="text-[#2563EB]">150 by 18 inches</p>
          </div>
        </div>

        <p className="text-[#2563EB] underline mb-8">Button Text</p>
        <Flex
          vertical
          gap="small"
          style={{
            width: "100%",
          }}
        >
          <Button
            className="bg-[#DBEAFE] border-dashed border-2 text-[#1D4ED8] rounded-none"
            block
          >
            Buy
          </Button>
        </Flex>
      </div>
    </div>
  );
}
