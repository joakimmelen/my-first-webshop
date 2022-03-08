import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartState } from "../recoil/cart/atom";
import { cartStatus, removeItemSelector } from "../recoil/cart/selectors";
import { productsState } from "../recoil/products/atom";
// import styles from "./cart.module.css"

function cart() {

    // const products = useRecoilValue(productsState);
    const [cart, setCart] = useRecoilState(cartState);
    const { totalItems, totalPrice } = useRecoilValue(cartStatus);
  
    const removeItem = useSetRecoilState(removeItemSelector);
  
    // function handleAdd(product) {
    //   const newCart = [...cart, product];
    //   setCart(newCart);
    // }
  

  return (
    <div>
        <div>
          <h3>Din varukorg</h3>
          {cart.map((product, index) => (
            <div>
              {product.title}{" "}
              <button onClick={() => removeItem(index)}>X</button>
            </div>
          ))}
          <p>Antal varor: {totalItems}</p>
          <p>Summa: {totalPrice}kr</p>
        </div>
    </div>
  )


//   return (
//       <div>
//     <div className={styles.container}>
//     <div className={styles.shopping-cart}>
//       <div className={styles.shopping-cart-header}>
//         {/* <i className={styles.fa fa-shopping-cart cart-icon}></i><span className={styles.badge}>3</span> */}
//         <i className={styles.fa+ ' ' + styles.fa-shopping-cart+ ' ' + styles.cart-icon}></i><span className={styles.badge}>3</span>
//         <div className={styles.shopping-cart-total}>
//           <span className={styles.lighter-text}>Total:</span>
//           <span className={styles.main-color-text}>$2,229.97</span>
//         </div>
//       </div> 
  
//       <ul className={styles.shopping-cart-items}>
//         <li className={styles.clearfix}>
//           <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
//           <span className={styles.item-name}>Sony DSC-RX100M III</span>
//           <span className={styles.item-price}>$849.99</span>
//           <span className={styles.item-quantity}>Quantity: 01</span>
//         </li>
  
//         <li className={styles.clearfix}>
//           <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
//           <span className={styles.item-name}>KS Automatic Mechanic...</span>
//           <span className={styles.item-price}>$1,249.99</span>
//           <span className={styles.item-quantity}>Quantity: 01</span>
//         </li>
  
//         <li className={styles.clearfix}>
//           <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
//           <span className={styles.item-name}>Kindle, 6" Glare-Free To...</span>
//           <span className={styles.item-price}>$129.99</span>
//           <span className={styles.item-quantity}>Quantity: 01</span>
//         </li>
//       </ul>
  
//       <a href="#" className={styles.button}>Checkout</a>
//     </div> 
//   </div> 
//   </div>
//   )



}




export default cart