'use client'
import './landing.css';
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import  Image  from "next/image";
import banner1 from "../../assets/images/banner1.jpg"



export default function Landing(){

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
            data-bs-ride="carousel">
            <div className="carousel-inner complementar1">
              <div className="carousel-item active " data-bs-interval="30000">
                <img
                  src="https://cdn.leonardo.ai/users/3bea4e2c-7fec-4590-b3f1-7370c67206f5/generations/e151da8a-44d6-4f1c-8529-f3811dbf4470/Leonardo_Diffusion_XL_Give_me_a_pantry_sundry_store_banner_in_0.jpg"
                  className="complementar2"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev left-20"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon decoration-black"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next right-20"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            ></button>
          </div>
        </div>

        <div className="space"></div>
        <div className="space"></div>

        <section className="ofertas">
          <h2 className='font-bold text-2xl'>Ofertas</h2>
          <div className="producto">
            <img
              src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Manzana</h3>
            <p className="Unidades">268 Unidades</p>
            <p className="precio mb-2">$9.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="producto">
            <img
              src="https://i.pinimg.com/564x/39/28/86/3928867336dfd672177a4962469232a0.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Zanahoria</h3>
            <p className="Unidades">125 Unidades</p>
            <p className="precio mb-2">$8.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <div className="producto">
            <img
              src="https://i.pinimg.com/564x/83/9a/ef/839aefdd04ca38a62914e95c7e5c7fa1.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Brócoli</h3>
            <p className="Unidades">257 Unidades</p>
            <p className="precio mb-2">$5.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="producto">
            <img
              src="https://i.pinimg.com/736x/cb/ea/96/cbea96674cad2dbc27f4465f105d3b95.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Lechuga</h3>
            <p className="Unidades">145 Unidades</p>
            <p className="precio mb-2">$12.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="producto">
            <img
              src="https://i.pinimg.com/564x/05/4f/19/054f190455f5f7981b9b00a5652d09bc.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Tomate</h3>
            <p className="Unidades">167 Unidades</p>
            <p className="precio mb-2">$1.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="producto">
            <img
              src="https://i.pinimg.com/564x/30/50/29/305029aafc43bb4d9aae4a5f52705b52.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Espinaca</h3>
            <p className="Unidades">130 Unidades</p>
            <p className="precio mb-2">$3.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="producto">
            <img
              src="https://i.pinimg.com/564x/06/f7/09/06f709d69a4e6cfd88b396656b30a537.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Cebolla</h3>
            <p className="Unidades">125 Unidades</p>
            <p className="precio mb-2">$1.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <div id="productosExtras" className="oculto">
            <div className="producto">
              <img
                src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
                className="product-img"
              />
              <h3>Limones </h3>
              <p className="Unidades">257 Unidades</p>
              <p className="precio">$5.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img
                src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
                className="product-img"
              />
              <h3>Mandarinas </h3>
              <p className="Unidades">245 Unidades</p>
              <p className="precio">$12.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img
                src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
                className="product-img"
              />
              <h3>Rábanos </h3>
              <p className="Unidades">267 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img
                src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
                className="product-img"
              />
              <h3>Ciruelas </h3>
              <p className="Unidades">230 Unidades</p>
              <p className="precio">$3.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/cebolla.png" className="product-img" />
              <h3>Cebolla</h3>
              <p className="Unidades">325 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="producto">
              <img src="img/Mora.png" className="product-img" />
              <h3>Mora </h3>
              <p className="Unidades">367 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Granadas.png" className="product-img" />
              <h3>Granadas </h3>
              <p className="Unidades">130 Unidades</p>
              <p className="precio">$3.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Cilantro.png" className="product-img" />
              <h3>Cilantro </h3>
              <p className="Unidades">225 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="producto">
              <img src="img/Kiwis.png" className="product-img" />
              <h3>Kiwis </h3>
              <p className="Unidades">167 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Mango.png" className="product-img" />
              <h3>Mango </h3>
              <p className="Unidades">330 Unidades</p>
              <p className="precio">$3.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Cerezas.png" className="product-img" />
              <h3>Cerezas </h3>
              <p className="Unidades">325 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="producto">
              <img src="img/Peras.png" className="product-img" />
              <h3>Peras </h3>
              <p className="Unidades">267 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Plátanos.png" className="product-img" />
              <h3>Plátanos </h3>
              <p className="Unidades">250 Unidades</p>
              <p className="precio">$0.50</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Sandías.png" className="product-img" />
              <h3>Sandías </h3>
              <p className="Unidades">255 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </section>

        <section className="ofertas">
          <h2 className='font-bold text-2xl'>Productos Sugeridos</h2>
          <div className="producto">
            <img
              src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Manzana</h3>
            <p className="Unidades">268 Unidades</p>
            <p className="precio mb-2">$9.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="producto">
            <img
              src="https://i.pinimg.com/564x/39/28/86/3928867336dfd672177a4962469232a0.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Zanahoria</h3>
            <p className="Unidades">125 Unidades</p>
            <p className="precio mb-2">$8.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <div className="producto">
            <img
              src="https://i.pinimg.com/564x/83/9a/ef/839aefdd04ca38a62914e95c7e5c7fa1.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Brócoli</h3>
            <p className="Unidades">257 Unidades</p>
            <p className="precio mb-2">$5.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="producto">
            <img
              src="https://i.pinimg.com/736x/cb/ea/96/cbea96674cad2dbc27f4465f105d3b95.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Lechuga</h3>
            <p className="Unidades">145 Unidades</p>
            <p className="precio mb-2">$12.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="producto">
            <img
              src="https://i.pinimg.com/564x/05/4f/19/054f190455f5f7981b9b00a5652d09bc.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Tomate</h3>
            <p className="Unidades">167 Unidades</p>
            <p className="precio mb-2">$1.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="producto">
            <img
              src="https://i.pinimg.com/564x/30/50/29/305029aafc43bb4d9aae4a5f52705b52.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Espinaca</h3>
            <p className="Unidades">130 Unidades</p>
            <p className="precio mb-2">$3.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="producto">
            <img
              src="https://i.pinimg.com/564x/06/f7/09/06f709d69a4e6cfd88b396656b30a537.jpg"
              className="product-img"
            />
            <h3 className='font-medium'>Cebolla</h3>
            <p className="Unidades">125 Unidades</p>
            <p className="precio mb-2">$1.99</p>
            <button className="buttons">
              <i className="fas fa-plus"></i>
            </button>
          </div>

          <div id="productosExtras" className="oculto">
            <div className="producto">
              <img
                src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
                className="product-img"
              />
              <h3>Limones </h3>
              <p className="Unidades">257 Unidades</p>
              <p className="precio">$5.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img
                src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
                className="product-img"
              />
              <h3>Mandarinas </h3>
              <p className="Unidades">245 Unidades</p>
              <p className="precio">$12.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img
                src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
                className="product-img"
              />
              <h3>Rábanos </h3>
              <p className="Unidades">267 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img
                src="https://i.pinimg.com/236x/94/c8/af/94c8af794204150afb7fdc5d7ab2267d.jpg"
                className="product-img"
              />
              <h3>Ciruelas </h3>
              <p className="Unidades">230 Unidades</p>
              <p className="precio">$3.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/cebolla.png" className="product-img" />
              <h3>Cebolla</h3>
              <p className="Unidades">325 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="producto">
              <img src="img/Mora.png" className="product-img" />
              <h3>Mora </h3>
              <p className="Unidades">367 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Granadas.png" className="product-img" />
              <h3>Granadas </h3>
              <p className="Unidades">130 Unidades</p>
              <p className="precio">$3.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Cilantro.png" className="product-img" />
              <h3>Cilantro </h3>
              <p className="Unidades">225 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="producto">
              <img src="img/Kiwis.png" className="product-img" />
              <h3>Kiwis </h3>
              <p className="Unidades">167 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Mango.png" className="product-img" />
              <h3>Mango </h3>
              <p className="Unidades">330 Unidades</p>
              <p className="precio">$3.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Cerezas.png" className="product-img" />
              <h3>Cerezas </h3>
              <p className="Unidades">325 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="producto">
              <img src="img/Peras.png" className="product-img" />
              <h3>Peras </h3>
              <p className="Unidades">267 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Plátanos.png" className="product-img" />
              <h3>Plátanos </h3>
              <p className="Unidades">250 Unidades</p>
              <p className="precio">$0.50</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="producto">
              <img src="img/Sandías.png" className="product-img" />
              <h3>Sandías </h3>
              <p className="Unidades">255 Unidades</p>
              <p className="precio">$1.99</p>
              <button className="buttons">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </section>

        

        <script src="https://kit.fontawesome.com/your-fontawesome-kit.js"></script>
      </main>
    );

}