import React from "react";
import data from "country-json/src/country-by-name.json";
import data1 from "country-json/src/country-by-population-density.json";
import data2 from "country-json/src/country-by-religion.json";
import data3 from "country-json/src/country-by-continent.json";

const Search = ({darkMode}) => {
  const countries = [];
  const countries_json = Array.from(data);

  countries_json.map((e) => {
    countries.push(e.country);
  });

  const new_countries = countries.slice(0, 24);

  const p_density = [];
  const p_density_json = Array.from(data1);

  p_density_json.map((e) => {
    p_density.push(e.density);
  });

  const density = p_density.slice(0, 24);

  const continents = [];
  const continent_json = Array.from(data2);

  continent_json.map((e) => {
    continents.push(e.religion);
  });

  const religion = continents.slice(0, 24);

  const capitals = [];
  const capitals_json = Array.from(data3);

  capitals_json.map((e) => {
    capitals.push(e.continent);
  });

  const continent = capitals.slice(0, 24);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className={`${darkMode?'text-white':'text-black'} text-xl`}>Search your country</div>
        <div className="mt-6">
          <input
            type="text"
            className={`rounded-full ${darkMode?'bg-[#F5F5F5]':'bg-gray-100'} ${darkMode?'bg-opacity-10':'bg-opacity-100'} p-2 font-extralight bg-[url('/search.svg')] ${darkMode?'drop-shadow-none':'drop-shadow-lg'} bg-no-repeat ${darkMode?'text-gray-400':'text-gray-900'} bg-[center_left_0.5rem] bg-origin-padding pl-12`}
            placeholder="Search"
          />
        </div>
      </div>

      <div className={`${darkMode?'bg-black':'bg-gray-200'} ${darkMode?'text-white':'text-black'} md:w-4/5 md:mx-auto mx-[7%] my-10 text-sm p-5 drop-shadow-md `}>
        <div className="flex flex-row justify-around border-solid border-b-2 md:text-base text-[10px] border-gray-400 pb-4 ">
          <div>Country</div>
          <div className="md:ml-10 ml-5" >Density</div>
          <div>Religion</div>
          <div>Continent</div>
        </div>

        <div className="flex flex-row justify-around pt-4 md:text-base text-[9px] ">
          <div>
            {new_countries.map((e) => {
              return (
                <p key={new_countries.indexOf(e)} className=" flex flex-col">
                  {e}
                </p>
              );
            })}
          </div>
          <div>
            {density.map((e) => {
              return (
                <p key={density.indexOf(e)} className=" flex flex-col">
                  {e}
                </p>
              );
            })}
          </div>
          <div>
            {religion.map((e) => {
              return (
                <p key={religion.indexOf(e)} className=" flex flex-col">
                  {e}
                </p>
              );
            })}
          </div>
          <div>
            {continent.map((e) => {
              return (
                <p key={continent.indexOf(e)} className=" flex flex-col">
                  {e}
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
