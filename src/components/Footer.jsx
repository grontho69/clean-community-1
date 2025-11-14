import React from 'react'
export default function Footer(){
return (
<footer className="bg-gray-800 text-gray-300 mt-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<div className="flex items-center space-x-2 mb-4">
<i className="fas fa-recycle text-3xl text-green-500"></i>
<span className="font-bold text-2xl text-white">Clean Community</span>
</div>
<p className="text-sm text-gray-400 max-w-xs">A platform for citizens to report local environmental and cleanliness issues.</p>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-4 uppercase">Useful Links</h3>
<ul className="space-y-2 text-gray-300">
<li><a href="#">Home</a></li>
<li><a href="#">All Issues</a></li>
<li><a href="#">Report an Issue</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-4 uppercase">Follow Us</h3>
<div className="flex space-x-4 mb-6 text-gray-400">
<i className="fab fa-facebook-f"></i>
<i className="fab fa-x-twitter"></i>
<i className="fab fa-instagram"></i>
</div>
<p className="text-sm text-gray-500">&copy; 2024 Clean Community. All rights reserved.</p>
</div>
</div>
</div>
</footer>
)
}