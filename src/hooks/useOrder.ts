import { useState } from "react";
import type { OrderItem, MenuItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  //Function agregar elementos - que elementos estan duplicados para asi incrementar su cantidad en quantity

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  //eliminar elementos

  const removeItem = (id: MenuItem['id']) => {
    setOrder(order.filter( item => item.id !== id))
  }

  return {
    order,
    addItem,
    removeItem
  };
}
