

const FeedbackOption = ({options, onLeaveFeedback }) => {
  return (
    <div>        
        <ul>
          {Object.keys(options).map(key => (
            <li key={key}>
              <button type="button" name={key} onClick={onLeaveFeedback}>
                {key[0].toUpperCase() + key.slice(1)}
              </button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default FeedbackOption
