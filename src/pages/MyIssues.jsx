import React from 'react'
import { dummyIssues } from '../utils/helpers'


export default function MyIssues({ user }){
const myIssues = dummyIssues.filter(i => i.reporterEmail === user?.email)
return (
<div className="pt-16 max-w-7xl mx-auto px-4 py-12">
<h1 className="text-3xl font-bold mb-6">My Reported Issues</h1>
<div className="bg-white p-6 rounded shadow overflow-x-auto">
<table className="min-w-full">
<thead><tr><th>Title</th><th>Category</th><th>Status</th><th>Budget</th><th>Actions</th></tr></thead>
<tbody>
{myIssues.length === 0 ? (
<tr><td colSpan={5} className="text-center py-4">You have not reported any issues.</td></tr>
) : myIssues.map(i => (
<tr key={i.id}><td>{i.title}</td><td>{i.category}</td><td>{i.status}</td><td>${i.amount}</td><td>—</td></tr>
))}
</tbody>
</table>
</div>
</div>
)
}

