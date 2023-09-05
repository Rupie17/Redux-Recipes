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
        /* The reducer should return a new state object with an updated searchTerm slice 
        set to the new term provided by action.payload. */
      case 'searchTerm/setSearchTerm':
        return action.payload
      case 'searchTerm/clearSearchTerm':
        return ''
      default: 
        return searchTerm;
    }
  }