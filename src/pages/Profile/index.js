import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Input } from "@rocketseat/unform";
import WrapperComponent from '../../Components'

import { updateProfileRequest } from '../../store/modules/user/actions'

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: theme.palette.primary
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  input: {
    width: '100%',
    height: 56,
    fontSize: '2vh',
    fontWeight: 500,
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  submitLogout: {
    backgroundColor: theme.palette.danger,
  },
}));

const Profile = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const loading = useSelector(state => state.auth.loading)
  const profile = useSelector(state => state.user.profile)

  const handleSubmit = (data) => {
    dispatch(updateProfileRequest(data))
  };

  return (
    <WrapperComponent>
      <Form initialData={profile} className={classes.form} onSubmit={handleSubmit}>
        <Input
          className={classes.input}
          name="name"
          placeholder="Name Completo"
        />
        <Input
          className={classes.input}
          name="email"
          placeholder="Digite seu e-mail"
        />
        <Input
          className={classes.input}
          name="password"
          type="password"
          placeholder="Digite sua senha atual"
        />
        <Input
          className={classes.input}
          name="password"
          type="password"
          placeholder="Digite sua nova senha"
        />
        <Input
          className={classes.input}
          name="password"
          type="password"
          placeholder="Confirme sua senha"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {loading ? 'Atualizando...' : 'Atualizar perfil!'}
        </Button>
      </Form>
    </WrapperComponent>
  )
}

export default Profile;
