import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Parceiros DSE</h1>
      <button onClick={() => navigate('/dashboard')}>Entrar</button>
    </div>
  );
}