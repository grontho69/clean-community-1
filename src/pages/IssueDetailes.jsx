import React from 'react'
import { useParams } from 'react-router-dom'
import { dummyIssues, dummyContributions } from '../utils/helpers'


export default function IssueDetails(){
const { id } = useParams()
const issue = dummyIssues.find(i => String(i.id) === id)
const contributions = dummyContributions.filter(c => String(c.issueId) === String(issue?.id))
if(!issue) return <div className="pt-24 p-6">Issue not found</div>


return (
<div className="pt-16 max-w-5xl mx-auto px-4 py-12">
<div className="bg-white p-8 rounded-lg shadow mb-8 grid md:grid-cols-2 gap-8">
<img src={issue.imageUrl} alt="" className="w-full h-80 object-cover rounded"/>
<div>
<span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full">{issue.category}</span>
<h1 className="text-3xl font-bold mt-4">{issue.title}</h1>
<p className="text-gray-600 mt-2">{issue.location} • {new Date(issue.date).toLocaleDateString()}</p>
<p className="text-gray-700 mt-4">{issue.description}</p>
</div>
</div>


<div className="bg-white p-8 rounded-lg shadow">
<h2 className="text-2xl font-bold mb-4">Contributors</h2>
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50"><tr><th>Photo</th><th>Name</th><th>Amount</th></tr></thead>
<tbody>
{contributions.length === 0 ? (
<tr><td colSpan={3} className="text-center py-4">No contributions yet.</td></tr>
) : contributions.map(c => (
<tr key={c.id}><td><img src={c.contributorPhoto || 'https://placehold.co/100x100'} className="h-10 w-10 rounded-full"/></td><td>{c.contributorName}</td><td>${c.amount}</td></tr>
))}
</tbody>
</table>
</div>
</div>
</div>
)
}