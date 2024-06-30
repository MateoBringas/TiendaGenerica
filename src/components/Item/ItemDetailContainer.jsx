import React, { useEffect, useState } from "react";
import { pedirItemPorId } from "../../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    pedirItemPorId(Number(id)).then((res) => {
      setItem(res);
    });
  }, []);

  return <div>{item && <ItemDetail item={item} />}</div>;
}

export default ItemDetailContainer;