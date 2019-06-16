import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../../services/firebase';
import { Container, CreateDiv, Form } from './styles';
import logo from '../../assets/logo.png';

import CompareList from '../../Components/CompareList';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('products');
    this.unsubscribe = null;
    this.state = {
      products: [],
      productName: '',
      allProducts: {},
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  onCollectionUpdate = (querySnapshot) => {
    const newProducts = [];
    querySnapshot.forEach((doc) => {
      const {
        image, latestPurchase, location, name, quantity, value, id,
      } = doc.data();
      newProducts.push({
        key: doc.id,
        doc, // DocumentSnapshot
        image,
        latestPurchase,
        location,
        name,
        quantity,
        value,
        id,
      });
    });
    this.setState(
      {
        allProducts: { newProducts },
      },
      () => {
        this.handleState();
      },
    );
  };

  handleState = () => {
    const productsToDeploy = Object.values(this.state.allProducts.newProducts);
    this.setState({ products: [...productsToDeploy] });
  };

  searchProduct = (event) => {
    event.preventDefault();
  };

  render() {
    const { products, productName } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form onSubmit={this.searchProduct}>
          <input
            type="text"
            placeholder="digite o nome do produto"
            value={productName}
            onChange={event => this.setState({ productName: event.target.value })}
          />
          <button type="submit">Ok</button>
        </Form>
        <CreateDiv>
          <Link to="create" className="add">
            Clique aqui para adicionar um novo produto...
          </Link>
        </CreateDiv>
        <CompareList products={products} />
      </Container>
    );
  }
}
