import { Link, useParams } from 'react-router-dom';

import { BsArrowReturnLeft } from 'react-icons/bs';
const Item = () => {
    const id = useParams();
    console.log(id);
    return (
        <div className='itemSection'>
            <Link className='backButton' to='/items/'>
                <BsArrowReturnLeft /> Back
            </Link>
        </div>
    );
}


export default Item;