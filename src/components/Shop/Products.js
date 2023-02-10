import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
	{
		id: "p1",
		price: 6,
		title: "My first Book",
		description: "The first book of my life",
	},
	{
		id: "p2",
		price: 12.5,
		title: "A grande arte de meter o foda-se",
		description: "Um grande livro brasileiro de como meter o foda-se",
	},
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						id={product.id}
            key={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
