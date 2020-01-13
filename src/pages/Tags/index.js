import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Input } from '@rocketseat/unform';
import WrapperComponent from '../../Components'
import TypeCard from '../../Components/TagCard'
import api from '../../services/api';
import Fab from '../../Components/Fab'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    paddingBottom: '3vh',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  input: {
    width: '50vw',
    height: 56,
    fontSize: '2vh',
    fontWeight: 500,
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    color: theme.palette.success.dark,
    backgroundColor: 'transparent',
  },
}));

const Tag = () => {
  const classes = useStyles();
  //const loading = useSelector(state => state.auth.loading)
  const [file, setFile] = useState('')
  const [tags, setTags] = useState([])

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  useEffect(() => { loadTags() }, []);

  const loadTags = async () => {
    const tagsList = await api.get('/types')
    setTags(tagsList.data)
  }

  const savePhoto = async () => {
    const photo = new FormData()
    photo.append('file', file)
    const tagPhoto = await api.post("/files", photo)
    const { id } = tagPhoto.data
    return id
  }

  const handleSubmit = async (data) => {
    const photo = await savePhoto()
    data.photo_id = photo
    await api.post('/types', data)
    try {
    } catch (err) {
    }
  }

  return (
    <WrapperComponent>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={4}
            className={classes.title}
          >
            <h1>Filtre todas as tags disponíveis</h1>
            <Input
              className={classes.input}
              name='name'
              placeholder='Qual tag deseja?'
              color="primary"
              autoComplete='off'
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Buscar
            </Button>
          </Grid>
          <Grid container justify="center" spacing={6}>
            {tags && tags.map(tag => (
              <Grid key={tag.id} item>
                <TypeCard props={tag} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Fab destiny='Deseja criar uma nova Tag?' handleChange={handleChange} handleSubmit={handleSubmit} />
    </WrapperComponent>
  )
};

export default Tag;
