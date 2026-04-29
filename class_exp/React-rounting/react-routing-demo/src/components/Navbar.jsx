function Navbar(){
import About from './About';
import Contact from './conact';

    return (
        <nav>
            <link to ="/">Home</link> |
             <link to ="/About">About</link> |
            <link to ="/conact">Contact</link>
        </nav>
    );
}
export default Navbar ;