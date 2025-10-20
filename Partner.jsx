import React from 'react';
import { useParams } from 'react-router-dom';

export default function Partner() {
  const { id } = useParams();
  return <h2>Detalhes do Parceiro ID: {id}</h2>;
}