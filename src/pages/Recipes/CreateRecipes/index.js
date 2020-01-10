import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import WrapperComponent from '../../../Components'
import RecipeForm from '../../../Components/RecipeForm'

const addRecipeInputs = [
  { id: 0, name: 'name', placeholder: 'Qual nome da receita?' },
  { id: 1, name: 'introduction', placeholder: 'Uma breve intrudoção' },
  { id: 2, name: 'steps', placeholder: 'Diga os passos da receita separados por ";"' },
  { id: 3, name: 'ingredients', placeholder: 'Liste os ingredientes da receita separados por ";"' },
  { id: 4, name: 'preparation time', placeholder: 'Qual de preparo da receita' },
  { id: 5, name: 'quantity yield', placeholder: 'Quantas porções a receita renderá' },
]

const CreateRecipes = () => {
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
        inputs={addRecipeInputs}
      />
    </WrapperComponent>
  )
};

export default CreateRecipes;
