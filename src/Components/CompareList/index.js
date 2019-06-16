import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Product } from './styles';
import { firebase } from '../../services/firebase';

const handleDelete = (id) => {
  firebase
    .firestore()
    .collection('products')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

const CompareList = ({ products }) => (
  <Container>
    {products.map(product => (
      <Product key={product.id}>
        <header>
          <img src={product.image} alt={product.image} />
        </header>
        <ul>
          <li>
            {product.id}
            <small> Código simples</small>
          </li>
          <li>
            {product.name}
            <small>Nome</small>
          </li>
          <li>
            {product.location}
            <small>Localização</small>
          </li>
          <li>
            {product.quantity}
            <small>Quantidade</small>
          </li>
          <li>
            {product.value}
            <small>Valor</small>
          </li>
          <li>
            {product.latestPurchase}
            <small> Última data de compra</small>
          </li>
        </ul>
        <Link to={`/edit/${product.key}`} className="edit">
          Update
        </Link>
        <button className="delete" onClick={handleDelete.bind(this, product.key)}>
          Delete
        </button>
      </Product>
    ))}
  </Container>
);

export default CompareList;
