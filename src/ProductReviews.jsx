import { product, loggedInUser } from "../project-files/data";
import { useState } from "react";
import { useFormik } from "formik";
import { string, object } from "yup";

const ProductReviews = () => {
  const [productObj, setProductObj] = useState(product);

  const starFilled = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="star-filled"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const starOutline = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="star"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const renderStars = (starAmount) => {
    let stars = [];
    for (let index = 0; index < starAmount; index++) {
      stars.push(starFilled);
    }
    for (let index = 0; index < 5 - starAmount; index++) {
      stars.push(starOutline);
    }
    return stars.map((star, index) => {
      return <span key={index}>{star}</span>;
    });
  };

  const [isWritingReview, setIsWritingReview] = useState(false);

  const [productReviewed, setProductReviewed] = useState(false);

  const [starRated, setStarRated] = useState(true);

  const onSubmit = async (values, actions) => {
    const rating = starArray.filter((star) => {
      return star.props.className === "star-filled";
    }).length;

    if (rating > 0) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      setIsWritingReview(false);

      const newReview = {
        user: loggedInUser.name,
        starRating: rating,
        writtenReview: values.writtenReview,
        headline: values.headline,
      };

      productObj.reviews.splice(0, 0, newReview);

      setProductReviewed(true);
    } else {
      setStarRated(false);
    }
  };

  const reviewSchema = object({
    headline: string()
      .required("Please enter your headline")
      .min(4, "Must be at least 4 characters"),
    writtenReview: string()
      .required("Please enter your written review")
      .min(15, "Must be at least 15 characters"),
  });

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      headline: "",
      writtenReview: "",
    },
    validationSchema: reviewSchema,
    onSubmit,
  });

  const [starArray, setStarArray] = useState([
    starOutline,
    starOutline,
    starOutline,
    starOutline,
    starOutline,
  ]);

  return (
    <div className="reviews-container">
      {isWritingReview || (
        <div className="reviews-header">
          <h1>Customer reviews</h1>
          {productReviewed || (
            <button
              onClick={() => {
                setIsWritingReview(true);
              }}
            >
              Write a review
            </button>
          )}
        </div>
      )}
      {isWritingReview || (
        <div className="reviews">
          {productObj.reviews.map((review, index) => {
            return (
              <div className="review" key={index}>
                {review.headline && (
                  <img src="../project-files/assets/user-placeholder.png" />
                )}
                <div className="review-info">
                  <h3>{review.user}</h3>
                  <div className="stars">{renderStars(review.starRating)}</div>
                  <h4>{review.headline}</h4>
                  <p>{review.writtenReview}</p>
                  {review.user === loggedInUser.name && (
                    <div className="review-modify">
                      <h4
                        onClick={() => {
                          setProductObj({
                            reviews: productObj.reviews.splice(index, 1),
                            ...productObj,
                          });
                          setProductReviewed(false);
                        }}
                      >
                        delete
                      </h4>
                      <h4
                        onClick={() => {
                          setIsWritingReview(true);
                          values.headline = review.headline;
                          values.writtenReview = review.writtenReview;
                          setProductObj({
                            reviews: productObj.reviews.splice(index, 1),
                            ...productObj,
                          });
                        }}
                      >
                        edit
                      </h4>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {isWritingReview && (
        <div className="add-review">
          <h1>Add a review</h1>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="review-input-container">
              <h4>Overall rating</h4>
              <div>
                {starArray.map((star, index) => {
                  return (
                    <span
                      key={index}
                      onClick={() => {
                        for (let i = 0; i <= 4; i++) {
                          if (i <= index) {
                            setStarArray(starArray.splice(i, 0, starFilled));
                            setStarArray(
                              starArray.splice(starArray.indexOf(star), 1)
                            );
                            setStarArray([...starArray]);
                          } else {
                            setStarArray(starArray.splice(i, 0, starOutline));
                            setStarArray(
                              starArray.splice(starArray.indexOf(star), 1)
                            );
                            setStarArray([...starArray]);
                          }
                        }
                      }}
                    >
                      {star}
                    </span>
                  );
                })}
              </div>
              {starRated || (
                <span className="error">Please rate the product</span>
              )}
            </div>
            <div className="review-input-container">
              <label htmlFor="headline">Headline</label>
              <input
                value={values.headline}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="headline"
                name="headline"
                placeholder="What's most important to know?"
              />
              {errors.headline && touched.headline && (
                <span className="error">{errors.headline}</span>
              )}
            </div>
            <div className="review-input-container">
              <label htmlFor="writtenReview">Written review</label>
              <input
                value={values.writtenReview}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="writtenReview"
                name="writtenReview"
                placeholder="What did you like or dislike? What did you use this product for?"
              />
              {errors.writtenReview && touched.writtenReview && (
                <span className="error">{errors.writtenReview}</span>
              )}
            </div>
            <div
              className={`review-btn-container ${isSubmitting && "submitting"}`}
            >
              <button
                type="button"
                onClick={() => {
                  setIsWritingReview(false);
                }}
              >
                cancel
              </button>
              <button type="submit">add</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductReviews;
