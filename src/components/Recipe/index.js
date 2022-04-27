// Import npm

// Import des data

import recipe from 'src/data/recipe';

// == Import locaux
import Header from 'src/components/Header';
import Ingredients from '../Ingredients';
import Steps from '../Steps';

import './styles.scss';

// console.log(recipe);
// == Composant

function Recipe() {
  return (
    <div className="recipe">
      <Header
        title={recipe.title}
        img={recipe.thumbnail}
        author={recipe.author}
        difficulty={recipe.difficulty}
      />
      <Ingredients ingredients={recipe.ingredients} />
      <Steps steps={recipe.instructions} />
    </div>
  );
}

// == Export
export default Recipe;
