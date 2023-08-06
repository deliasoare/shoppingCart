import { Link, useParams } from 'react-router-dom';

const Item = () => {
    const id = useParams();
    console.log(id);
    return (
        <>
            <p>Shopping Item { id.id }</p>
            <p>
                <Link to="/items">Back</Link>
            </p>
        </>
    );
}

export default Item;