import React, { useState, useEffect } from 'react';
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
  const dispatch = useDispatch()
  const location = useLocation()
  const [id] = useState(location.state.id)
  const [recipes, setRecipes] = useState([])
  const [file, setFile] = useState('')
  const [difficulty, setDifficulty] = useState(null)
  const [tags, setTags] = useState(null)
  const loading = useSelector(state => state.auth.loading)

  useEffect(() => {
    const loadRecipes = async () => {
      const recipesList = await api.get(`/recipes/${id}`)
      setRecipes(recipesList.data)
    }

    loadRecipes()
  }, [id]);

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSingleSelectChange = optionSelected => {
    const difficulty = optionSelected.label
    setDifficulty(difficulty)
  }

  const handleMultiSelectChange = optionsSelected => {
    const tags = optionsSelected.map(tag => tag.id)
    setTags(tags)
  }

  const savePhoto = async () => {
    const photo = new FormData()
    photo.append('file', file)

    if (photo.get('file')) {
      const response = await api.post("/files", photo)
      const { id } = response.data
      return id
    }

    return null
  }

  const createDataToPush = async (data) => {
    if (difficulty) {
      data.difficulty = difficulty
    }

    if (tags) {
      data.types = tags
    }

    const photo = await savePhoto()

    if (photo) {
      data.photo_id = photo
    }
    return data
  }

  const handleSubmit = async (data) => {
    try {
      const { id } = location.state
      const filteredData = await createDataToPush(data)
      if (id) {
        const response = await api.put(`/recipes/${id}`, filteredData)
        console.log(response.data)
      }
      //notification: something is wrong with the recipe data
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <WrapperComponent>
      <RecipeForm
        recipesToEdit={recipes}
        handleSubmit={handleSubmit}
        loading={loading}
        dispatch={dispatch}
        inputs={editRecipeInputs}
        handleChange={handleChange}
        handleSingleSelectChange={handleSingleSelectChange}
        handleMultiSelectChange={handleMultiSelectChange}
        singleSelect={setDifficulty}
        multiSelect={setTags}
      />
    </WrapperComponent>
  )
};

export default EditRecipes;
