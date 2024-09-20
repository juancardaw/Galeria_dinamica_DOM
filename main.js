const productos = [
    {
      nombre: 'HP Spectre x360',
      precio: 1599,
      marca: 'HP',
      categoria: 'portatil',
      procesador: 'Intel',
      grafica: 'Nvidia',
      vendedor: 'PcComponentes',
      imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/1081/10815586/1813-hp-spectre-x360-14-eu0003ns-intel-core-ultra-7-155h-16gb-1tb-ssd-14-tactil-foto.jpg'
    },
    {
      nombre: 'MacBook Pro 14',
      precio: 2199,
      marca: 'Apple',
      categoria: 'portatil',
      procesador: 'Apple',
      grafica: 'IntelArc',
      vendedor: 'PcComponentes',
      imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/1080/10803529/1753-apple-macbook-pro-apple-m3-8-nucleos-16gb-512gb-ssd-gpu-10-nucleos-14-gris-espacial-2c045f09-4a53-48af-9cf3-6c6cf1965516.jpg'
    },
    {
      nombre: 'Dell Precision 3590',
      precio: 1299,
      marca: 'Dell',
      categoria: 'portatil',
      procesador: 'Intel',
      grafica: 'IntelArc',
      vendedor: 'PcComponentes',
      imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/1085/10853191/1562-dell-precision-3590-intel-core-ultra-7-155h-16gb-512gb-ssd-rtx-500-156-27540ddc-d5a8-455f-a967-d729f3972dda.jpg'
    },
    {
      nombre: 'Asus ROG Zephyrus G14',
      precio: 1899,
      marca: 'Asus',
      categoria: 'portatil',
      procesador: 'AMD',
      grafica: 'Nvidia',
      vendedor: 'PcComponentes',
      imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/1082/10822020/1563-asus-rog-zephyrus-g14-2024-oled-ga403uv-qs022-amd-ryzen-9-8945hs-32gb-1tb-ssd-rtx-4060-14.jpg'
    },
    {
      nombre: 'Lenovo Legion 5 Pro',
      precio: 1499,
      marca: 'Lenovo',
      categoria: 'portatil',
      procesador: 'AMD',
      grafica: 'Nvidia',
      vendedor: 'PcComponentes',
      imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/1018/10188907/1142-lenovo-legion-5-15ith6h-intel-core-i7-11800h-16gb-1tb-ssd-rtx3060-156.jpg'
    },
    {
      nombre: 'Samsung Galaxy Book Pro 360',
      precio: 1399,
      marca: 'Samsung',
      categoria: 'portatil',
      procesador: 'Intel',
      grafica: 'IntelArc',
      vendedor: 'PcComponentes',
      imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/1073/10730550/117-samsung-galaxy-book3-360-intel-evo-core-i5-1340p-16gb-512gb-ssd-133-tactil-grafito.jpg'
    },
    {
      nombre: 'Razer Blade 14',
      precio: 1999,
      marca: 'Razer',
      categoria: 'portatil',
      procesador: 'AMD',
      grafica: 'Nvidia',
      vendedor: 'PcComponentes',
      imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/1081/10811362/1255-razer-blade-14-240hz-amd-ryzen-9-8945hs-32gb-1tb-ssd-rtx-4070-14.jpg'
    },
    {
      nombre: 'MSI GS66 Stealth',
      precio: 1799,
      marca: 'MSI',
      categoria: 'portatil',
      procesador: 'Intel',
      grafica: 'Nvidia',
      vendedor: 'PcComponentes',
      imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/1001/10010926/1209-msi-stealth-gs66-12uh-019es-intel-core-i7-12700h-32gb-1tb-ssd-rtx-3080-156.jpg'
    },
    {
      nombre: 'Huawei MateBook X Pro',
      precio: 1499,
      marca: 'Huawei',
      categoria: 'portatil',
      procesador: 'Intel',
      grafica: 'IntelArc',
      vendedor: 'PcComponentes',
      imagen: 'https://thumb.pccomponentes.com/w-530-530/articles/1067/10676216/1327-huawei-matebook-d-16-intel-core-i5-12450h-16gb-512gb-ssd-16.jpg'
    }
  ];

// Productos (ya lo tienes)
// [... Array de productos ...]

const listaProductos = (productos) => {
  const productoContenedor = document.getElementById("contenedor_producto");
  productoContenedor.innerHTML = "";

  productos.forEach(producto => {
    const cartaProducto = document.createElement("li");
    cartaProducto.className = "carta_producto";
    cartaProducto.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h2>${producto.nombre}</h2>
    <p>Categoria: ${producto.categoria}</p>
    <p>Marca: ${producto.marca}</p>
    <p>Precio: ${producto.precio}</p>
    <p>Vendedor: ${producto.vendedor}</p>
    `;
    productoContenedor.appendChild(cartaProducto);
  });
};

listaProductos(productos);



// Función para buscar productos por nombre en el buscador
const buscarProductos = () => {
  const terminoBusqueda = document.getElementById("buscador").value.toLowerCase(); // El término de búsqueda

  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(terminoBusqueda) ||
    producto.categoria.toLowerCase().includes(terminoBusqueda) ||
    producto.marca.toLowerCase().includes(terminoBusqueda) ||
    producto.procesador.toLowerCase().includes(terminoBusqueda) ||
    producto.grafica.toLowerCase().includes(terminoBusqueda) ||
    producto.vendedor.toLowerCase().includes(terminoBusqueda)
  );

  listaProductos(productosFiltrados); // Actualiza la lista de productos
};



// Filtros de búsqueda avanzada (rango de precio, marca, etc.)
function filtroProducto() {
  const rangoPrecio = document.getElementById('rango_precio').value;
  const [minPrecio, maxPrecio] = rangoPrecio ? rangoPrecio.split('-').map(Number) : [0, Infinity];
  const marca = document.getElementById('rango_marca').value;
  const categoria = document.getElementById('rango_categorias').value;
  const procesador = document.getElementById('rango_procesador').value;
  const grafica = document.getElementById('rango_graficas').value;

  const filtradoProductos = productos.filter(producto =>
    producto.precio >= minPrecio &&
    producto.precio <= maxPrecio &&
    (marca === '' || producto.marca === marca) &&
    (categoria === '' || producto.categoria === categoria) &&
    (procesador === '' || producto.procesador === procesador) &&
    (grafica === '' || producto.grafica === grafica)
  );
  listaProductos(filtradoProductos);
}



// Evento al hacer clic en el botón de filtros
document.getElementById('filtro_boton').addEventListener('click', filtroProducto);




// Escuchar la tecla "Enter" para ejecutar la búsqueda en el buscador
document.getElementById("buscador").addEventListener("keyup", function (event) {
  if (event.key === "Enter") { // Si se presiona Enter
    buscarProductos(); // Llama a la función de búsqueda
  }
});



// Hacer clic en la lupa para ejecutar la búsqueda
document.getElementById("lupa_buscar").addEventListener("click", buscarProductos);
