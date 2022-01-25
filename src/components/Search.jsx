import { DebounceInput } from "react-debounce-input";

function Search({ search, setSearch, handleReset }) {
  
  return (
    <>
<div className="row my-3 d-flex">
<div className="col-6">
    <DebounceInput
       name="qInput"
       type="text"
       id="search"
       className="form-control"
       debounceTimeout={300}
       value={search}
       onChange={event => setSearch(event.target.value)}
       placeholder="Search Movie"
     />
  </div>
    <div className="col-6">
     <button type="button" onClick={handleReset} className="btn btn-light btn-outline-secondary">Reset</button>
   </div>
  </div>
 </>
 )}
export default Search