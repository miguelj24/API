# EXAMPLE HTML
  return (
    <div className="App">
      <h1>CRUD de Posts</h1>

      {/* Formulario para crear un nuevo post */}
      <div>
        <h2>Crear Nuevo Post</h2>
        <input 
          type="text" 
          placeholder="Título" 
          value={newPost.title} 
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} 
        />
        <textarea 
          placeholder="Contenido" 
          value={newPost.body} 
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })} 
        />
        <button onClick={createPost}>Crear Post</button>
      </div>

      {/* Formulario para editar un post */}
      {editPost.id && (
        <div>
          <h2>Editar Post</h2>
          <input 
            type="text" 
            placeholder="Título" 
            value={editPost.title} 
            onChange={(e) => setEditPost({ ...editPost, title: e.target.value })} 
          />
          <textarea 
            placeholder="Contenido" 
            value={editPost.body} 
            onChange={(e) => setEditPost({ ...editPost, body: e.target.value })} 
          />
          <button onClick={updatePost}>Actualizar Post</button>
        </div>
      )}

      {/* Lista de posts */}
      <div>
        <h2>Lista de Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => setEditPost(post)}>Editar</button>
              <button onClick={() => deletePost(post.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
