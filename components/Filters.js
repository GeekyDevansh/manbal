import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { grey } from "@mui/material/colors";

const Filters = ({darkMode}) => {
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");

  const handleChange1 = (event) => {
    setFilter1(event.target.value);
  };
  const handleChange2 = (event) => {
    setFilter2(event.target.value);
  };

  return (
    <>
      <div className={`${darkMode?'bg-black':'bg-gray-200'} ${darkMode?'text-white':'text-black'} rounded-sm drop-shadow-md `}>
        <div className="border-solid border-b-2 border-b-[#BDBDBD] w-full py-3 pl-4 text-sm">
          Filters
        </div>
        {darkMode?(<div className="py-5 pl-4 text-xs font-extralight ">
          Filter
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
                  fontSize: 'small',
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
                  <em>Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>):(<div className="py-5 pl-4 text-xs font-extralight ">
          Filter
          <Box sx={{ minWidth: 120, marginRight: 10 }}>
            <FormControl fullWidth size="small">
              
              <Select
                variant="outlined"
                value={filter1}
                onChange={handleChange1}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  color: 'black',
                  fontSize: 'small',
                  "& .MuiSvgIcon-root": {
                    color: 'black',
                  },
                  backgroundColor: grey[200],
                  marginTop: 2,
                  borderRadius: 1,
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>)}
        
        {darkMode?(<div className="py-5 pl-4 text-xs font-extralight ">
          Filter
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
                  fontSize: 'small',
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
                  <em>Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>):(<div className="py-5 pl-4 text-xs font-extralight ">
          Filter
          <Box sx={{ minWidth: 120, marginRight: 10 }}>
            <FormControl fullWidth size="small">
              <Select
                variant="outlined"
                value={filter2}
                onChange={handleChange2}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  color: 'black',
                  fontSize: 'small',
                  "& .MuiSvgIcon-root": {
                    color: 'black',
                  },
                  backgroundColor: grey[200],
                  marginTop: 2,
                  borderRadius: 1,
                }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>)}
        
      </div>
    </>
  );
};

export default Filters;
