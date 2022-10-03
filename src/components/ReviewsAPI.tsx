import React, { useState, useEffect } from "react";
import axios from 'axios';
import CustomerReviews from "./CustomerReviews";
import AddReviewForm from "./AddReviewForm";
import SearchRating from "./SearchRating";

type ReviewListProps = {
    name: String,
    rating: String,
    review: String,
};

const ReviewsAPI = () => {
  const [search, setSearch] = useState('');
  const [reviewsList, setReviewsList] = useState<ReviewListProps[]>([]);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://shielded-depths-40144.herokuapp.com/reviews'
      );
      setReviewsList(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPostRequest = async () => {
    try {
      const response = await axios.post(
        'https://shielded-depths-40144.herokuapp.com/reviews'
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const sendDeleteRequest = async () => {
    try {
      const response = await axios.delete(
        'https://shielded-depths-40144.herokuapp.com/reviews'
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  
    //adding of review - ... is a spread operator
    const handleAddReview = (name: string, rating: string, review: string) => {
        setReviewsList((prevState) => [
            ...prevState,
            { name: name, rating: rating, review: review },
        ]);
    };

    //filtering by the rating
    const filterReviews = (rating: string) => {
        if (rating) {
            setSearch(rating);
        } else {
            setSearch('');
        }
    };

    useEffect(() => {
      sendGetRequest();
    }, []);

    //displaying everyone in the app to user
    return (
        <div className='page-style-hk'>
            <h1 id="topics-hk">Reviews</h1>
            <AddReviewForm onAdd={handleAddReview} />
            <SearchRating filterRating={filterReviews} />
            {reviewsList
                .filter((rl) => rl.rating.toLowerCase().includes(search.toLowerCase()))
                .map((rl) => (
                    <CustomerReviews
                        name={rl.name}
                        rating={rl.rating}
                        review={rl.review} />
                ))}
        </div>
    );
};

export default ReviewsAPI;