import { createContext, useContext, useReducer } from "react";
import { useNoteContext } from "./noteContext";

const FilterContext = createContext();
const useFilterContext = () => useContext(FilterContext);
// const { addToNotes }= useNoteContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "LABEL_HOME":
      return { ...state, label: { ...state.label, home: !state.label.home } };
    case "LABEL_SCHOOL":
      return {
        ...state,
        label: { ...state.label, school: !state.label.school },
      };
    case "LABEL_OFFICE":
      return {
        ...state,
        label: { ...state.label, office: !state.label.office },
      };

    case "PRIORITY_LOW":
      return {
        ...state,
        priority: { ...state.priority, low: !state.priority.low },
      };
    case "PRIORITY_MEDIUM":
      return {
        ...state,
        priority: { ...state.priority, medium: !state.priority.medium },
      };
    case "PRIORITY_HIGH":
      return {
        ...state,
        priority: { ...state.priority, urgent: !state.priority.urgent },
      };

    case "SORT_BY_DATE":
      return { ...state, sortByDate: action.payload };

    case "SORT_BY_PRIORITY":
      return { ...state, sortByPriority: action.payload };

    case "RESET_FILTER":
      return {
        ...state,
        label: {
          home: false,
          school: false,
          office: false,
        },
        priority: {
          low: false,
          medium: false,
          urgent: false,
        },
        sortByDate: null,
        sortByPriority: null,
      };

    case "FILTER_MODAL":
      return { ...state, filterModal: action.payload };

    default:
      return state;
  }
};

const FilterProvider = ({ children }) => {
  const {
    noteState: { addToNotes },
  } = useNoteContext();

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    filterModal: false,
    label: {
      home: false,
      school: false,
      office: false,
    },
    priority: {
      low: false,
      medium: false,
      urgent: false,
    },
    sortByDate: null,
    sortByPriority: null,
  });

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
    {children}
    </FilterContext.Provider>
);
};

export { useFilterContext, FilterProvider };
