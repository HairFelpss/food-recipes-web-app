import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import WrapperComponent from '../../../Components'
import RecipeForm from '../../../Components/RecipeForm'
import api from '../../../services/api';

const addRecipeInputs = [
  { id: 0, name: 'name', placeholder: 'Qual nome da receita?' },
  { id: 1, name: 'introduction', placeholder: 'Uma breve intrudoção' },
  { id: 2, name: 'steps', placeholder: 'Diga os passos da receita separados por ";"' },
  { id: 3, name: 'ingredients', placeholder: 'Liste os ingredientes da receita separados por ";"' },
  { id: 4, name: 'preparation_time', placeholder: 'Qual de preparo da receita' },
  { id: 5, name: 'qt_yield', placeholder: 'Quantas porções a receita renderá' },
]

const CreateRecipes = () => {
  const dispatch = useDispatch()
  const [file, setFile] = useState('')
  const loading = useSelector(state => state.auth.loading)

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }
  const savePhoto = async () => {
    const photo = new FormData()
    photo.append('file', file)
    const recipePhoto = await api.post("/files", photo)
    const { id } = recipePhoto.data
    return id
  }

  const handleSubmit = async (data) => {
    try {
      const photo = await savePhoto()
      data.photo_id = photo
      await api.post('/recipes', data)

    } catch (err) {
    }
  }

  return (
    <WrapperComponent>
      <RecipeForm
        handleSubmit={handleSubmit}
        loading={loading}
        dispatch={dispatch}
        inputs={addRecipeInputs}
        handleChange={handleChange}
      />
    </WrapperComponent>
  )
};

export default CreateRecipes;
