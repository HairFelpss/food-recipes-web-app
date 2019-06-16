import React, { Component } from 'react';
import { firebase, storage } from '../../services/firebase';
import { Container, Product, Form } from './styles';
import GlobalStyle from '../../styles/global';

class Create extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('products');
    this.state = {
      id: 0,
      name: '',
      quantity: 0,
      value: 0,
      image: '',
      img: null,
      latestPurchase: '',
      location: '',
    };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const {
      id, name, quantity, value, image, latestPurchase, location,
    } = this.state;

    this.ref
      .add({
        id,
        name,
        quantity,
        value,
        image,
        latestPurchase,
        location,
      })
      .then((docRef) => {
        this.setState({
          id: 0,
          name: '',
          quantity: 0,
          value: 0,
          image: '',
          latestPurchase: '',
          location: '',
        });
        this.props.history.push('/');
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  handleImage = (event) => {
    if (event.target.files[0]) {
      const img = event.target.files[0];
      this.setState(
        () => ({ img }),
        () => {
          const { img } = this.state;
          const uploadTask = storage.ref(`images/${img.name}`).put(img);
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              // progress function .....
            },
            (error) => {
              // error function .....
              console.log(error);
            },
            () => {
              // complete function
              storage
                .ref('images')
                .child(img.name)
                .getDownloadURL()
                .then((url) => {
                  console.log(url);
                  this.setState({ image: url });
                });
            },
          );
        },
      );
    }
  };

  render() {
    const { name, latestPurchase, location } = this.state;
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
                onChange={event => this.setState({ quantity: event.target.value })}
                placeholder="Quantity"
              />
            </div>
            <div>
              <h5>Value:</h5>
              <input
                type="text"
                name="value"
                onChange={event => this.setState({ value: event.target.value })}
                placeholder="Value"
              />
            </div>
            <div>
              <h5>Image:</h5>
              <input type="file" name="image" placeholder="Image" onChange={this.handleImage} />
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

export default Create;
