'use client'
import './producto.css';
import Icon from '../../components/icon/icon';
import { useEffect, useMemo, useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { API_URL, POST } from '@/app/services/fetch.service';
import { useParams } from 'next/navigation';
import { ProductoModel } from '@/app/models/producto.model';
import { useAuth } from '@/app/services/auth.provider';

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
];

export default function Producto(){

  const {id: productoId} = useParams();
  const {user, login, logout} = useAuth();
  const [producto, setProducto]: [ProductoModel, Function] = useState({} as ProductoModel);
  const [cantidad, setCantidad]: [number, Function] = useState(1);

  useEffect(() => {
    console.log(`${API_URL}/producto/${productoId}`);
    fetch(`${API_URL}/producto/${productoId}`)
    .then((response) => response.json())
    .then((producto) => {
      console.log(producto);
      setProducto(producto);
    })
    .catch(
    (error) => console.log(error)
    );
  }, [productoId]);

  function agregarProducto() {
    const carritoItem: any = {
      user_id: user.id,
      producto_id: producto.id,
      cantidad,
      precio: 2,
      carrito: false
    }
    const body = JSON.stringify(carritoItem);
    fetch(`${API_URL}/carrito`, {...POST, body})
    .then((response) => console.log(response))
    .catch(
      (error) => console.log(error)
    );
  }
  
  const list = [
    {
      title: "Fresas",
      img: "https://i.pinimg.com/564x/85/39/40/853940af94cc0a31eafb0358eab028e9.jpg",
      price: "$5.50",
    },
    {
      title: "Kiwi",
      img: "https://i.pinimg.com/564x/69/4e/e8/694ee855b46b4bc78887d46e7842c36e.jpg",
      price: "$3.00",
    },
    {
      title: "Melocoton",
      img: "https://i.pinimg.com/564x/a2/07/bc/a207bc8377bbacbd873b340facec1286.jpg",
      price: "$10.00",
    },
    {
      title: "Banano",
      img: "https://i.pinimg.com/564x/22/77/5b/22775b6e0f58cffffc78d1e7e06d694b.jpg",
      price: "$5.30",
    },
  ];

  const imgUrl = useMemo(() => {
    const index = Math.floor(Math.random() * (productosImages.length - 0) + 0);
    return productosImages[index];
  }, []);

  if (!producto.id) {
    return "";
  }
  return (
    <div className="p-5">
      <main className="p-5 max-w-[1000px] rounded-lg mx-auto bg-sky-100">
        <div className="flex">
          <div className="m-2 size-img">
            <Image
              className="rounded-lg max-h-[500px] max-w-[500px]"
              src={imgUrl}
              alt="imagen producto"
            ></Image>
            <p className="ml-1 my-3 font-semibold text-4xl">${producto.precio}</p>
            <p>
              <span>Cantidad:</span>
              <Input 
                type='number' 
                value={cantidad.toString()} 
                onValueChange={(event) => setCantidad(Number(event))} 
                classNames={{inputWrapper: ["bg-white"]}}
              ></Input>
            </p>
            <div className="my-4">
              <Button 
                endContent={<Icon name="uil uil-shopping-bag"></Icon>} 
                color="primary" 
                variant="bordered" 
                className="mr-2"
                onPress={agregarProducto}
              >
                Agregar al carrito
              </Button>
            </div>
          </div>
          <div className="m-2 size-info">
            <h1 className="text-center font-bold text-4xl mb-5">{producto.nombre}</h1>
            <div>
              <p className="text-xl font-semibold mb-5">
                Descripción del producto
              </p>
              <div className='text-xl'>
                {producto.descripcion}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-4xl my-8 ml-3">Sugerencias</h2>
        </div>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-3">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
