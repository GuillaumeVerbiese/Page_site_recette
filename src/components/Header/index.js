// Import : npm
import PropTypes from 'prop-types';

// == Import

import './header.scss';
// == Composants
function Header({
  title, img, author, difficulty,
}) {
  return (
    <header className="header">
      <img
        className="header-image"
        alt="recette"
        src={img}
      />
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        <p className="header-info">{author} - {difficulty}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

// == Export
export default Header;
