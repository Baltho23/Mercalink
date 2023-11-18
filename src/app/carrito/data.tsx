const columns = [
    {name: "Nombre", uid: "name", sortable: true},
    {name: "Tipo", uid: "status", sortable: true},
    {name: "Cantidad", uid: "amount", sortable: true},
    {name: "Proveedor", uid: "supplier"},
    {name: "Acciones", uid: "actions"}
  ];
  
  const statusOptions = [
    {name: "Enlatados", uid: "Enlatados"},
    {name: "Bebidas", uid: "Bebidas"},
    {name: "Carnes Frias", uid: "Carnes Frias"},
    {name: "Lacteos", uid: "Lacteos"},
  ];
  
  const users = [
    {
      id: 1,
      name: "Atun",
      amount: "5",
      status: "Enlatados",
      avatar: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/169374-1600-1600?v=637810789941530000&width=1600&height=1600&aspect=true",
      supplier: "Van Camps",
    },
    {
      id: 2,
      name: "Sprite",
      amount: "5",
      status: "Bebidas",
      avatar: "https://www.coca-cola.com/content/dam/onexp/cl/es/brands/sprite/sprite-lima-limon/Product-Information-Sprite-Lima-Limon.jpg",
      supplier: "CocaCola",
    },
    {
      id: 3,
      name: "Jamon",
      amount: "5",
      status: "Carnes Frias",
      avatar: "https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_jamon_sandwich_zenu_450gr_carnes_frias_824750a5-9674-4524-b4c7-3bed489ea235_1024x1024.jpg?v=1620407900",
      supplier: "Zenu",
    },
    {
      id: 4,
      name: "Yogurt",
      amount: "5",
      status: "Lacteos",
      avatar: "https://pacardylwpmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/09/08182336/7702129013406.jpg",
      supplier: "Colanta",
    },
    {
        id: 5,
        name: "Atun",
        amount: "5",
        status: "Enlatados",
        avatar: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/169374-1600-1600?v=637810789941530000&width=1600&height=1600&aspect=true",
        supplier: "Van Camps",
      },
      {
        id: 6,
        name: "Sprite",
        amount: "5",
        status: "Bebidas",
        avatar: "https://www.coca-cola.com/content/dam/onexp/cl/es/brands/sprite/sprite-lima-limon/Product-Information-Sprite-Lima-Limon.jpg",
        supplier: "CocaCola",
      },
      {
        id: 7,
        name: "Jamon",
        amount: "5",
        status: "Carnes Frias",
        avatar: "https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_jamon_sandwich_zenu_450gr_carnes_frias_824750a5-9674-4524-b4c7-3bed489ea235_1024x1024.jpg?v=1620407900",
        supplier: "Zenu",
      },
      {
        id: 8,
        name: "Yogurt",
        amount: "5",
        status: "Lacteos",
        avatar: "https://pacardylwpmedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/09/08182336/7702129013406.jpg",
        supplier: "Colanta",
      },
    
  ];
  
  export {columns, users, statusOptions};
  