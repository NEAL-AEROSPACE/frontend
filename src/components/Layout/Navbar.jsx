import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="NEAL Aerospace" className="h-10 mr-3" />
          <span className="text-xl font-bold">NEAL AEROSPACE</span>
        </div>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
          <Link to="/projects" className="hover:text-blue-300 transition-colors">Projects</Link>
          <Link to="/current-mission" className="hover:text-blue-300 transition-colors">Current Mission</Link>
          <Link to="/signup" className="hover:text-blue-300 transition-colors">Join Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;