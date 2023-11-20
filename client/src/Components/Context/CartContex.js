import React, { createContext, useState } from "react";

const CartContext=createContext();

const CartProvider =({children})=>{
        const [cart,setCart]=useState([])

        //CART FUNCTION
        const addToCart =(product,id)=>{
            //console.log(`add ${product.title} cart`)
            const newItem = {...product,amount:1}

            //if product is already in cart
            const cartItem = cart.find((item)=>{
                return item.id ===id
            }) 
            if(cartItem){
                const newCart =[...cart].map((item)=>{
                    if(item.id === id){
                        return {...item, amount: newItem.amount +1}
                    }
                    else{
                        return {...item}
                    }
                })
                setCart(newCart)
            }
            else{
                return setCart([...cart,newItem])
            }
            console.log(cart)
        }
        //REMOVE FROM CART
        const removeCart =(id)=>{
            const updateCart = cart.filter((item)=>{
                return item.id !== id
            })
            setCart(updateCart)
        }

        //INCREASE BUTTON
        const increaseProduct =(id)=>{
             const cartItem = cart.find((item)=> item.id === id)
             if(cartItem){
                const updatedCart =cart.map((item)=>{
                    if(item.id ===id){
                        return {...item,amount:item.amount + 1}
                    }
                })
                setCart(updatedCart)
             } 
        }

        //DECREASE BUTTON
        const decreaseButton =(id)=>{
           const cartItem= cart.find((item)=> item.id ===id)
           if(cartItem){
            const updatedCart=cart.map((item)=>{
                if(item.id ===id && item.amount >1){
                    return {...item,amount:item.amount -1}
                }
                else{
                    return{...item}
                }
            })
            setCart(updatedCart)
           } 
        }
    return(
        <CartContext.Provider value={{addToCart,cart,removeCart,increaseProduct,decreaseButton}}>
            {children}
        </CartContext.Provider>
    )
}

export{CartContext,CartProvider}