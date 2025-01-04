import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const query = new URLSearchParams(useLocation().search).get('query');
    const products = useSelector(state => state.products.items || []);
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    ) || [];

    return (
        <div>
            <div>
                {filteredProducts.length > 0 ? (
                    <ul>
                        {filteredProducts.map(product => (
                            <li key={product.id}>
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='mt-10 font-bold text-red-500'>Hiç ürün bulunamadı.</p>
                )}
            </div>
        </div>

    );
};

export default SearchPage;
