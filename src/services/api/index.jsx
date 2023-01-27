const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_URL_VERSION;

const endPoints = {
    products: {
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        getAllProducts: `${API}/api/${VERSION}/products`,
        getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    },
    categories: {
        getCategories: `${API}/api/${VERSION}/categories`,
        getCategoriesProduct: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
    }
};

export default endPoints;
