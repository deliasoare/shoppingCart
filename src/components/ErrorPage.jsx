import ErrorImg from '../assets/errorImg.png';

const ErrorPage = () => {
    return (
        <div className='errorText'>
            <p>Oops! There was an error.</p>
            <p>It appears that the page you're trying to access is either inexistent or in progess.</p>
            <p>In the meantime, here's a picture of a doggie 😀</p>
            <img src={ErrorImg} />
        </div>
    );
}

export default ErrorPage;