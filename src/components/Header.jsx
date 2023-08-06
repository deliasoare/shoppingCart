import { useState, useEffect } from 'react';

import HeaderContent from './HeaderContent';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0)
                setIsScrolled(true);
            else 
                setIsScrolled(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            { isScrolled ? (
                <div className="scrolledHeader"> 
                    <HeaderContent />
                </div>
            ) : (
                <div className="unscrolledHeader"> 
                    <HeaderContent />
                 </div>
            )}
        </>
    );

}

export default Header;