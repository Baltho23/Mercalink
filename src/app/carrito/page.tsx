'use client';
import Icon from "@/app/components/icon/icon";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Selection, SortDescriptor} from "@nextui-org/table";
import { columns } from "./data";
import { InitialModalState, ModalState } from "@/app/models/modalState.model";
import { User } from "@nextui-org/user";
import { Input } from "@nextui-org/input";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@nextui-org/button";
import { Chip, ChipProps } from "@nextui-org/chip";
import { Pagination } from "@nextui-org/pagination";
import { TableState } from "../models/tableState.model";
import { API_URL } from "../services/fetch.service";
import { ProductoModel } from "../models/producto.model";
import { useAuth } from "../services/auth.provider";

const categoryColorMap: Record<string, ChipProps["color"]> = {
  suministro: "success",
  medicamento: "danger",
  otros: "warning",
};

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

const INITIAL_VISIBLE_COLUMNS = ["nombre", "categoria", "cantidad", "unidad_de_medida", "precio", "acciones"];

export default function ControlInventario() {

  const {user: currentUser, login, logout} = useAuth();
  const [tableState, setTableState]: [TableState, Function] = useState({isLoading: true, data: []});
  const [filterValue, setFilterValue] = useState("");
  const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "type",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);

  const loadTable = async () => {
    await fetch(`${API_URL}/mostrarCarrito/${currentUser.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const status = { isLoading: false, data }
        setTableState(status);
      }
    ).catch((error) => console.log(error));
  }

  const reloadTable = () => {
    const status: TableState = { ...tableState, isLoading: true}
    setTableState(status);
    loadTable();
  }

  useEffect(() => {
    loadTable();
  }, [])

  const hasSearchFilter = Boolean(filterValue);

  const loadingState = tableState.isLoading ? "loading" : "idle";

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    if (tableState.data) {
      let filteredProductos = [...tableState.data];

      if (hasSearchFilter) {
        filteredProductos = filteredProductos.filter((producto) =>
          producto.name.toLowerCase().includes(filterValue.toLowerCase()),
        );
      }

      return filteredProductos;
    }
  }, [hasSearchFilter, filterValue, tableState.data]);

  const pages = filteredItems? Math.ceil(filteredItems.length / rowsPerPage) : 1;

  const items = useMemo(() => {
    if (filteredItems) {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;

      return filteredItems.slice(start, end);
    }
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    if (items) {
      return [...items].sort((a: ProductoModel, b: ProductoModel) => {
        const first = a[sortDescriptor.column as keyof ProductoModel] as number;
        const second = b[sortDescriptor.column as keyof ProductoModel] as number;
        const cmp = first < second ? -1 : first > second ? 1 : 0;
  
        return sortDescriptor.direction === "descending" ? -cmp : cmp;
      });
    }
  }, [sortDescriptor, items]);

  const renderCell = useCallback((producto: ProductoModel, columnKey: React.Key) => {
    const index = Math.floor(Math.random() * (productosImages.length - 0) + 0);
    const imgUrl = productosImages[index];
    const cellValue: any = producto[columnKey as keyof ProductoModel];
    switch (columnKey) {
      case "nombre":
        console.log('usuario');
        return (
          <User
            avatarProps={{radius: "lg", src: imgUrl}}
            name={producto.nombre}
          ></User>
        );
      case "categoria":
        return (
          <Chip className="capitalize" color={categoryColorMap[producto.categoria]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "acciones":
        return (
          <Button
            isIconOnly
            endContent={<Icon name="times"></Icon>}
            color="danger"
          ></Button>
        );
      default:
        return cellValue;
    }
  }, []);

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[])

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por nombre"
            startContent={<Icon  name="search"></Icon>}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-small">Total: {tableState.data?.length} Productos</span>
        </div>
      </div>
    );
  }, [
    onClear,
    filterValue,
    tableState.data,
    onSearchChange,
  ]);

  const bottomContent = useMemo(() => {
    if (!tableState.isLoading) {
      return (
        <div className="py-2 px-2 flex justify-center items-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={setPage}
          />
        </div>
      );
    }
  }, [page, pages, tableState.isLoading]);

  const totalCost = useMemo(() => {
    const costos: number[] = [];
    tableState.data.forEach((producto: ProductoModel) => costos.push(producto.precio));
    return costos.reduce((total, precio) => total + precio, 0);
  }, [tableState.data]);
    
  return (
    <div className="p-5">
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[641px]",
        }}
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody 
          emptyContent={tableState.isLoading ? "Cargando" : "No se encontraron Productos"} 
          items={sortedItems} 
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex ml-3 gap-5 items-center">
        <div className="font-bold">
          Total precio: <span className="text-green-600">${totalCost}</span>
        </div>
        <div>
          <Button
            color="primary"
          >
            Comprar productos
          </Button>
        </div>
      </div>
    </div>
  );
}
