const productos = [
    { 
        nombre: 'Juego de mesa-Operando',
        descripcion: 'Entretenido juego de mesa para juegar en familia.',
        precio: 300.99,
        imagen: 'juego1.jpg'
     },
     {
        nombre: 'Juego de mesa-Monopoly',
        descripcion: 'juego ideal para jugar en familia.',
        precio: 350.99,
        imagen: 'juego2.jpg'
     },
     {
        nombre: 'Juego de mesa-destreza',
        descripcion: 'increible juego de mesa para jugar con toda la familia',
        precio: 420.99,
        imagen: 'juego3.jpg'
        },
        {
        nombre: 'Juego de mesa-Boli Crono', 
        descripcion: 'Juego de mesa ideal para pasar el rato',
        precio: 149.99,
        imagen: 'juego4.jpg'
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