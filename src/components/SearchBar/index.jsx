import React, { useState, useEffect, useRef } from "react";

import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import courses from "../../components/SearchBar/searchCourse.json";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  let ref = useRef();
  const inputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [coursesData, setCoursesData] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    // console.log("searchTerm", searchTerm);

    const filterData = courses?.filter((value) => {
      return value?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    });
    if (searchTerm) {
      setCoursesData(filterData);
    } else {
      setCoursesData([]);
    }
  };

  useEffect(() => {
    const handleClickSearchOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    if (showSearch)
      // if (inputRef.current) {
      inputRef.current.focus();
    // }
    document.addEventListener("click", handleClickSearchOutside, true);
    return () => {
      document.removeEventListener("click", handleClickSearchOutside, true);
    };
  }, [showSearch]);

  return (
    <div ref={ref} className="flex my-auto">
      <div className="relative  ">
        <button
          className="flex items-center focus:outline-none bg-white w-9 h-9 rounded-full justify-center my-auto cursor-pointer hover:bg-[#ebe6e6] "
          onClick={() => {
            setShowSearch(!showSearch);
            navigate(location.pathname);
          
          }}
        >
          <FiSearch />
        </button>
        {showSearch && (
          <div className="absolute top-[42px] lg:top-[58px] -right-16 lg:-right-5 mt-4 w-72 lg:w-96">
            <div className="hidden lg:block absolute lg:-top-[4px] left-[90%] h-[12px] w-[12px] origin-center rotate-45 bg-white" />
            <input
              className="px-5 py-2 bg-white rounded-t-sm text-gray-700 focus:outline-none focus:bg-white w-full border border-[#081C3A]"
              type="text"
              ref={inputRef}
              onChange={handleSearch}
              placeholder="Search courses"
            
            />
            {coursesData?.length ? (
              <div>
                {coursesData?.map((value, id) => (
                  <ul className="" key={id}>
                    <Link to={value?.path || "/"}>
                      <li
                        className="bg-white  px-5 py-2 border-l border-r border-b border-[#081C3A] hover:bg-[#dad6d6]"
                        onClick={() => {
                          // window.scroll(0, 0);
                          setShowSearch(false);
                        }}
                      >
                        {value?.title}
                      </li>
                    </Link>
                  </ul>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
