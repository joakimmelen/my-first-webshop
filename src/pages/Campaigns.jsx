import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Products from '../components/Products';
import { cartState } from "../recoil/cart/atom";
import { cartStatus, removeItemSelector } from "../recoil/cart/selectors";
import { productsState } from "../recoil/products/atom";
import Cart from "../components/Cart"

/// https://github.com/alan2207/bulletproof-react
/// chakra
/// https://reactjs.org/docs/code-splitting.html
/// https://nextjs.org/showcase


function Campaigns() {

  const products = useRecoilValue(productsState);
  const [cart, setCart] = useRecoilState(cartState);
//   const { totalItems, totalPrice } = useRecoilValue(cartStatus);

//   const removeItem = useSetRecoilState(removeItemSelector);

  function handleAdd(product) {
    const newCart = [...cart, product];
    setCart(newCart);
  }


  return (
    <div>
        {/* <Products /> */}
        <h3>Shoppa loss</h3>
        {/* <div key={product.id}>{product.title}  */}
        {products.map((product) => (
          <button key={product.id} onClick={() => handleAdd(product)}>
            {product.title} - {product.price}kr
          </button>
        ))}
        {/* </div> */}
        <div>
          {/* <h3>Din varukorg</h3>
          {cart.map((product, index) => (
            <div>
              {product.title}{" "}
              <button onClick={() => removeItem(index)}>X</button>
            </div>
          ))}
          <p>Antal varor: {totalItems}</p>
          <p>Summa: {totalPrice}kr</p> */}
          
        </div>
    </div>
  )
}

export default Campaigns