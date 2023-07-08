const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "DELETE_POST":
      return {
        ...state,
        isLoading: false,
        hits: state.hits.filter(
          (curElem) => curElem.objectID !== action.payload
        ),
      };
    case "SEARCH":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE":
      let pageNumInc = state.page + 1;
      if (pageNumInc >= state.nbPages) {
        pageNumInc = 0;
      }
      return {
        ...state,
        page: pageNumInc,
      };
    case "PREV_PAGE":
      let pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
  }

  return state;
};

export default Reducer;
