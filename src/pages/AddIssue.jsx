import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyIssues } from '../utils/helpers'


export default function AddIssue({ user }){
const navigate = useNavigate()
const [form, setForm] = useState({ title: '', category: '', location: '', imageUrl: '', amount: '', description: '' })


function handleChange(e){ setForm(prev => ({...prev, [e.target.id]: e.target.value })) }
function submit(e){
e.preventDefault()
if(!user){ alert('Login required'); return }
const newIssue = { ...form, id: Date.now(), status: 'ongoing', date: new Date().toISOString().split('T')[0], reporterEmail: user.email, reporterName: user.name }
dummyIssues.push(newIssue)
navigate('/my-issues')
}


return (
<div className="pt-16 max-w-3xl mx-auto px-4 py-12">
<div className="bg-white p-8 rounded-lg shadow">
<h1 className="text-3xl font-bold mb-6">Report a New Issue</h1>
<form onSubmit={submit} className="space-y-4">
<input id="title" placeholder="Issue Title" value={form.title} onChange={handleChange} className="w-full"/>
<select id="category" value={form.category} onChange={handleChange} className="w-full">
<option value="">Select a category</option>
<option>Garbage</option>
<option>Illegal Construction</option>
<option>Broken Public Property</option>
<option>Road Damage</option>
</select>
<input id="location" placeholder="Location" value={form.location} onChange={handleChange} className="w-full"/>
<input id="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} className="w-full"/>
<input id="amount" type="number" placeholder="Suggested Fix Budget" value={form.amount} onChange={handleChange} className="w-full"/>
<textarea id="description" rows="4" placeholder="Description" value={form.description} onChange={handleChange} className="w-full"></textarea>
<div className="flex justify-end"><button className="bg-green-600 text-white px-4 py-2 rounded">Submit Report</button></div>
</form>
</div>
</div>
)
}