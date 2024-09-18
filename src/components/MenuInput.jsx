import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import "../app/globals.css"

export default function MenuInput() {
  return (
    <Input 
        className="w-[20.5rem] rounded-none border-[#1D4ED8]  " 
        placeholder="Lorem ipsum" 
        size="default" 
        prefix={<SearchOutlined className="text-[#1D4ED8]" />}
      />
  )
}
