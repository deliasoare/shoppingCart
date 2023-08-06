import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Items from './Items';
import ShoppingCart from './ShoppingCart';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />
        },
        {
            path: '/items',
            element: <Items />
        },
        {
            path: '/shoppingCart',
            element: <ShoppingCart />
        }
    ])

    return (
        <RouterProvider router={router} />
    );
}

export default Router;