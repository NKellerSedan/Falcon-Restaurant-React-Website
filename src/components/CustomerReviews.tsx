//declaring ReviewProps with properties and functions
type ReviewsProps = {
  name: String;
  rating: String;
  review: String;
}

//props are arguements/properties that are passed to the React components
const CustomerReviews = (props: ReviewsProps) => {
  return (
    <div className="reviews-list">
      <br></br>
      <table>
        <tr>Name: {props.name}</tr>
        <tr>Rating: {props.rating}</tr>
        <tr>Review: {props.review}</tr>
      </table>
    </div>
  );
};

export default CustomerReviews;