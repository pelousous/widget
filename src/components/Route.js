import { useEffect, useState } from 'react';

const Route = ({path, children}) => {
    const [currentLocationPath, setCurrentLocationPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentLocationPath(window.location.pathname);
        }
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate',onLocationChange);
        }
    }, []);

    return currentLocationPath === path ? children : null;
}

export default Route;