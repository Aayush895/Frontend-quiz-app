import PropTypes from 'prop-types'

const Container = ({children}) => {
  return (
    <div
      className="flex items-center justify-around border border-black h-[100vh]"
      id="intro-container"
    >
      {children}
    </div>
  );
};

Container.propTypes =  {
  children: PropTypes.element.isRequired
}

export default Container;
