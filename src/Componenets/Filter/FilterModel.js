import React, { useState } from "react";
import { MdClose, MdOutlineSort, MdOutlineFilterAlt } from "react-icons/md";
import { useFilterContext } from "../../Context/FilterContext";
import "./FilterModal.css";

function FilterModal() {
    const { filterState, filterDispatch } = useFilterContext();
    const { filterModal, label, priority } = filterState;
    const { low, medium, urgent } = priority;
    const { home, school, office } = label;
    const [key, setKey] = useState(0);

    return (
        <div
            style={{ display: filterModal ? "block" : "none" }}
            onClick={() => {
                filterDispatch({ type: "FILTER_MODAL", payload: false });
            }}
            className="modal-container-filter"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                id="myModal"
                className=" filter-modal modal"
            >
                <div className="modal-content">
                    <MdClose
                        onClick={() => {
                            filterDispatch({ type: "FILTER_MODAL", payload: false });
                        }}
                        className="close"
                    ></MdClose>

                    <div className="modal-body">
                        <p className="modal-title">
                            <MdOutlineFilterAlt />
                            FILTER BY
                        </p>
                        <ul className="flex-row-center flex-start">
                            <p className="modal-title">Tags</p>
                            <li>
                                <input
                                    onChange={() => filterDispatch({ type: "LABEL_OFFICE" })}
                                    checked={office}
                                    type="checkbox"
                                    name="office"
                                />
                                <label htmlFor="office" className="label">
                                    office
                                </label>
                            </li>
                            <li>
                                <input
                                    onChange={() => filterDispatch({ type: "LABEL_SCHOOL" })}
                                    checked={school}
                                    type="checkbox"
                                    name="school"
                                />
                                <label htmlFor="school" className="label">
                                    school
                                </label>
                            </li>
                            <li>
                                <input
                                    onChange={() => filterDispatch({ type: "LABEL_HOME" })}
                                    checked={home}
                                    type="checkbox"
                                    name="home"
                                />
                                <label htmlFor="home" className="label">
                                    home
                                </label>
                            </li>
                        </ul>

                        <ul className="flex-row-center flex-start">
                            <p className="modal-title">Priority</p>
                            <li>
                                <input
                                    onChange={() => filterDispatch({ type: "PRIORITY_LOW" })}
                                    checked={low}
                                    value="3"
                                    type="checkbox"
                                    name="low"
                                />
                                <label htmlFor="low" className="label">
                                    low
                                </label>
                            </li>
                            <li>
                                <input
                                    onChange={() => filterDispatch({ type: "PRIORITY_MEDIUM" })}
                                    checked={medium}
                                    type="checkbox"
                                    name="medium"
                                />
                                <label htmlFor="medium" className="label">
                                    medium
                                </label>
                            </li>
                            <li>
                                <input
                                    onChange={() => filterDispatch({ type: "PRIORITY_HIGH" })}
                                    checked={urgent}
                                    type="checkbox"
                                    name="high"
                                />
                                <label htmlFor="high" className="label">
                                    high
                                </label>
                            </li>
                        </ul>
                        <hr />
                        <p className="modal-title">
                            <MdOutlineSort />
                            SORT BY:
                        </p>
                        <ul className="flex-row-center flex-start">
                            <p className="modal-title">Date</p>
                            <li>
                                <input
                                    onChange={() =>
                                        filterDispatch({ type: "SORT_BY_DATE", payload: true })
                                    }
                                    // checked={sortByLatestDate}
                                    name="sortby"
                                    type="radio"
                                />
                                <label htmlFor="low" className="label">
                                    Latest
                                </label>
                            </li>
                            <li>
                                <input
                                    onChange={() =>
                                        filterDispatch({ type: "SORT_BY_DATE", payload: false })
                                    }
                                    // checked={sortByOldestDate}
                                    name="sortby"
                                    type="radio"
                                />
                                <label htmlFor="medium" className="label">
                                    Oldest
                                </label>
                            </li>
                        </ul>
                        <ul className="flex-row-center flex-start">
                            <p className="modal-title">Priority</p>
                            <li>
                                <input
                                    onChange={() =>
                                        filterDispatch({
                                            type: "SORT_BY_PRIORITY",
                                            payload: true,
                                        })
                                    }
                                    // checked={sortByPriority}
                                    name="sort"
                                    type="radio"
                                />
                                <label htmlFor="low" className="label">
                                    Low To High
                                </label>
                            </li>
                            <li>
                                <input
                                    onChange={() =>
                                        filterDispatch({
                                            type: "SORT_BY_PRIORITY",
                                            payload: false,
                                        })
                                    }
                                    // checked={sortByPriority}
                                    name="sort"
                                    type="radio"
                                />
                                <label htmlFor="medium" className="label">
                                    High To Low
                                </label>
                            </li>
                        </ul>

                        <div className="modal--btn">
                            <button
                                onClick={() => {
                                    filterDispatch({ type: "FILTER_MODAL", payload: false });
                                }}
                                className="asidebar-btn apply-filter-btn"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { FilterModal };