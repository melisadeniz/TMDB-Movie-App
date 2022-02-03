import { Button, ButtonGroup } from "react-bootstrap";
// import {  useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addGenres, resetData } from "../reduxStore/SortFilter";

export default function SortFilter() {
  return (
    <>
      <div className="container mt-3">
        <select
          className="form-select"
          aria-label="Default select example"
          // onChange={(e) => setSort((e.target.value))}
        >
          <option>Sort By</option>
          <option value="original_title.asc">A to Z by The Title</option>
          <option value="original_title.desc">Z to A by The Title</option>
          <option value="popularity.asc">Increasing by Popularity</option>
          <option value="popularity.desc">Decreasing by Popularity</option>
          <option value="release_date.gte">Increasing by Release Date</option>
          <option value="release_date.lte">Decreasing by Release Date</option>
        </select>
        <div className=" d-flex flex-column">
          <h3 className="mt-3">Filter By</h3>
          <label htmlFor="text" className="mt-3">
            From:
          </label>
          <input
            type="date"
            //  onChange={(e) => setDateTo(e.target.value)}
          />
          <label htmlFor="text" className="mt-3">
            To:
          </label>
          <input
            type="date"
            // onChange={(e) => setDateFrom(e.target.value)}
          />
        </div>

        <ButtonGroup size="sm" className="mt-2">
          <Button
            className="m-2"
            variant="secondary"
            // onClick={(e) => setGenre_id(e.target.value)}
            value={28}
          >
            Action
          </Button>
          <Button
            className="m-2"
            variant="secondary"
            // onClick={(e) => setGenre_id(e.target.value)}
            value={12}
          >
            Adventure
          </Button>
          <Button
            className="m-2"
            variant="secondary"
            // onClick={(e) => setGenre_id(e.target.value)}
            value={35}
          >
            Comedy
          </Button>
        </ButtonGroup>
        <ButtonGroup size="sm">
          <Button className="m-2" variant="secondary" value={10749}>
            Romance
          </Button>
          <Button
            className="m-2"
            variant="secondary"
            // onClick={(e) => setGenre_id(e.target.value)}
            value={18}
          >
            Drama
          </Button>
          <Button
            className="m-2"
            variant="secondary"
            //  onClick={(e) => setGenre_id(e.target.value)}
            value={80}
          >
            Crime
          </Button>
        </ButtonGroup>
        <ButtonGroup size="sm">
          <Button
            className="m-2"
            variant="secondary"
            // onClick={(e) => setGenre_id(e.target.value)}
            value={27}
          >
            Horror
          </Button>
          <Button
            className="m-2"
            variant="secondary"
            //  onClick={(e) => setGenre_id(e.target.value)}
            value={878}
          >
            Science Fiction
          </Button>
          <Button
            className="m-2"
            variant="secondary"
            // onClick={(e) => setGenre_id(e.target.value)}
            value={10752}
          >
            War
          </Button>
        </ButtonGroup>

        <Button
          className="m-2"
          variant="secondary"
          size="sm"
          // onClick={() => dispatch(addGenres(data)) }
        >
          Search
        </Button>
        <Button
          className="m-2"
          variant="secondary"
          size="sm"
          // onClick={() => dispatch(resetData(data)) }
        >
          Reset
        </Button>
      </div>
    </>
  );
}
