import React, { useState } from 'react';

type SearchRatingProps = {
  filterRating: (rating: string) => void
}

const stars = [
  {
    label: "All Ratings",
    value: ""
  },
  {
    label: "1 Star",
    value: "1",
    rating: "1"
  },
  {
    label: "2 Stars",
    value: "2",
    rating: "2"
  },
  {
    label: "3 Stars",
    value: "3",
    rating: "3"
  },
  {
    label: "4 Stars",
    value: "4",
    rating: "4"
  },
  {
    label: "5 Stars",
    value: "5",
    rating: "5"
  }
];

//search by rating for reviews
const Search = (props: SearchRatingProps) => {
  const [searchRating, setSearchRating] = useState("");

  function handleChangeSelect(e: React.ChangeEvent<HTMLSelectElement>): void {
    setSearchRating(e.target.value);
    props.filterRating(e.target.value);
  }

  return (
    <div id="searchbar">
      Search by Rating: &nbsp;

      <select onChange={(e) => handleChangeSelect(e)} value={searchRating} >
        {stars.map((star) => (
          <option value={star.value}>{star.label}</option>))}
      </select>
    </div>
  );
};

export default Search;