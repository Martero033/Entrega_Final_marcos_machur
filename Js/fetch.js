const traerDatos = async () => {
    const lista = document.getElementById("lista");
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
  
      data.forEach((publicacion) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h2>ID: ${publicacion.id}</h2>
        <p>User: ${publicacion.userId}</p>
        <p>Titulo: ${publicacion.title}</p>
        <p>Publicación: ${publicacion.body}</p>
      `;
  
        lista.append(li);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  traerDatos();