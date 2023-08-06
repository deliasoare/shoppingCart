import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Items from './Items';
import ShoppingCart from './ShoppingCart';
import Item from './Item';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />
        },
        {
            path: '/items',
            element: <Items />,
        },
        {
            path: '/items/:id',
            element: <Item />
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