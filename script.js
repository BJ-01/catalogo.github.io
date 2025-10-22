const productos = [
    { 
        nombre: 'amoguss',
        descripcion: 'e un amongus, tira facha',
        precio: 300.99,
        imagen: 'amongus.jpeg'
     },
     {
        nombre: 'kyrby',
        descripcion: ',e una bola rosada, toda linda, toda redonda.',
        precio: 350.99,
        imagen: 'kirby.jpeg'
     },
     {
        nombre: 'garchomp',
        descripcion: 'un dragon muy rudo, pero este e chikito',
        precio: 420.99,
        imagen: 'garchomp.jpeg'
        },
        {
        nombre: 'caballerito', 
        descripcion: 'Sin mente para pensar. Sin voluntad para romperse. Sin voz para gritar sufrimiento, nacido de dios y el vacio',
        precio: 149.99,
        imagen: 'caballerito.jpeg'
     }
    ];
    
    const catalogo = document.getElementById('catalogo');
    
    function crearTarjetaProducto(producto) {
        const card = document.createElement('div');
        card.className = 'producto-card';
    
        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
    
        const titulo = document.createElement('h2');
        titulo.textContent = producto.nombre;
    
        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;
    
        const precio = document.createElement('span');
        precio.className = 'precio';
        precio.textContent = `$${producto.precio.toFixed(2)}`;
    
        const boton = document.createElement('button');
        boton.className = 'btn-comprar';
        boton.textContent = 'Comprar';
    
        card.appendChild(imagen);
        card.appendChild(titulo);
        card.appendChild(descripcion);
        card.appendChild(precio);
        card.appendChild(boton);
    
        catalogo.appendChild(card);
        card.appendChild(precio);
        card.appendChild(boton);
    
        return card;
    }
    
    function renderizarCatalogo() {
        productos.forEach(producto => {
            const tarjeta = crearTarjetaProducto(producto);
            catalogo.appendChild(tarjeta);
        });
    }
    

    window.onload = renderizarCatalogo;
