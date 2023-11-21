/* eslint-disable @next/next/no-sync-scripts */
'use client'
import './landing.css';
import { useEffect, useState } from 'react';
import { Image } from '@nextui-org/react';
import { API_URL } from '../services/fetch.service';
import { ProductoModel } from '../models/producto.model';
import { useRouter } from 'next/navigation';

const productosImages = [
  "https://www.viaappia.com.ve/uploads/productos/20220915161313H.jpeg",
  "https://images.openfoodfacts.org/images/products/780/200/000/2564/front_es.12.full.jpg",
  "https://andreuprados.com/wp-content/uploads/2017/01/apple_0.jpg",
  "https://fundacionmujeresempresarias.org/wp-content/uploads/2016/08/lechuga-crespa.png",
  "https://copservir.vtexassets.com/arquivos/ids/1029868/ACETAMINOFEN-500-MG--COASP-_L.png?v=638292538669270000",
  "https://static.merqueo.com/images/products/large/7cc900b9-71cd-47f4-b3b1-1d61d0ea9def.jpg",
  "https://jumbocolombiaio.vtexassets.com/arquivos/ids/202997/7702129020756-20-282-29.jpg?v=637814193303400000",
  "https://thefoodtech.com/wp-content/uploads/2021/05/yogures.png",
  "https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/7/5/7509546069241_37.jpg",
  "https://elamigodelanoche.com/wp-content/uploads/2020/06/Cerveza-A%CC%81guila-Original-Lata_.jpg",
  "https://mundodulces17.com/wp-content/uploads/2023/03/festival-chocolate-x-4.jpg"
]
export default function Landing() {

  const [productos, setProductos]: [ProductoModel[] | null, Function] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${API_URL}/productos`)
    .then((response) => response.json())
    .then((productos: ProductoModel[]) => {
      setProductos(productos);
    })
    .catch(
    (error) => console.log(error)
    );
  }, []);

  function openProducto(productoId: number) {
    router.push(`/producto/${productoId}`);
  }
  

  return (
    <main className="fondo">
      <div className="space"></div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="space"></div>
      
      <div className="casurrel-contenedor">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-banner">
            <Image
              src="https://cdn.leonardo.ai/users/3bea4e2c-7fec-4590-b3f1-7370c67206f5/generations/e151da8a-44d6-4f1c-8529-f3811dbf4470/Leonardo_Diffusion_XL_Give_me_a_pantry_sundry_store_banner_in_0.jpg"
              alt='banner'
              width="100%"
            ></Image>
          </div>
        </div>
      </div>

      <div className="space"></div>
      <div className="space"></div>

      <section className="ofertas">
        <h2 className='font-bold text-2xl'>Ofertas</h2>
        {productos.map((producto: ProductoModel) => {
          const index = Math.floor(Math.random() * (productosImages.length - 0) + 0);
          const imgUrl = productosImages[index];
          return (
            <div key={producto.id} className="producto" onClick={() => openProducto(producto.id)}>
              <Image
                src={imgUrl}
                className="product-img"
                alt='producto imagen'
              ></Image>
              <h3 className='font-medium'>{producto.nombre}</h3>
              <p className="Unidades">{`${producto.cantidad} ${producto.unidad_de_medida}`}</p>
              <p className="precio mb-2">${producto.precio}</p>
            </div>
          );
        })}
      </section>

      <section className="ofertas">
        <h2 className='font-bold text-2xl'>Sugerencias</h2>
        {productos.map((producto: ProductoModel) => {
          const index = Math.floor(Math.random() * (productosImages.length - 0) + 0);
          const imgUrl = productosImages[index];
          return (
            <div key={producto.id} className="producto" onClick={() => openProducto(producto.id)}>
              <Image
                src={imgUrl}
                className="product-img"
                alt='producto imagen'
              ></Image>
              <h3 className='font-medium'>{producto.nombre}</h3>
              <p className="Unidades">Disponible: {`${producto.cantidad} ${producto.unidad_de_medida}`}</p>
              <p className="precio mb-2">${producto.precio}</p>
            </div>
          );
        })}
      </section>

      <script src="https://kit.fontawesome.com/your-fontawesome-kit.js"></script>
    </main>
  );
}