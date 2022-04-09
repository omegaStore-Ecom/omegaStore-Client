import React, {Fragment, useState} from 'react';
import CartProduct from 'src/layouts/CartLayout/CartProduct';
import MenuGlobal from 'src/layouts/navMenu/MenuGlobal';
import NavGlobal from 'src/layouts/navMenu/NavGlobal';
import {useAppSelector} from "../redux/hooks";

const Cart = () => {
    const [active, setActive] = useState(false);
    const cartItems = useAppSelector(state => state.cart.lineItems)
    return (
        <>
            <NavGlobal active={active} setActive={setActive}/>
            <div className="w-full h-screen flex justify-center bg-opacity-90 overflow-y-auto">
                <div
                    className="w-4/5 shadow-xl min-h-3/5 mt-28 lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 bg-white overflow-y-hidden rounded-lg">
                    <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 pt-3">Cart</p>
                    {
                        cartItems && cartItems.map((product) => (
                            <Fragment key={product.id}>
                                <CartProduct product={product}/>
                            </Fragment>
                        ))
                    }
                </div>

            </div>
            <MenuGlobal active={active} setActive={setActive}/>
        </>
    );
};

export default Cart;
