import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyUsers } from '../utils/helpers'


export default function Login({ onLogin }){
const [email, setEmail] = useState('user@example.com')
const [password, setPassword] = useState('Password123')
const navigate = useNavigate()


function submit(e){
e.preventDefault()
const found = dummyUsers.find(u => u.email === email)
if(found){ onLogin(found); navigate('/') } else { alert('Invalid credentials') }
}


return (
<div className="pt-16 min-h-[80vh] flex items-center justify-center">
<div className="max-w-md w-full bg-white p-8 rounded shadow">
<h2 className="text-2xl font-bold mb-4">Log in to your account</h2>
<form onSubmit={submit} className="space-y-4">
<input value={email} onChange={e=>setEmail(e.target.value)} className="w-full"/>
<input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="w-full"/>
<button className="w-full bg-green-600 text-white py-2 rounded">Log in</button>
</form>
</div>
</div>
)
}

