"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchInput = () => {
  const router = useRouter();
  const params = useSearchParams(); //reads the current URL query string
  const [searchValue, setSearchValue] = useState('');

  // console.log("from search input comp",params.toString());

  const handleSearch = () => {
    /**
     
     What 'params is' ->
        -params comes from useSearchParams()
        -It is not a plain string
        -It is a readonly wrapper around the current URL query, console the params to see it

        >> URLSearchParams expects a string (or iterable) to initialize from.
        so initialize the instance of URLSearchParams by converting params to string,,,-> params.toString()
     */

    const newParams = new URLSearchParams(params.toString());
    //newParams is an object here

    newParams.set("search", searchValue); //mutet the newParams object

    //router.push() needs a string URL, not an object, so-> newParams.toString()

    router.push(`?${newParams.toString()}`);
    //sending the search param to url which is received by destructuring {searchParams} in the page.jsx of foods route, see page.jsx and AllFoods component

    // Input → URL → page.jsx → Server fetch params from url -> use that query param in the api fetching data → search result in UI
  };

  return (
    <div className="flex gap-4 my-4">
      <input
        className="input w-full outline-none border border-gray-400 rounded-md px-4"
        placeholder="Search food item"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className="px-2 py-1 bg-yellow-600 text-white rounded-md cursor-pointer"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;