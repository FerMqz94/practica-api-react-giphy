import React from "react";
import { Component } from "react";

export class SearchBar extends Component {
  
    constructor(props) {
    super(props);

  }

  render() {
    return (
      <form className="d-flex position-relative">
        <input
          className="form-control me-2 ps-4"
          type="search"
          placeholder="Buscar Gif"
          aria-label="Search"
          name="keyword"
          value={this.props.keyword}
          onChange={(event) => this.props.handleChangeKeyword(event)}
        />
        <span
        onClick={() => this.props.handleResetKeyword()}
          className="position-absolute top-50 rounded-circle bg-danger p-2"
          style={{
            left: "5px",
            width: "10px",
            height: "15px",
            cursos: "pointer",
          }}
        >
          x
        </span>
        <button className="btn btn-outline-success" type="submit">
          Buscar
        </button>
      </form>
    );
  }
}

export default SearchBar;
