import MainCard from "@/components/MainCard";
import tshirts from "../utils/tshirts.json";

export default function Home() {
  const clothes = ["T-shirts", "Jeans", "Seat"];
  return (
    <div className="grid grid-cols-4  ml-20 mr-20">
      <div className="col-span-1 ">
        {clothes.map((cl) => (
          <p className="text-[#2563EB] font-normal pb-5" key={cl}>
            {cl}
          </p>
        ))}
      </div>
      <div className="col-span-3  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {tshirts.map((tshirt) => (
            <MainCard tshirt={tshirt} key={tshirt.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
