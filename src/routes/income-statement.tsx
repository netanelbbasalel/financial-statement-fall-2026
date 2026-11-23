import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/income-statement")({
  head: () => ({ meta: [{ title: "Income Statement | Kissena Baked Goods" }] }),
  component: IncomeStatement,
})

function IncomeStatement() {
  return (
    <div>
      <p className="text-ink-soft">Kissena Baked Goods Inc.</p>
      <h1 className="font-display text-4xl">Income Statement</h1>
      <p className="mt-2 text-lg text-ink-soft">For the year ended December 31, 20X5</p>
      <p className="mt-4 text-ink-soft">Amounts are whole US dollars. Expenses are deductions shown in parentheses. This example assumes no other income, expenses, interest, or income taxes.</p>
      <div className="max-w-2xl mx-auto mt-6 border border-edge rounded-md bg-surface overflow-x-auto">
        <table className="w-full">
          <thead><tr>
            <th scope="col" className="text-left px-5 py-3 bg-raised border-t border-edge">Account</th>
            <th scope="col" className="text-right px-5 py-3 bg-raised border-t border-edge">Amount (USD)</th>
          </tr></thead>
          <tbody>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge">Net sales</th>
              <td id="is-net-sales" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">$1,500,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge">Cost of goods sold</th>
              <td id="is-cogs" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">(600,000)</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Gross profit</th>
              <td id="is-gross-profit" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap font-semibold bg-raised">900,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge">Selling, general, and administrative expenses</th>
              <td id="is-sga" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">(670,000)</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Net income</th>
              <td id="is-net-income" className="text-right px-5 py-3 border-t-4 border-double font-semibold bg-raised border-edge tabular-nums whitespace-nowrap">$230,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
