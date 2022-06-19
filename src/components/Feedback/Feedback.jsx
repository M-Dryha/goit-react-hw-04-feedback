import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackOptions = ({ options, onSelect }) => {
  return options.map(button => {
    return (
      <button
        className={s.button}
        key={button}
        type="button"
        name={button}
        onClick={onSelect}
      >
        {button}
      </button>
    );
  });
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onSelect: PropTypes.func.isRequired,
};

export default FeedbackOptions;
