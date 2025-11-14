import jsPDF from 'jspdf'
import 'jspdf-autotable'


export function generateContributionReport(contrib){
const doc = new jsPDF()
doc.text('Contribution Receipt', 14, 20)
doc.autoTable({
head: [['Field', 'Value']],
body: [
['Issue Title', contrib.issueTitle],
['Contributor', contrib.contributorName],
['Email', contrib.contributorEmail],
['Amount', `$${contrib.amount}`],
['Date', contrib.date]
]
})
doc.save(`contribution-${contrib.id || 'report'}.pdf`)
}