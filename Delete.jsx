# DELETE
  // Eliminar un post (DELETE)
  const deletePost = async (id) => {
    try {
      await api.delete(`/posts/${id}`);  // Hacemos una petición DELETE para eliminar el post
      setPosts(posts.filter(post => post.id !== id));  // Eliminamos el post del estado
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // UseEffect para cargar los posts al inicio
  useEffect(() => {
    fetchPosts();  // Llamamos a la función para cargar los posts cuando el componente se monta
  }, []);
