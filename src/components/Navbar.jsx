import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar({ isLoggedIn, currentUser, onLogout }) {
return (
<nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<Link to="/" className="flex items-center space-x-2">
<i className="fas fa-recycle text-2xl text-green-600"></i>
<span className="font-bold text-xl">Clean Community</span>
</Link>
</div>


<div className="hidden md:flex md:items-center md:space-x-4">
<Link to="/" className="text-gray-600 hover:text-green-700">Home</Link>
<Link to="/issues" className="text-gray-600 hover:text-green-700">All Issues</Link>
{isLoggedIn ? (
<>
<Link to="/add" className="text-gray-600 hover:text-green-700">Add Issue</Link>
<Link to="/my-issues" className="text-gray-600 hover:text-green-700">My Issues</Link>
<Link to="/contributions" className="text-gray-600 hover:text-green-700">My Contribution</Link>
<div className="relative">
<button className="ml-4" onClick={onLogout} title="Logout">Logout</button>
</div>
</>
) : (
<>
<Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-lg">Login</Link>
<Link to="/register" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Register</Link>
</>
)}
</div>


<div className="md:hidden">
{/* Mobile menu can be wired later */}
<button className="text-gray-600"><i className="fas fa-bars"></i></button>
</div>
</div>
</div>
</nav>
)
}