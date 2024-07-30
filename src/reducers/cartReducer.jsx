import React from "react";

function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let existingProduct = state.cart.find((elem) => elem.id === id + color);
    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id == id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((elem) => elem.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "DECREASE") {
    let updatedCart = state.cart.map((elem) => {
      if (elem.id === action.payload) {
        let newAmount = elem.amount - 1;
        return {
          ...elem,
          amount: newAmount < 2 ? 1 : newAmount,
        };
      } else {
        return elem;
      }
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "INCREASE") {
    let updatedCart = state.cart.map((elem) => {
      if (elem.id === action.payload) {
        let newAmount = elem.amount + 1;
        return {
          ...elem,
          amount: newAmount > elem.max ? elem.max : newAmount,
        };
      } else {
        return elem;
      }
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_price += price * amount;

        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
}

export default cartReducer;
