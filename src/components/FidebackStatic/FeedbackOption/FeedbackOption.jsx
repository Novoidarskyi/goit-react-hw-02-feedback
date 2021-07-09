import PropTypes from "prop-types";
import css from './FeedbackOption.module.css'

const FeedbackOption = ({options, onLeaveFeedback }) => {
  return (
    <div>        
      <ul className={ css.listButton}>
          {Object.keys(options).map(key => (
            <li key={key} className={css.buttonItem}>
              <button type="button" name={key} onClick={onLeaveFeedback} className={ css.button}>
                {key[0].toUpperCase() + key.slice(1)}
              </button>
            </li>
          ))}
        </ul>
    </div>
  )
}

FeedbackOption.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}



export default FeedbackOption
