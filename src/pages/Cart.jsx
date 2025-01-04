import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/CartSice';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts)

    console.log('carts', totalAmount, itemCount, carts)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
    return (
        <div>
            {
                carts?.length > 0 ? <div>
                    {
                        carts?.map((cart, i) => {
                            return <CartComp key={i} cart={cart} />
                        })
                    }
                    <div className='font-bold flex items-center justify-end mt-10'>Toplam Tutar : <span className='text-xl text-red-500 ml-2'> {totalAmount} USD</span></div>
                </div> : <div>Sepetiniz boş</div>

            }
        </div>
    )
}

export default Cart
