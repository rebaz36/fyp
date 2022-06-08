import { useState } from "react";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";

export default function SearchButton({ onSearchSubmit }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;

  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchValue);
  };

  return (
    <form className="relative" onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="rounded-full text-black focus:outline-none   h-6 w-36 pl-2 text-xs    lg:h-12 lg:w-80 lg:pl-7 lg:pr-20    md:h-8 md:w-60 md:pl-4 "
        placeholder={t.home.TypeToSearch}
        onChange={handleOnChange}
      />

      <button className="text-white rounded-full absolute bg-accent     h-6 w-12 text-xs left-24 bottom-0    md:h-8 md:w-20 md:left-40 md:text-base      lg:h-12 lg:w-24 lg:left-56 lg:font-semibold lg:text-xl">
        {t.home.Search}
      </button>
    </form>
  );
}