import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import WrapperComponent from '../../../Components'
import RecipeForm from '../../../Components/RecipeForm'


const editRecipeInputs = [
  { id: 0, name: 'name', placeholder: 'Deseja mudar o nome da receita?' },
  { id: 1, name: 'introduction', placeholder: 'Alterar intrudoção?' },
  { id: 2, name: 'steps', placeholder: 'Mude os passos da receita, mas lembre-se de separa-los por ";"' },
  { id: 3, name: 'ingredients', placeholder: 'Novas idéias de ingredientes? Digite-os separando por ;' },
  { id: 4, name: 'preparation time', placeholder: 'Mudou de idéia sobre o tempo de preparo?' },
  { id: 5, name: 'quantity yield', placeholder: 'Quantas porções a receita realmente renderá?' },
  { id: 6, name: 'difficulty', placeholder: 'Repensou sobre a dificuldade?' },
]

const EditRecipes = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <WrapperComponent>
      <RecipeForm
        handleSubmit={handleSubmit}
        loading={loading}
        dispatch={dispatch}
        inputs={editRecipeInputs}
      />
    </WrapperComponent>
  )
};

export default EditRecipes;
