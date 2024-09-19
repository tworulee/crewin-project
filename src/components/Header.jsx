import { ShoppingOutlined, MenuOutlined } from "@ant-design/icons";
import MenuInput from "./MenuInput";
import Link from "next/link";
import { Divider } from "antd";

export default function Header() {
  const menu = ["Man", "Woman", "Kids", "Outdoor", "Extreme"];
  return (
    <div className=" h-[144px] ml-20 mr-20 mt-12">
      <div className="flex justify-between mb-6 ">
        <p className="font-normal text-3xl text-[#2563EB]">Shopping</p>
        <div className="text-[#2563EB]">
          <ShoppingOutlined /> Basket
        </div>
      </div>
      <div className="w-[100px]"><Divider className="mb-10"  /></div>
      
      <div className="flex justify-between ">
        <Link
          href="/"
          className=" flex-wrap  space-x-8 font-normal text-[#2563EB] hidden md:flex"
        >
          {" "}
          {menu.map((m) => (
            <p key={m}>{m}</p>
          ))}
        </Link>
        <MenuOutlined className="block md:hidden text-[#2563EB] text-2xl" />

        <MenuInput />
      </div>
      <div className="w-[100px]"><Divider className="mb-10"  /></div>
    </div>
  );
}
