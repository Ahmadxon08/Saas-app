"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("topic") || "";

  const [search, setSearch] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: search,
        });
        router.push(newUrl, { scroll: false });
      } else if (pathname === "/companion") {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["topic"],
        });
        router.push(newUrl, { scroll: false });
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [pathname, search, router, searchParams.toString()]);
  return (
    <div className="relative border-black border rounded-lg items-center flex gap-3 px-2 py-1 h-fit">
      <Image src={"/icons/search.svg"} alt="Search" width={15} height={15} />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
