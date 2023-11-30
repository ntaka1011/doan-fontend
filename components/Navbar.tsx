import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { BiChevronDown } from "react-icons/bi";
import { TiThMenu } from "react-icons/ti";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const subMenuData = [
  {
    id: 1,
    name: "Giày Converse",
    slug: "giay-converse",
    itemSub: [
      { id: 1, name: "Giày Converse chuck", slug: "giay-converse-chuck" },
      { id: 2, name: "Giày Converse classic", slug: "giay-converse-classic" },
      { id: 3, name: "Giày Converse cao cổ", slug: "giay-converse-cao-co" },
      { id: 4, name: "Giày Converse thấp cổ", slug: "giay-converse-thap-co" },
    ],
  },
  {
    id: 2,
    name: "Giày sneaker",
    slug: "giay-sneaker",
    itemSub: [
      { id: 1, name: "Giày Sneaker low top", slug: "giay-sneaker-low-top" },
      { id: 2, name: "Giày Sneaker mid top", slug: "giay-sneaker-mid-top" },
      { id: 3, name: "Giày Sneaker high top", slug: "giay-sneaker-high-top" },
      { id: 4, name: "Giày Sneaker slip-ons", slug: "giay-sneaker-slip-ons" },
    ],
  },
  {
    id: 3,
    name: "Giày thể thao",
    slug: "giay-the-thao",
    itemSub: [
      { id: 1, name: "Giày đá bóng", slug: "giay-da-bong" },
      { id: 2, name: "Giày bóng rổ", slug: "giay-bong-ro" },
      { id: 3, name: "Giày tập luyện đa năng", slug: "giay-tap-luyen" },
      { id: 4, name: "Giày gofl", slug: "giay-gofl" },
    ],
  },
  {
    id: 4,
    name: "Giày boot",
    slug: "giay-boot",
    itemSub: [
      { id: 1, name: "Giày chelsea boot", slug: "Giay-chelsea-boot" },
      { id: 2, name: "Giày chukka boot", slug: "Giay-chukka-boot" },
      { id: 3, name: "Giày press boot", slug: "Giay-press-boot" },
      { id: 4, name: "Giày combat boot", slug: "Giay-combat-boot" },
    ],
  },
  {
    id: 5,
    name: "Giày loafer",
    slug: "giay-loafer",
    itemSub: [
      { id: 1, name: "Giày penny loafer", slug: "giay-penny-loafer" },
      { id: 2, name: "Giày tassel loafer", slug: "giay-tassel-loafer" },
      { id: 3, name: "Giày kiltie loafer", slug: "giay-kiltie-loafer" },
      { id: 4, name: "Giày pump loafer", slug: "giay-pump-loafer" },
    ],
  },
];

const Navbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: { keyword: search },
    });
    setSearch("");
  };
  const handleSearchKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      router.push({
        pathname: "/search",
        query: { keyword: search },
      });
      setSearch("");
    }
  };
  return (
    <div className="w-full h-10 bg-black relative">
      <Wrapper className="h-full ">
        <div className="h-full">
          <div className="hidden h-full gap-[30px] lg:flex items-center text-[#CCCCCC] uppercase">
            <Link
              href={"/"}
              className="text-white hover:text-white hover:cursor-pointer"
            >
              Trang chủ
            </Link>
            <Link
              href={"/page"}
              className="hover:text-white hover:cursor-pointer"
            >
              Giới thiệu
            </Link>
            <div className="flex items-center hover:text-white group">
              <Link href={"/category"} className="hover:cursor-pointer">
                Sản phẩm
              </Link>
              <BiChevronDown size={20} />
              <div className="absolute top-[35px] left-0 w-full z-10 bg-black/80 pt-10 pb-[50px] hidden group-hover:cursor-pointer group-hover:block hover:md:block transition-all ease-in-out duration-300">
                <Wrapper>
                  <ul className="grid grid-cols-6">
                    {subMenuData &&
                      subMenuData.map((data) => (
                        <li
                          key={data.id}
                          className="px-[15px] border-l border-[#464646]"
                        >
                          <Link href={`/category/${data.slug}`}>
                            <h2 className="text-[#35c0c5] mb-[15px] hover:text-white">
                              {data.name}
                            </h2>
                          </Link>
                          <div className="flex flex-col">
                            {data.itemSub &&
                              data.itemSub.map((item) => (
                                <Link
                                  key={item.id}
                                  href={`/category/${item.slug}`}
                                  className="leading-5 mb-[5px] text-[12px] hover:text-[#35c0c5]"
                                >
                                  {item.name}
                                </Link>
                              ))}
                          </div>
                        </li>
                      ))}
                  </ul>
                </Wrapper>
              </div>
            </div>
            <Link href={"/news"}>
              <div className="hover:text-white hover:cursor-pointer">
                Tin tức
              </div>
            </Link>
            <div className="hover:text-white hover:cursor-pointer">Bản đồ</div>
            <Link href={"/contact"}>
              <div className="hover:text-white hover:cursor-pointer">
                Liên hệ
              </div>
            </Link>
          </div>
          <div className="h-full flex justify-between lg:hidden">
            <div className="flex items-center">
              <TiThMenu color="#35c0c5" size={25} />
            </div>
            <div className="flex">
              <div className="flex items-center border-r border-[#464646] px-[10px] group">
                <FaSearch size={25} color="#35c0c5" />
                <div className="hidden absolute group-hover:flex bg-white top-10 px-5 shadow-[0_0_15px_-5px_rgba(0,0,0,0.4)] right-[15px] md:right-[160px] items-center w-[300px] h-10 z-20">
                  <input
                    placeholder="Gõ tìm kiếm...."
                    className="leading-10 w-full border-none outline-none"
                    onKeyUp={handleSearchKeyUp}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <div
                    onClick={handleSearch}
                    className="pl-5 cursor-pointer z-20"
                  >
                    <FaSearch />
                  </div>
                </div>
              </div>
              <div className="flex items-center px-[10px] text-[#35c0c5]">
                <FaShoppingCart size={25} />
                <span className="ml-[5px]">1</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
