import { DebounceInput } from "react-debounce-input";
import { Button } from "../styledComponents/ButtonStyled";
import { useSelector, useDispatch } from "react-redux";

import { searchValue } from "../reduxStore/searchValue";

function SearchButton() {
  const { search } = useSelector((state) => state);
  const dispatch = useDispatch();


  const handleReset = () => {
    onChange('')
  }


  const onChange = (e) => {
    dispatch(searchValue(e.target.value));
  };

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
            value={search}
            onChange={(e) => {e.persist(); //??
              onChange(e)}}
            placeholder="Search Movie"
          />
        </div>
        <div className="col-6">
          <Button
            type="reset"
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
