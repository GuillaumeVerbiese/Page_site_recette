// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
// Style
import './steps.scss';

// == Composant
function Steps({ steps }) {
  console.log(steps);

  const liElements = steps.map((item) => (
    <li className="step" key={item}>
      {item}
    </li>
  ));

  console.log(liElements);

  return (
    <ol className="steps">
      {liElements}
    </ol>
  );
}

Steps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// == Export
export default Steps;
