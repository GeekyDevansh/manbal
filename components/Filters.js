import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { grey } from "@mui/material/colors";

const Filters = ({ darkMode, setFilter1, filter1, setFilter2, filter2 }) => {
  const handleChange1 = (event) => {
    setFilter1(event.target.value);
  };
  const handleChange2 = (event) => {
    setFilter2(event.target.value);
  };

  return (
    <>
      <div
        className={`${darkMode ? "bg-black" : "bg-gray-300"} ${
          darkMode ? "text-white" : "text-black"
        } rounded-sm drop-shadow-md md:mx-0 mx-[7%] `}
      >
        <div className="border-solid border-b-2 border-b-[#BDBDBD] w-full py-3 pl-4 text-sm">
          Filters
        </div>
        {darkMode ? (
          <div className="py-5 pl-4 text-xs font-extralight ">
            Religion
            <Box sx={{ minWidth: 120, marginRight: 10 }}>
              <FormControl fullWidth size="small">
                <Select
                  variant="outlined"
                  value={filter1}
                  onChange={handleChange1}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    color: grey[400],
                    fontSize: "small",
                    "& .MuiSvgIcon-root": {
                      color: grey[400],
                    },
                    backgroundColor: grey[900],
                    marginTop: 2,
                    borderRadius: 1,
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: grey[400],
                  }}
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={"Christianity"}>Christianity</MenuItem>
                  <MenuItem value={"Islam"}>Islam</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        ) : (
          <div className="py-5 pl-4 text-xs font-extralight ">
            Religion
            <Box sx={{ minWidth: 120, marginRight: 10 }}>
              <FormControl fullWidth size="small">
                <Select
                  variant="outlined"
                  value={filter1}
                  onChange={handleChange1}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    color: "black",
                    fontSize: "small",
                    "& .MuiSvgIcon-root": {
                      color: "black",
                    },
                    backgroundColor: grey[200],
                    marginTop: 2,
                    borderRadius: 1,
                  }}
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={"Christianity"}>Christianity</MenuItem>
                  <MenuItem value={"Islam"}>Islam</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        )}

        {darkMode ? (
          <div className="py-5 pl-4 text-xs font-extralight ">
            Continent
            <Box sx={{ minWidth: 120, marginRight: 10 }}>
              <FormControl fullWidth size="small">
                <Select
                  variant="outlined"
                  value={filter2}
                  onChange={handleChange2}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    color: grey[400],
                    fontSize: "small",
                    "& .MuiSvgIcon-root": {
                      color: grey[400],
                    },
                    backgroundColor: grey[900],
                    marginTop: 2,
                    borderRadius: 1,
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: grey[400],
                  }}
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={"Asia"}>Asia</MenuItem>
                  <MenuItem value={"Europe"}>Europe</MenuItem>
                  <MenuItem value={"Africa"}>Africa</MenuItem>
                  <MenuItem value={"Oceania"}>Oceania</MenuItem>
                  <MenuItem value={"North America"}>North America</MenuItem>
                  <MenuItem value={"South America"}>South America</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        ) : (
          <div className="py-5 pl-4 text-xs font-extralight ">
            Continent
            <Box sx={{ minWidth: 120, marginRight: 10 }}>
              <FormControl fullWidth size="small">
                <Select
                  variant="outlined"
                  value={filter2}
                  onChange={handleChange2}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    color: "black",
                    fontSize: "small",
                    "& .MuiSvgIcon-root": {
                      color: "black",
                    },
                    backgroundColor: grey[200],
                    marginTop: 2,
                    borderRadius: 1,
                  }}
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={"Asia"}>Asia</MenuItem>
                  <MenuItem value={"Europe"}>Europe</MenuItem>
                  <MenuItem value={"Africa"}>Africa</MenuItem>
                  <MenuItem value={"Oceania"}>Oceania</MenuItem>
                  <MenuItem value={"North America"}>North America</MenuItem>
                  <MenuItem value={"South America"}>South America</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
