import PropTypes from 'prop-types';

// == Import : local
// Style
import './ingredients.scss';

// == Composant
function Ingredients({ ingredients }) {
  return (
    <ul className="ingredients">
      {ingredients.map((item) => (
        <li className="ingredient" key={item.id}>
          <span className="quantity">
            {item.quantity} {item.unit}
          </span> {item.name}
        </li>
      ))}
    </ul>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Ingredients;
