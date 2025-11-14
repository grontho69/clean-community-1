import React from 'react'
import { dummyIssues } from '../utils/helpers'
import { Link } from 'react-router-dom'


export default function Home(){
const recent = dummyIssues.slice().reverse().slice(0,6)
return (
<div className="pt-16">
<section className="bg-gray-900 text-white relative h-[520px]">
<img src={recent[0]?.imageUrl} alt="hero" className="w-full h-full object-cover opacity-50" />
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
<h1 className="text-4xl md:text-6xl font-bold mb-4">Report. Resolve. Rejuvenate.</h1>
<p className="text-lg md:text-2xl mb-8 max-w-3xl">Your eyes on the street, your voice for change.</p>
<Link to="/add" className="bg-green-600 text-white px-8 py-3 rounded-lg">Report an Issue</Link>
</div>
</section>


<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-3xl font-bold text-center mb-12">Issue Categories</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">Garbage</div>
<div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">Illegal Construction</div>
<div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">Broken Public Property</div>
<div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">Road Damage</div>
</div>
</div>
</section>


<section className="py-16">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-3xl font-bold text-center mb-12">Recent Complaints</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{recent.map(issue => (
<div key={issue.id} className="bg-white rounded-lg shadow overflow-hidden">
<img src={issue.imageUrl} alt="" className="w-full h-48 object-cover"/>
<div className="p-6">
<span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase mb-2">{issue.category}</span>
<h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
<p className="text-gray-600 text-sm mb-2">{issue.location}</p>
<p className="text-gray-600 text-sm h-16 overflow-hidden">{issue.description}</p>
</div>
</div>
))}
</div>
</div>
</section>
</div>
)
}