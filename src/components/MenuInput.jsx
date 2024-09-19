import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import "../app/globals.css"

export default function MenuInput() {
  return (
    <Input 
        className="w-[8.5rem] sm:w-[12rem] md:w-[16rem] lg:w-[20.5rem]   rounded-none border-[#1D4ED8]  " 
        placeholder="Lorem ipsum" 
        size="default" 
        prefix={<SearchOutlined className="text-[#1D4ED8]" />}
      />
  )
}
