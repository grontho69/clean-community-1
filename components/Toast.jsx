import React from 'react'
export default function Toast({ message, show }){
if(!show) return null
return (
<div className="fixed top-20 right-5 z-50">
<div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg p-4">
<p className="text-sm text-gray-700">{message}</p>
</div>
</div>
)
}