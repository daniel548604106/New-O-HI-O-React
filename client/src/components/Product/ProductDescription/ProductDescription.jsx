import React from 'react';
import Dropdown from '../../Global/Dropdown/Dropdown.jsx';
import PropTypes from 'prop-types';
import Stars from '../../Global/Stars/Stars.jsx';
import classes from './ProductDescription.module.scss';
const ProductDescription = ({ product, evaluationRef, productDescriptionRef, t, reviews }) => {
  return (
    <div style={{ width: '100%' }}>
      <div ref={productDescriptionRef} className="description">
        <Dropdown title="商品介紹" product={product} />
      </div>
      <div ref={evaluationRef} style={{ width: '100%' }}>
        <h2 className={classes.title}>{t('evaluation')}</h2>
        <hr />
        <div className={classes.feedbackRow}>
          <div>
            {reviews && reviews.length ? (
              reviews.map((review) => (
                <div key={review._id} className={classes.feedbackRow}>
                  <img src={review.user.picture} alt="avatar" />
                  <div>
                    <div className={classes.topRow}>
                      <p className={classes.name}>
                        <span>{review.user.name}</span> 在一週前所留下的評價
                      </p>
                      <div className={classes.starRow}>
                        <Stars score={review.score} />
                      </div>
                    </div>
                    <p>{review.comment.text}</p>
                    {review.comment.images.map((image) => (
                      <img className={classes.commentImage} key={image} src={image} alt="" />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className={classes.noReview}>目前尚無任何評價</div>
            )}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

ProductDescription.propTypes = {
  product: PropTypes.object,
  evaluationRef: PropTypes.func,
  productDescriptionRef: PropTypes.func,
  reviews: PropTypes.array,
  t: PropTypes.func,
};

export default ProductDescription;
