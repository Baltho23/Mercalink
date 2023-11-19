'use client'
import "./nav.css";
import React, { useState } from "react";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link,  
  NavbarMenu,
  NavbarMenuItem,
  DropdownTrigger,
  Dropdown,
  DropdownItem,
  DropdownMenu
} from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

export default function Nav(){

    const router = useRouter();

    function navegar(url: string) {
      router.push(url);
    }
  
    return (
      <div className="hueso shadow-black drop-shadow">
        <Navbar>
          <NavbarBrand>
            <Link href="/" className="text-xl font-bold text-inherit">
              MercaLink
            </Link>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3" justify="center">
            <NavbarItem className="margen">
              <Input isClearable size="lg" placeholder="Buscar Productos..." />
            </NavbarItem>
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger className="cursor-pointer">
                  <div className="flex">
                    <Image
                      src="https://i.pinimg.com/564x/b0/47/6d/b0476df3a01539422497fdb3c8ff9c24.jpg"
                      alt="profile-picture"
                      height={40}
                      width={50}
                      className="rounded"
                    ></Image>
                    <div className="gris ml-2">
                      <h3 className="font-medium">Airton Sampayo</h3>
                      <p className="text-sm">Premiun</p>
                    </div>
                  </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="dashboard">Perfil</DropdownItem>
                  <DropdownItem key="dashboard">Pedidos</DropdownItem>
                  <DropdownItem key="dashboard">Historial</DropdownItem>
                  <DropdownItem key="dashboard" onClick={() => navegar('carrito')}>Carrito</DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Cerrar sesion
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    );
}