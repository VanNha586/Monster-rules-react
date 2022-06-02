import "./search-box.styles.css";

function SearchBox({ placeholder, handleChange }) {
  return (
    <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
  );
}

export default SearchBox;
