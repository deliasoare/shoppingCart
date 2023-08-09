import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import {Items, Item} from './components/Items';
import ShoppingCart from './components/ShoppingCart';

const Router = () => {
    const router = createBrowserRouter([
        {
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: '/items',
                    element: <Items />,
                },
                {
                    path: '/items/:category',
                    element: <Items />
                },
                {
                    path: '/item/:id',
                    element: <Item />
                },
                {
                    path: '/shoppingCart',
                    element: <ShoppingCart />
                }
            ]
        }
        
    ])

    return (
        <RouterProvider router={router} />
    );
}

export default Router;