import {useState, useEffect} from 'react'

import products from '../componentMoney/product.json'
import Header from '../componentMoney/Header'
import Product from '../componentMoney/Product'
import Basket from '../componentMoney/Basket'

function Money() {

	const [money, setMoney] = useState(100000000000)
	const [basket, setBasket] = useState([])
	const [total, setTotal] = useState(0)

	const resetBasket = () => {
		setBasket([])
        setMoney(100000000000);
	}

	useEffect(() => {
		setTotal(
			basket.reduce((acc, item) => {
				return acc + (item.amount * (products.find(product => product.id === item.id).price))
			}, 0),
		)
	}, [basket])

	return (
		<>
			<Header total={total} money={money}/>
			<div className="container products d-flex flex-wrap gap-3 mt-2">
				{products.map(product => (
					<Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product}/>
				))}
			</div>
			{total > 0 && (
				<Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />
			)}
		</>
	);
}

export default Money;