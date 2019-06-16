import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../../services/firebase';
import {
  Container, Product, Form, CreateDiv,
} from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Container>
        <Product>
          <header>
            <strong>Seja bem vindo!</strong>
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
              <button type="submit">Entrar</button>
            </Form>
            <Link to="register" className="add">
              Clique aqui para criar uma conta
            </Link>
          </CreateDiv>
        </Product>
      </Container>
    );
  }
}
