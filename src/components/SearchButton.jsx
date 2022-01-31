import { DebounceInput } from "react-debounce-input";
import { Button } from "../styledComponents/ButtonStyled";
import { useDispatch } from "react-redux";
import { searchValue } from "../reduxStore/searchValue";

function SearchButton({ handleReset }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="row my-2 d-flex">
        <div className="col-6">
          <DebounceInput
            name="qInput"
            type="text"
            id="search"
            className="form-control"
            debounceTimeout={300}
            onChange={(e) => dispatch(searchValue(e.target.value))}
            placeholder="Search Movie"
          />
        </div>
        <div className="col-6">
          <Button
            type="button"
            onClick={handleReset}
            className="btn-outline-secondary"
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}
export default SearchButton;
