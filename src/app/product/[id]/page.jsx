import Image from "next/image";
import { Button, Flex } from "antd";
import products from "../../../utils/tshirts.json";
import { Rate } from "antd";

const getProduct = async (id) => {
  console.log(products);
  const product = products.find((product) => product.id === Number(id));
  return product;
};

const Page = async ({ params }) => {
  const id = params.id;
  const productDetail = await getProduct(id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-16 ml-20 mr-20 mb-14 gap-4">
  <div className="lg:col-span-2 border border-blue-500 ">
    <Image
      src={productDetail?.imageSrc}
      alt="T-Shirt"
      width={400}
      height={400}
      className="w-full h-full object-cover"
    />
  </div>
  <div className="lg:col-span-2 ml-7 mt-7">
    <p className="text-[#2563EB] mb-1">text</p>
    <p className="text-[#1D4ED8] font-semibold text-2xl mb-2">
      {productDetail?.tShirtNo}
    </p>
    <p className="text-[#2563EB] font-medium text-lg mb-6">
      {productDetail.price}
    </p>
    <div className="flex gap-5 mb-10">
      <p className="text-[#2563EB] font-normal">{productDetail.rate}/5</p>
      <div className="flex text-[#2563EB] gap-1">
        <Rate className="text-[#2563EB]" disabled allowHalf defaultValue={productDetail.rate} />
      </div>
      <p className="text-[#2563EB] font-normal underline">
        {productDetail.about}
      </p>
    </div>
    <p className="text-[#2563EB] mb-5">Color</p>
    <div className="flex gap-4 mb-8">
      <img src="/images/color1.png"/>
      <img src="/images/color2.png"/>
      <img src="/images/color3.png"/>
      <img src="/images/color4.png"/>
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
};

export default Page;
