import React, { useState } from "react";
import { ButtonAction } from "./ButtonAction";

export const ProductTableRow = ({ item, getProductUpdate }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  const resetQuantity = () => {
    setQuantity(1);
  };

  const added = () => {
    setIsAdded(false);
  };

  const pending = () => {
    setIsAdded(true);
  };

  return (
    <>
      <tr>
        <th>{item.id}</th>
        <th>{item.prodName}</th>
        <th>{item.price}</th>
        <th>{item.quantity}</th>
        {isAdded ? (
          <th colSpan={2} style={{ color: "red" }}>
            Added to cart
          </th>
        ) : (
          <>
            <th>
              <input
                type="number"
                value={quantity}
                min={0}
                max={item.quantity}
                onChange={(e) => {
                  handleQuantity(e);
                }}
              />
            </th>
            <th>
              <ButtonAction
                quantityChoose={quantity}
                idProd={item.id}
                isCarted={item.isCarted}
                getProductUpdate={getProductUpdate}
                cartHandler={{ added, pending, resetQuantity }}
              />
            </th>
          </>
        )}
      </tr>
    </>
  );
};
