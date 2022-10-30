import {Link} from 'react-router-dom'
// the above is for react to intercept with the href requests to the server 
const Navbar = () => {
    // sfc then tab creates a nameless function
    // some inline styling
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/create" style = {{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</Link>
                {/* the curly brackets inside is where the actual styling goes
                but it can be an object where the key is the style type and the 
                value is what we apply to that particular component. */}
            </div>
        </nav>
    );
}
 
export default Navbar;