import { createSlice } from "@reduxjs/toolkit";
import places from "../../constants/places.json"; 
import destination from "../../constants/destination.json"; 



const initialState = {
  data:[ ...places.countries], 
  filteredData: [],
  destination : [] ,
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    // This action stores the whole initial places data
    setInitialData: (state) => {
      state.data = places.countries;
      state.destination = destination;
    },
    // This action updates `filteredData` based on the selected ID
    filterByCountryId: (state, action) => {
      const countryData = state.data.find(
        (country) => country.id === action.payload
      );
      state.filteredData = countryData ? countryData.places : [];
    },
  },
});

export const { setInitialData, filterByCountryId } = placesSlice.actions;
export default placesSlice.reducer;
