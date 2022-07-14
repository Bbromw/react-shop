import React from "react";
import { useShopContext } from "../../../store";
import { actions } from "../../../store";
import { useBtnsContext } from "../../context";

export const ButtonAction = ({
  idProd,
  isCarted,
  quantityChoose,
  getProductUpdate,
  cartHandler,
  isEnableAddToCart,
}) => {
  const { dispatch } = useShopContext();
  const { setState } = useBtnsContext();
  const { added, pending } = cartHandler;

  const addProductToCart = () => {
    pending();
    setTimeout(() => {
      dispatch(actions.addToCart({ id: idProd, quantity: quantityChoose }));
      added();
    }, 1000);
  };

  return (
    <>
      <button onClick={addProductToCart} disabled={isEnableAddToCart}>
        Add to Cart
      </button>
      <button disabled={isCarted}>Delete</button>
      <button
        disabled={isCarted}
        onClick={() => {
          getProductUpdate(idProd);
          setState.handleClickUpdate();
        }}
      >
        Update
      </button>
    </>
  );
};
