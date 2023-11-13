'use client'
import './producto.css';
import { Button } from "@nextui-org/button";
import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {animals} from "./data";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Producto(){

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

  return (
    <main className="margen-lateral fondo my-7 rounded-lg">
      <div className="flex">
        <div className="m-2 size-img">
          <img
            className="rounded-lg"
            src="https://i.pinimg.com/564x/61/4b/41/614b410de3dd4854218a9a96e863625b.jpg"
            alt=""
          />
          <p className="ml-1 my-3 font-semibold text-2xl">$2.000.000</p>
          <Select
            variant="bordered"
            items={animals}
            placeholder="Cantidad"
            className="w-28"
          >
            {(animal) => (
              <SelectItem key={animal.value}>{animal.label}</SelectItem>
            )}
          </Select>
          <div className="my-4">
            <Button color="primary" variant="bordered" className="mr-2">
              Comprar
            </Button>
            <Button variant="bordered" className="mx-2">
              Agregar al carrito
            </Button>
          </div>
        </div>
        <div className="m-2 size-info">
          <h1 className="text-center font-bold text-4xl mb-5">Mango</h1>
          <div>
            <p className="text-xl font-semibold">
              Caracteristicas del producto{" "}
            </p>
            <div className='ml-5'>
            <ul className="list-disc my-3 text-lg">
              <li>Lo vendemos en kilogramos.</li>
              <li>
                Destaca la calidad del mango, asegurando que esté hecho de un
                material resistente y duradero. Si es un mango para
                herramientas, por ejemplo, podría resaltar que está fabricado
                con acero inoxidable de alta calidad para garantizar resistencia
                y durabilidad.
              </li>
              <li>
                Resalta cualquier característica ergonómica que haga que el
                mango sea cómodo de sostener y fácil de usar. Un diseño que se
                ajuste bien a la mano puede ser crucial, especialmente si el
                mango se utilizará durante largos períodos de tiempo.
              </li>
              <li>
                Si el mango tiene aplicaciones diversas o puede adaptarse a
                diferentes usos, esto puede ser una característica valiosa. Por
                ejemplo, un mango de cocina que pueda utilizarse para diferentes
                tipos de cuchillos o un mango de herramienta que sea compatible
                con varios accesorios.
              </li>
              <li>
                Si el aspecto visual es importante, destaca el diseño estético
                del mango. Un buen diseño puede no solo hacer que el producto
                sea más atractivo, sino también reflejar la calidad percibida
                del artículo.
              </li>
              <li>
                Ofrecer una garantía o destacar certificaciones de calidad puede
                proporcionar a los compradores una mayor confianza en el
                producto. Asegúrate de comunicar claramente cualquier garantía
                ofrecida o certificaciones que respalden la calidad y
                confiabilidad del mango.
              </li>
            </ul>
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
  );
}
