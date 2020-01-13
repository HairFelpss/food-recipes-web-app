import React, { useState } from 'react';
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import WrapperComponent from '../../../Components'
import RecipeForm from '../../../Components/RecipeForm'
import api from '../../../services/api'

const editRecipeInputs = [
  { id: 0, name: 'name', placeholder: 'Deseja mudar o nome da receita?' },
  { id: 1, name: 'introduction', placeholder: 'Alterar intrudoção?' },
  { id: 2, name: 'steps', placeholder: 'Mude os passos da receita, mas lembre-se de separa-los por ";"' },
  { id: 3, name: 'ingredients', placeholder: 'Novas idéias de ingredientes? Digite-os separando por ;' },
  { id: 4, name: 'preparation time', placeholder: 'Mudou de idéia sobre o tempo de preparo?' },
  { id: 5, name: 'quantity yield', placeholder: 'Quantas porções a receita realmente renderá?' },
]

const EditRecipes = () => {
  const location = useLocation()
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
      const { id } = location.state
      if (file) {
        const photo = await savePhoto()
        data.photo_id = photo
      }
      await api.put(`/recipes/${id}`, data)

    } catch (err) {
    }
  }

  return (
    <WrapperComponent>
      <RecipeForm
        handleSubmit={handleSubmit}
        loading={loading}
        dispatch={dispatch}
        inputs={editRecipeInputs}
        handleChange={handleChange}
      />
    </WrapperComponent>
  )
};

export default EditRecipes;
