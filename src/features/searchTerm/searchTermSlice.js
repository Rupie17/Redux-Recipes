import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => (state = action.payload),
    clearSearchTerm: (state) => (state = ""),
  },
});

export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search;

export default searchSlice.reducer;


/*  OLD WAY.  ABOVE USES REDUX TOOLKIT

export const setSearchTerm = (term) => {
    return {
      type: 'searchTerm/setSearchTerm',
      payload: term
    }
  }
  
  export const clearSearchTerm = () => {
    return {
      type: 'searchTerm/clearSearchTerm'
    }; 
  }
  
  const initialSearchTerm = '';
  export const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
    switch(action.type) {
        The reducer should return a new state object with an updated searchTerm slice 
        set to the new term provided by action.payload.
      case 'searchTerm/setSearchTerm':
        return action.payload
      case 'searchTerm/clearSearchTerm':
        return ''
      default: 
        return searchTerm;
    }
  } */