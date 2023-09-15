import React, { useEffect, useState } from "react";
//axios
import axios from "axios";
//redux
import { useDispatch } from "react-redux";
import { changeSearch } from "../../store/slice/searchSlice";
//styles
import "./scss/search.scss";
//icons
import searIcon from "../../assets/icons/search.svg";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const data = e.target.value;

    setSearch(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    axios
      .get(`/api/search?query=${search}`)
      .then((response) => {
        setSearch('')
        dispatch(changeSearch(response.data));
      })
      .catch(() => alert("No tenemos ese vino en nuestro catalogo"));
  };

  return (
    <form className="search__main" onSubmit={handleSubmit}>
      <div className="search__cont_btn">
        <img src={searIcon} alt="search" />
      </div>
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
