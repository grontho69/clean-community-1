// Dummy data extracted/modded from your HTML. Replace with API calls later.
export const dummyUsers = [
{ id: 1, name: 'Demo User', email: 'user@example.com', photoURL: 'https://placehold.co/100x100/A0AEC0/FFFFFF?text=User' },
{ id: 2, name: 'Jane Doe', email: 'jane@example.com', photoURL: 'https://placehold.co/100x100/E9D8FD/4A5568?text=JD' }
]


export const dummyIssues = [
{ id: 1, title: 'Overflowing dumpster at park', category: 'Garbage', location: 'Central Park', description: 'The main dumpster is overflowing.', imageUrl: 'https://placehold.co/600x400/FEE2E2/B91C1C?text=Overflowing+Garbage', amount: 50, status: 'ongoing', date: '2024-11-01', reporterEmail: 'user@example.com', reporterName: 'Demo User' },
{ id: 2, title: 'Broken Footpath', category: 'Road Damage', location: '123 Main Street', description: 'A large crack', imageUrl: 'https://placehold.co/600x400/FEF3C7/D97706?text=Broken+Footpath', amount: 150, status: 'ongoing', date: '2024-11-03', reporterEmail: 'jane@example.com', reporterName: 'Jane Doe' }
]


export const dummyContributions = [
{ id: 1, issueId: 2, issueTitle: 'Broken Footpath', issueCategory: 'Road Damage', amount: 25, contributorName: 'Demo User', contributorEmail: 'user@example.com', date: '2024-10-29' }
]