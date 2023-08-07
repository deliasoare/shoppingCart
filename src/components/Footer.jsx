
const Footer = () => {
    const backToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className="footer">
            <button className='topBtn' onClick={backToTop}>Back to top</button>
            <div className="footerInfo">
                <div className='aboutUs'>
                    <a href="" className="header aboutUsHeader"><b>A</b>bout us</a>
                    <a href="">Company info</a>
                    <a href="">Investors</a>
                    <a href="">Careers</a>
                    <a href="">Policies</a>
                </div>
                <div className='followUs'>
                    <a href="" className="header followUsHeader"><b>F</b>ollow us</a>
                    <a href="">Newsletter</a>
                    <a href="">TikTok</a>
                    <a href="">Instagram</a>
                    <a href="">Facebook</a>
                </div>
                <div className='help'>
                    <a href="" className="header helpHeader"><b>H</b>elp</a>
                    <a href="">My MT account</a>
                    <a href="">Shipping</a>
                    <a href="">Payment and invoices</a>
                    <a href="">Experiences</a>

                </div>
            </div>
            <div href='https://github.com/deliasoare' className='copyrightFooter'>
                <a href='https://github.com/deliasoare'>@deliasoare</a>
            </div>
        </div>
    );
}

export default Footer;