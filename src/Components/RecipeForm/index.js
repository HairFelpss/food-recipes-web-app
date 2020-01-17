import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Input } from '@rocketseat/unform';
import drawerBgImage from "../../Images/bg.jpg";
import Select from '../Select/index'
import api from '../../services/api';


const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    color: theme.palette.primary
  },
  form: {
    width: '100%' // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  input: {
    width: '100%',
    height: '10vh',
    fontSize: '2vh',
    fontWeight: 500,
    outline: 'none',
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
  fileBtn: {
    backgroundImage: "url(" + drawerBgImage + ")",
    color: theme.palette.text.secondary,
    fontWeight: 800,
    opacity: 0.7,
    cursor: 'pointer',
    minHeight: '4vh',
    border: `2px solid ${theme.palette.quinary}`,
    borderRadius: 10,
    fontSize: '1.5vh',
    margin: '1vh',
  },
}));

const difficulty = [
  { value: 'Fácil', label: 'Fácil', },
  { value: 'Médio', label: 'Médio', },
  { value: 'Difícil', label: 'Difícil', },
]

const RecipeForm = ({
  handleSubmit,
  loading,
  inputs,
  handleChange,
  handleSingleSelectChange,
  handleMultiSelectChange,
  recipesToEdit,
}) => {
  const classes = useStyles()
  const [options, setOptions] = useState([])

  const loadOptions = async () => {
    const response = await api.get('/types')
    const filteredResponse = response.data.map(option => {
      option.label = option.name
      option.value = option.name
      return option
    })
    setOptions(filteredResponse)
  }

  useEffect(() => {
    loadOptions()
  }, [])

  if (recipesToEdit) {
    const { id, pictures, difficulty: currentDifficulty, types, ...data } = recipesToEdit

    return (
      <Form className={classes.paper} initialData={data} onSubmit={handleSubmit}>
        {Object.entries(data).map((input, index) =>
          <Input
            multiline
            className={classes.input}
            name={input[0]}
            key={index}
            autoComplete='off'
          />
        )}
        <input
          type='file'
          name='photo'
          className={classes.fileBtn}
          onChange={handleChange}
          accept='image/*'
        />
        <Select
          name='difficulty'
          single={true}
          options={difficulty}
          handleOnChange={handleSingleSelectChange}
        />
        <Select
          name='types'
          single={false}
          options={options}
          handleOnChange={handleMultiSelectChange}
        />

        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          {loading ? 'Carregando...' : 'Salvar'}
        </Button>
      </Form>
    )
  }

  return (
    <Form className={classes.paper} onSubmit={handleSubmit}>
      {inputs.map(input =>
        <Input
          multiline
          className={classes.input}
          name={input.name}
          key={input.id}
          placeholder={input.placeholder}
          autoComplete='off'
        />
      )}
      <input
        type='file'
        name='photo'
        className={classes.fileBtn}
        onChange={handleChange}
        accept='image/*'
      />
      <Select single={true} name='difficulty' options={difficulty} handleOnChange={handleSingleSelectChange} />
      <Select single={false} name='types' options={options} handleOnChange={handleMultiSelectChange} />

      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
      >
        {loading ? 'Carregando...' : 'Salvar'}
      </Button>
    </Form>
  )
};

export default RecipeForm;
