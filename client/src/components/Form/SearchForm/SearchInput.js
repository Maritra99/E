import React from "react";
import { useSearch } from "../../../Context/search";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../SearchForm/SearchInput.css"

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="d-flex search-form" role="search" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form-control me-2 search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
