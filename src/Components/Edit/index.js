import React, { Component } from 'react';
import { firebase } from '../../services/firebase';
import { Container, Product, Form } from './styles';
import GlobalStyle from '../../styles/global';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      name: '',
      quantity: 0,
      value: 0,
      image: '',
      latestPurchase: '',
      location: '',
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection('products')
      .doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const product = doc.data();
        this.setState({
          key: doc.id,
          name: product.name,
          quantity: product.quantity,
          value: product.value,
          image: product.image,
          latestPurchase: product.latestPurchase,
          location: product.location,
          id: product.id,
        });
      } else {
        console.log('No such document!');
      }
    });
  }

  onChange = (event) => {
    const { state } = this;
    state[event.target.name] = event.target.value;
    this.setState({ product: state });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      name, quantity, value, image, latestPurchase, location, id,
    } = this.state;

    const updateRef = firebase
      .firestore()
      .collection('products')
      .doc(this.state.key);
    updateRef
      .set({
        name,
        quantity,
        value,
        image,
        latestPurchase,
        location,
        id,
      })
      .then((docRef) => {
        this.setState({
          key: '',
          name: '',
          quantity: '',
          value: '',
          image: '',
          latestPurchase: '',
          location: '',
          id: '',
        });
        this.props.history.push('/');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  render() {
    const {
      name, quantity, value, image, latestPurchase, location, id,
    } = this.state;
    return (
      <Container>
        <GlobalStyle />
        <Product>
          <header>
            <strong>ADD PRODUCTS</strong>
          </header>
          <Form onSubmit={this.onSubmit}>
            <div>
              <h5>ID:</h5>
              <input
                type="text"
                name="id"
                value={id}
                onChange={event => this.setState({ id: event.target.value })}
                placeholder="Codigo simples"
              />
            </div>
            <div>
              <h5>Name:</h5>
              <input
                type="text"
                name="name"
                value={name}
                onChange={event => this.setState({ name: event.target.value })}
                placeholder="Name"
              />
            </div>
            <div>
              <h5>Quantity:</h5>
              <input
                type="text"
                name="quantity"
                value={quantity}
                onChange={event => this.setState({ quantity: event.target.value })}
                placeholder="Quantity"
              />
            </div>
            <div>
              <h5>Value:</h5>
              <input
                type="text"
                name="value"
                value={value}
                onChange={event => this.setState({ value: event.target.value })}
                placeholder="Value"
              />
            </div>
            <div>
              <h5>Image:</h5>
              <input
                type="text"
                name="image"
                value={image}
                onChange={event => this.setState({ image: event.target.value })}
                placeholder="Image"
              />
            </div>
            <div>
              <h5>Latest Purchase:</h5>
              <input
                type="text"
                name="latestPurchase"
                value={latestPurchase}
                onChange={event => this.setState({ latestPurchase: event.target.value })}
                placeholder="Latest Purchase"
              />
            </div>
            <div>
              <h5>Location:</h5>
              <input
                type="text"
                name="location"
                value={location}
                onChange={event => this.setState({ location: event.target.value })}
                placeholder="Location"
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Product>
      </Container>
    );
  }
}

export default Edit;
