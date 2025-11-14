import React from 'react'
import { dummyContributions } from '../utils/helpers'
import { generateContributionReport } from '../utils/generateReport'


export default function MyContributions({ user }){
const myContribs = dummyContributions.filter(c => c.contributorEmail === user?.email)
return (
<div className="pt-16 max-w-7xl mx-auto px-4 py-12">
<h1 className="text-3xl font-bold mb-6">My Contributions</h1>
<div className="bg-white p-6 rounded shadow overflow-x-auto">
<table className="min-w-full">
<thead><tr><th>Issue Title</th><th>Category</th><th>Date</th><th>Paid</th><th>Action</th></tr></thead>
<tbody>
{myContribs.length === 0 ? (
<tr><td colSpan={5} className="text-center py-4">You have not made any contributions.</td></tr>
) : myContribs.map(c => (
<tr key={c.id}><td>{c.issueTitle}</td><td>{c.issueCategory}</td><td>{c.date}</td><td>${c.amount}</td><td><button onClick={() => generateContributionReport(c)}>Download</button></td></tr>
))}
</tbody>
</table>
</div>
</div>
)
}