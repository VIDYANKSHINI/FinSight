export const business = {
  name: "Sharma Kirana Store",
  owner: "Rajesh Sharma",
  type: "Retail / Kirana",
  location: "Nashik, Maharashtra",
  healthScore: 78,
}

// Cash flow: historical (actual) + forecast, in ₹ thousands
export const cashFlowSeries = [
  { label: "Jan", actual: 62, forecast: null },
  { label: "Feb", actual: 68, forecast: null },
  { label: "Mar", actual: 71, forecast: null },
  { label: "Apr", actual: 66, forecast: null },
  { label: "May", actual: 74, forecast: null },
  { label: "Jun", actual: 80, forecast: 80 },
  { label: "Jul", actual: null, forecast: 84 },
  { label: "Aug", actual: null, forecast: 79 },
  { label: "Sep", actual: null, forecast: 88 },
]

export const forecastRanges = [
  { period: "30 Days", value: "₹84,200", change: "+5.2%", trend: "up" as const, confidence: 94 },
  { period: "60 Days", value: "₹79,400", change: "-1.8%", trend: "down" as const, confidence: 88 },
  { period: "90 Days", value: "₹88,600", change: "+10.7%", trend: "up" as const, confidence: 82 },
]

export const overviewStats = [
  { label: "Current Balance", value: "₹1,24,500", change: "+8.4%", trend: "up" as const },
  { label: "30-Day Forecast", value: "₹84,200", change: "+5.2%", trend: "up" as const },
  { label: "Health Score", value: "78/100", change: "+6 pts", trend: "up" as const },
  { label: "Active Risks", value: "2", change: "1 new", trend: "down" as const },
]

export const revenueBreakdown = [
  { name: "Groceries", value: 48, color: "#ec4899" },
  { name: "Dairy", value: 24, color: "#a855f7" },
  { name: "Household", value: 18, color: "#38bdf8" },
  { name: "Other", value: 10, color: "#64748b" },
]

export const risks = [
  {
    id: 1,
    title: "Cash shortage likely in August",
    severity: "high" as const,
    date: "Predicted for Aug 12",
    explanation:
      "Forecasted inflows drop 6% while supplier payments cluster mid-month. Model confidence 88%.",
  },
  {
    id: 2,
    title: "Seasonal revenue dip (monsoon)",
    severity: "medium" as const,
    date: "Jul – Aug",
    explanation:
      "Historical monsoon patterns and weather data indicate a 9% average footfall decline in this period.",
  },
  {
    id: 3,
    title: "Repayment capacity stable",
    severity: "low" as const,
    date: "Ongoing",
    explanation:
      "Debt-to-income ratio at 0.28 with consistent UPI inflows. No repayment stress detected.",
  },
]

export const healthSubScores = [
  { label: "Cash Flow Stability", value: 82 },
  { label: "Revenue Growth", value: 74 },
  { label: "Repayment History", value: 88 },
  { label: "Expense Control", value: 66 },
]

export const improvementAreas = [
  "Reduce inventory holding during monsoon by 12%",
  "Build a 3-week cash buffer before August",
  "Digitize 100% of sales to strengthen credit profile",
]

export const recommendations = [
  {
    id: 1,
    title: "Build an August cash buffer",
    priority: "High" as const,
    savings: "₹18,000",
    desc: "Set aside ₹6,000/week for the next 3 weeks to safely cover the predicted mid-August shortfall.",
  },
  {
    id: 2,
    title: "Negotiate supplier payment terms",
    priority: "Medium" as const,
    savings: "₹9,500",
    desc: "Shift dairy supplier payments from weekly to bi-weekly to smooth out cash outflows.",
  },
  {
    id: 3,
    title: "Apply for a working capital loan",
    priority: "Medium" as const,
    savings: "₹0",
    desc: "Your health score qualifies you for a pre-approved ₹1.5L loan at 11.5% from partner NBFCs.",
  },
  {
    id: 4,
    title: "Enroll in PM-KISAN linked scheme",
    priority: "Low" as const,
    savings: "₹6,000",
    desc: "You are eligible for a government subsidy scheme that supplements seasonal income.",
  },
]

export const reports = [
  { id: 1, title: "Financial Report", desc: "Full cash flow, revenue & expense summary", updated: "Jul 18, 2026" },
  { id: 2, title: "Loan Report", desc: "Eligibility, credit profile & repayment capacity", updated: "Jul 18, 2026" },
  { id: 3, title: "Risk Report", desc: "Detected risks, timeline & AI explanations", updated: "Jul 17, 2026" },
]

export const notifications = [
  {
    id: 1,
    type: "Weather Alert",
    title: "Heavy monsoon expected next week",
    desc: "Expect reduced footfall Jul 24–28. Plan inventory accordingly.",
    time: "2h ago",
    tone: "warning" as const,
  },
  {
    id: 2,
    type: "Cash Shortage",
    title: "Predicted shortfall on Aug 12",
    desc: "Projected balance dips below safe threshold. Build a buffer now.",
    time: "5h ago",
    tone: "danger" as const,
  },
  {
    id: 3,
    type: "Government Scheme",
    title: "New subsidy scheme available",
    desc: "You are eligible for the state MSME interest subvention scheme.",
    time: "1d ago",
    tone: "info" as const,
  },
  {
    id: 4,
    type: "Loan Eligible",
    title: "Pre-approved for ₹1.5L working capital",
    desc: "Your health score improved to 78. Tap to view partner offers.",
    time: "2d ago",
    tone: "success" as const,
  },
]
