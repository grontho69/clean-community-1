import React from 'react'
import { dummyIssues } from '../utils/helpers'
import { Link } from 'react-router-dom'


export default function AllIssues(){
const issues = dummyIssues.slice().reverse()
return (
<div className="pt-20 max-w-7xl mx-auto px-4 py-12">
<h1 className="text-3xl font-bold mb-8">All Reported Issues</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{issues.map(i => (
<div key={i.id} className="bg-white rounded-lg shadow">
<img src={i.imageUrl} alt="" className="w-full h-48 object-cover"/>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">{i.title}</h3>
<p className="text-gray-600 mb-2">{i.location}</p>
<div className="flex justify-between items-center">
<span className="font-bold text-green-700">${i.amount}</span>
<Link to={`/issues/${i.id}`} className="bg-green-600 text-white px-4 py-2 rounded">See Details</Link>
</div>
</div>
</div>
))}
</div>
</div>
)
}

