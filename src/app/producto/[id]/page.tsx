'use client'
import './producto.css';
import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import {Input, Select, SelectItem} from "@nextui-org/react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Icon from '../../components/icon/icon';
import { API_URL } from '@/app/services/fetch.service';
import { useParams } from 'next/navigation';
import { ProductoModel } from '@/app/models/producto.model';

export default function Producto(){

  const {id: productoId} = useParams();
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

  if (!producto.id) {
    return "";
  }
  return (
    <div className="p-5">
      <main className="p-5 max-w-[1000px] rounded-lg mx-auto bg-sky-100">
        <div className="flex">
          <div className="m-2 size-img">
            <Image
              className="rounded-lg"
              src="https://i.pinimg.com/564x/61/4b/41/614b410de3dd4854218a9a96e863625b.jpg"
              alt="imagen producto"
            ></Image>
            <p className="ml-1 my-3 font-semibold text-2xl">${producto.precio}</p>
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
              <Button endContent={<Icon name="uil uil-shopping-bag"></Icon>} color="primary" variant="bordered" className="mr-2">
                Agregar al carrito
              </Button>
            </div>
          </div>
          <div className="m-2 size-info">
            <h1 className="text-center font-bold text-4xl mb-5">{producto.nombre}</h1>
            <div>
              <p className="text-xl font-semibold mb-3">
                Descripción del producto
              </p>
              <div>
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
