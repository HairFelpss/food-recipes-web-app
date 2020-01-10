import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Input, Select, FileInput } from '@rocketseat/unform';
import drawerBgImage from "../../Images/bg.jpg";

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
  selectBtn: {
    backgroundImage: "url(" + drawerBgImage + ")",
    width: '10vw',
    marginTop: '0.5vh',
    padding: '0.5vh',
    opacity: 0.7,
  },
}));

const options = [
  { id: 'react', title: 'ReactJS' },
  { id: 'node', title: 'NodeJS' },
  { id: 'rn', title: 'React Native' },
];

const difficulty = [
  { id: 0, title: 'Fácil', },
  { id: 1, title: 'Médio', },
  { id: 2, title: 'Difícil', },
]

const RecipeForm = ({ handleSubmit, loading, dispatch, inputs }) => {
  const classes = useStyles()

  return (
    <Form className={classes.paper} onSubmit={handleSubmit}>
      {inputs.map(input => <Input multiline className={classes.input} name={input.name} placeholder={input.placeholder} autoComplete='off' />)}
      <FileInput
        name='photo'
        type='password'
        className={classes.fileBtn}
        placeholder='Troque apenas por uma foto melhor!'
      />
      <Select className={classes.selectBtn} name='difficulty' options={difficulty} />
      <Select className={classes.selectBtn} name='type' options={options} />
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
