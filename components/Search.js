import React, { useState } from "react";
import data_json from "../data.json";
import data1 from "country-json/src/country-by-population-density.json";
import data2 from "country-json/src/country-by-religion.json";
import data3 from "country-json/src/country-by-continent.json";

const Search = ({ darkMode, filter1, filter2 }) => {
  const [filter3, setFilter3] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    setIsOpen(true);
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data_json.filter((value) => {
      return value.country.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  var data = data_json.filter((e) => {
    if (filter1 != "" && filter2 == "") {
      return e.religion == filter1;
    } else if (filter1 == "" && filter2 == "") {
      return e.religion;
    } else if (filter2 != "" && filter1 == "") {
      return e.continent == filter2;
    } else {
      return e.religion == filter1 && e.continent == filter2;
    }
  });

  data = data.filter((e) => {
    if (filter3 != "") {
      return e.country == filter3;
    } else if (filter3 == "") {
      return e.country;
    }
  });

  const handleOnClick = (event) => {
    const searchedCountry = event.target.innerText;
    setFilter3(searchedCountry);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className={`${darkMode ? "text-white" : "text-black"} text-xl`}>
          Search your country
        </div>
        <div className="mt-6 flex ">
          <input
            type="text"
            className={`rounded-full ${
              darkMode ? "bg-[#F5F5F5]" : "bg-gray-100"
            } ${
              darkMode ? "bg-opacity-10" : "bg-opacity-100"
            } p-2 font-extralight bg-[url('/search.svg')] ${
              darkMode ? "drop-shadow-none" : "drop-shadow-lg"
            } bg-no-repeat ${
              darkMode ? "text-gray-400" : "text-gray-900"
            } bg-[center_left_0.5rem] bg-origin-padding pl-12`}
            placeholder="Search"
            value={wordEntered}
            onChange={handleFilter}
          />

          {filter3 != "" && (
            <button
              className={`h-10 w-10 rounded-full ${
                darkMode ? "bg-[#F5F5F5]" : "bg-gray-100"
              }  ${darkMode ? "bg-opacity-10" : "bg-opacity-100"} ${
                darkMode ? "drop-shadow-none" : "drop-shadow-md"
              } ml-2 ${
                darkMode ? "text-gray-400" : "text-gray-900"
              } p-2 text-xs flex justify-center items-center`}
              onClick={() => setFilter3("")}
            >
              Clear
            </button>
          )}
        
        {filteredData.length != 0 && isOpen && (
          <div
            className={`${darkMode ? "bg-white" : "bg-black"} ${
              darkMode ? "bg-opacity-90" : "bg-opacity-90"
            } md:mt-2  p-3 ${
              darkMode ? "text-black" : "text-white"
            } md:w-[15%] z-10 md:h-[18%] h-[16%] overflow-y-auto absolute md:top-[25%] mt-[11%] ml-1 w-[60%] rounded-xl`}
          >
            {filteredData.map((value) => {
              return (
                <p
                  key={value.country}
                  className={`hover:cursor-pointer ${
                    darkMode ? "hover:bg-black" : "hover:bg-white"
                  } ${
                    darkMode ? "hover:bg-opacity-70" : "hover:bg-opacity-50"
                  } ${darkMode ? "hover:text-white" : "hover:text-black"} rounded-md`}
                  onClick={handleOnClick}
                >
                  {value.country}{" "}
                </p>
              );
            })}
          </div>
        )}
      </div>
      </div>
      <div
        className={`${darkMode ? "bg-black" : "bg-gray-300"} ${
          darkMode ? "text-white" : "text-black"
        } md:w-4/5 md:mx-auto mx-[7%] my-10 text-sm p-5 drop-shadow-md `}
      >
        <div className="flex flex-row justify-around border-solid border-b-2 md:text-base text-[10px] border-gray-400 pb-4 ">
          <div>Country</div>
          <div className="md:ml-10 ml-5">Density</div>
          <div>Religion</div>
          <div>Continent</div>
        </div>

        <div className="flex flex-row justify-around pt-4 md:text-base text-[9px] ">
          <div>
            {data.map((e) => {
              return (
                <p key={e.country} className=" flex flex-col">
                  {e.country}
                </p>
              );
            })}
          </div>
          <div>
            {data.map((e) => {
              return (
                <p key={e.country} className=" flex flex-col">
                  {e.density}
                </p>
              );
            })}
          </div>
          <div>
            {data.map((e) => {
              return (
                <p key={e.country} className=" flex flex-col">
                  {e.religion}
                </p>
              );
            })}
          </div>
          <div>
            {data.map((e) => {
              return (
                <p key={e.country} className=" flex flex-col">
                  {e.continent}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
