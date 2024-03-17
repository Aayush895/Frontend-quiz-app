import PropTypes from 'prop-types'

const ProgressBar = ({progressFiller}) => {
  return (
    <div className="h-2 bg-white rounded">
      <div className="bg-purple-700 h-2 rounded ease-in-out duration-300" style={{width: `${progressFiller}%`}}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  progressFiller: PropTypes.number.isRequired
}
export default ProgressBar