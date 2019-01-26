import React from "react";

const SearchForm = props => {
  return (
    <form>
      <div
        className="form-inline"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        <input
          style={{ textAlign: "center", width: "93%" }}
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Book, Author, or Topic"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
