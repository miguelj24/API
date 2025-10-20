# CREATE
// CREATE
  // Crear un nuevo post (POST)
  const createPost = async () => {
    try {
      const response = await api.post('/posts', newPost);  // Hacemos una petición POST para crear un nuevo post
      setPosts([...posts, response.data]);  // Agregamos el nuevo post al estado
      setNewPost({ title: '', body: '' });  // Limpiamos los campos del formulario
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
