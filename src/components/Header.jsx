import { ShoppingOutlined } from "@ant-design/icons";
import MenuInput from "./MenuInput";

export default function Header() {
  const menu = ["Man", "Woman", "Kids", "Outdoor", "Extreme"];
  return (
    <div className=" h-[144px] ml-20 mr-20 mt-12">
      <div className="flex justify-between mb-10 relative">
        <p className="font-normal text-3xl text-[#2563EB]">Shopping</p>
        <div className="text-[#2563EB]">
          <ShoppingOutlined /> Basket
        </div>
        <div className="absolute  top-14 left-0 w-[100px] border-b-2 border-[#2563EB] opacity-10"></div> 
      </div>
      <div className="flex justify-between relative">
        <div className="flex flex-wrap  space-x-8 font-normal text-[#2563EB]">
          {menu.map((m) => (
            <p key={m}>{m}</p>
          ))}
        </div>
        <MenuInput />
        <div className="absolute  top-14 left-0 w-[100px] border-b-2 border-[#2563EB] opacity-10 "></div>
      </div>
    </div>
  );
}

/// 80 yanlardan 49 ust alt
//flex-wrap yapınca input height genisliyor sonra bakarsın

