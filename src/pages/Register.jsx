import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Register(){
const [form, setForm] = useState({name:'', email:'', photo:'', password:''})
const navigate = useNavigate()
function submit(e){ e.preventDefault(); if(form.password.length<6||!/[A-Z]/.test(form.password)||!/[a-z]/.test(form.password)){ alert('Password rules'); return } alert('Registered — use login to continue'); navigate('/login') }
return (
<div className="pt-16 min-h-[80vh] flex items-center justify-center">
<div className="max-w-md w-full bg-white p-8 rounded shadow">
<h2 className="text-2xl font-bold mb-4">Create a new account</h2>
<form onSubmit={submit} className="space-y-4">
<input placeholder="Full Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full"/>
<input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full"/>
<input placeholder="Photo URL" value={form.photo} onChange={e=>setForm({...form,photo:e.target.value})} className="w-full"/>
<input placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} type="password" className="w-full"/>
<button className="w-full bg-green-600 text-white py-2 rounded">Register</button>
</form>
</div>
</div>
)
}