import React, { createContext, useState, useEffect } from "react";

import {fetchData} from "../utils/api"
export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchCategoryData(selectedCategories);
        console.log(selectedCategories);
    }, [selectedCategories]);

    const fetchCategoryData = (query) => {
        setLoading(true);
        fetchData(`${query}`).then(({contents}) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategories,
                setSelectedCategories,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};