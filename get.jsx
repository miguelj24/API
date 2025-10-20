#LOGICA
// GET
// App.js
import React, { useState, useEffect } from 'react';
import api from './axios';  // Importamos la configuración de Axios

function App() {
  const [posts, setPosts] = useState([]);   // Estado para guardar los posts
  const [newPost, setNewPost] = useState({ title: '', body: '' });  // Estado para el nuevo post
  const [editPost, setEditPost] = useState({ id: '', title: '', body: '' });  // Estado para editar el post

  // Leer los posts desde la API (GET)
  const fetchPosts = async () => {
    try {
      const response = await api.get('/posts');  // Hacemos una petición GET para obtener todos los posts
      setPosts(response.data);  // Guardamos los posts en el estado
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
