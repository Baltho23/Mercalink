/* eslint-disable @next/next/no-sync-scripts */
'use client'
import './landing.css';
import { useEffect, useState } from 'react';
import { Image } from '@nextui-org/react';
import { API_URL } from '../services/fetch.service';
import { ProductoModel } from '../models/producto.model';

export default function Landing() {

  const [productos, setProductos]: [ProductoModel[] | null, Function] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/productos`)
    .then((response) => response.json())
    .then((productos: ProductoModel[]) => {
      setProductos(productos);
    })
    .catch(
    (error) => console.log(error)
    );
  }, [])
  

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
          return (
            <div key={producto.id} className="producto">
              <Image
                src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
                className="product-img"
                alt='producto imagen'
              ></Image>
              <h3 className='font-medium'>{producto.nombre}</h3>
              <p className="Unidades">{`${producto.cantidad} ${producto.unidad_de_medida}`}</p>
              <p className="precio mb-2">${producto.precio}</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          );
        })}
      </section>

      <section className="ofertas">
        <h2 className='font-bold text-2xl'>Sugerencias</h2>
        {productos.map((producto: ProductoModel) => {
          return (
            <div key={producto.id} className="producto">
              <Image
                src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
                className="product-img"
                alt='producto imagen'
              ></Image>
              <h3 className='font-medium'>{producto.nombre}</h3>
              <p className="Unidades">{`${producto.cantidad} ${producto.unidad_de_medida}`}</p>
              <p className="precio mb-2">${producto.precio}</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          );
        })}
      </section>

      <script src="https://kit.fontawesome.com/your-fontawesome-kit.js"></script>
    </main>
  );
}