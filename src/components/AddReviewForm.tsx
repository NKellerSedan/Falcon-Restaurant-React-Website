import axios from 'axios';
import { SetStateAction, useState } from 'react';
import '../styles/Reviews.css'

//declaring AddProps with onAdd function
type AddProps = {
  onAdd: (name: string, rating: string, reviews: string) => void;
}

const stars = [
  {
    label: "5 Stars",
    value: "5",
    rating: "5"
  },
  {
    label: "4 Stars",
    value: "4",
    rating: "4"
  },
  {
    label: "3 Stars",
    value: "3",
    rating: "3"
  },
  {
    label: "2 Stars",
    value: "2",
    rating: "2"
  },
  {
    label: "1 Star",
    value: "1",
    rating: "1"
  }
];

//declaring JSX element
const AddReviewForm = (props: AddProps) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  //you automatically get event object just like event listeners in js
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setName(e.target.value);
  };

  //you automatically get event object just like event listeners in js
  const handleRatingChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    console.log(e);
    setRating(e.target.value);
  };

  //you automatically get event object just like event listeners in js
  const handleReviewChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    console.log(e);
    setReview(e.target.value);
  };

  //submits the form and updates the review list, resets the labels to empty
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    //by default it will submit the form, so prevent
    e.preventDefault();
    props.onAdd(name, rating, review);
    setName('');
    setRating('');
    setReview('');

    let data = {
      name: name,
      rating: rating,
      review: review
    }

      try {
        const response = await axios.post(
          'https://shielded-depths-40144.herokuapp.com/reviews', data
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
  };

  return (
    //displaying the form
    <div className="reviews-form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend id='add-r-title'>Add a Review</legend>
          {/* <two way data binding with value attribute /> */}
          <span>Name: </span>
          <input
            type='text'
            value={name}
            onChange={handleNameChange}
            placeholder='Enter your Name'
            required
          />
          <br></br><br></br>
          <span>Rating: </span>
          <select value={rating} onChange={handleRatingChange} required>
            <option value="">Select Rating</option>
            {stars.map((star) => (
              <option value={star.value}>{star.label}</option>
            ))}
          </select>
          <br></br><br></br>
          <span>Review: </span>
          <textarea className='reviews-textarea'
            value={review}
            onChange={handleReviewChange}
            placeholder='Enter your Review (460 characters max)'
            maxLength={460}
            required
          />
          <br></br>
          <div id='review-submit-b'>
          <button>Submit Review</button>
          </div>
        </fieldset>
        <hr></hr>
        <br></br>
      </form>
    </div>
  );
};

export default AddReviewForm;