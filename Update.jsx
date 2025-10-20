# PDATE
  // Actualizar un post (PUT)
  const updatePost = async () => {
    try {
      const response = await api.put(`/posts/${editPost.id}`, editPost);  // Hacemos una petición PUT para actualizar un post
      const updatedPosts = posts.map(post => post.id === editPost.id ? response.data : post);  // Actualizamos el post en el estado
      setPosts(updatedPosts);  // Establecemos los posts actualizados
      setEditPost({ id: '', title: '', body: '' });  // Limpiamos los campos del formulario
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };
