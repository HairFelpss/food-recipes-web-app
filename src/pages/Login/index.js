import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    color: theme.palette.primary
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%' // Fix IE 11 issue.
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
    backgroundColor: 'transparent'
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail valido')
    .required('email obrigatorio'),
  password: Yup.string().required('Senha obrigatoria')
});

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '80vh' }}
    >
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className={classes.title} component="h1" variant="h5">
            Welcome to Native Code
          </Typography>
          <Form
            schema={schema}
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <Input
              className={classes.input}
              name="email"
              placeholder="Digite seu e-mail"
            />
            <Input
              className={classes.input}
              name="password"
              type="password"
              placeholder="Digite sua senha"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {loading ? 'Carregando...' : 'Acessar'}
            </Button>
          </Form>
        </div>
      </Container>
    </Grid>
  );
};

export default Login;
