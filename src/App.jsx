import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import Home from './pages/Home'
import AllIssues from './pages/AllIssues'
import IssueDetails from './pages/IssueDetails'
import AddIssue from './pages/AddIssue'
import MyIssues from './pages/MyIssues'
import MyContributions from './pages/MyContributions'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import PrivateRoute from './routes/PrivateRoute'


export default function App(){
const [user, setUser] = useState(null)
const [toast, setToast] = useState({show:false, message:''})


function onLogin(u){ setUser(u); setToast({show:true, message:'Logged in'}) ; setTimeout(()=>setToast({show:false,message:''}), 2000) }
function onLogout(){ setUser(null); setToast({show:true, message:'Logged out'}); setTimeout(()=>setToast({show:false,message:''}),2000) }


return (
<div className="min-h-screen flex flex-col">
<Navbar isLoggedIn={!!user} currentUser={user} onLogout={onLogout} />
<main className="flex-grow">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/issues" element={<AllIssues/>} />
<Route path="/issues/:id" element={<IssueDetails/>} />
<Route path="/add" element={<PrivateRoute user={user}><AddIssue user={user}/></PrivateRoute>} />
<Route path="/my-issues" element={<PrivateRoute user={user}><MyIssues user={user}/></PrivateRoute>} />
<Route path="/contributions" element={<PrivateRoute user={user}><MyContributions user={user}/></PrivateRoute>} />
<Route path="/login" element={<Login onLogin={onLogin}/>} />
<Route path="/register" element={<Register/>} />
<Route path="*" element={<NotFound/>} />
</Routes>
</main>
<Footer />
<Toast show={toast.show} message={toast.message} />
</div>
)
}