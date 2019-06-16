import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { firebase } from '../../services/firebase';
import {
  Container, Product, Form, CreateDiv,
} from './styles';
import GlobalStyle from '../../styles/global';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      redirect: false,
    };
  }

  onSubmit = async (event) => {
    if (this.state.password === this.state.confirmPassword) {
      event.preventDefault();
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.setState({ redirect: true });
        })
        .catch((error) => {
          // Handle Errors here.
          console.log(error);
        });
    } else {
      alert('suas senhas não batem!');
    }
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <GlobalStyle />
        <Product>
          <header>
            <strong>Crie sua conta conosco!</strong>
          </header>
          <CreateDiv>
            <Form onSubmit={this.onSubmit}>
              <div>
                <h5>Email:</h5>
                <input
                  type="text"
                  name="email"
                  onChange={event => this.setState({ email: event.target.value })}
                  placeholder="Digite aqui seu email"
                />
              </div>
              <div>
                <h5>Senha:</h5>
                <input
                  type="password"
                  name="password"
                  onChange={event => this.setState({ password: event.target.value })}
                  placeholder="Digite aqui sua senha"
                />
              </div>
              <div>
                <h5>Senha:</h5>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={event => this.setState({ confirmPassword: event.target.value })}
                  placeholder="Confirme sua senha"
                />
              </div>
              <button type="submit">Entrar</button>
            </Form>
          </CreateDiv>
        </Product>
      </Container>
    );
  }
}
