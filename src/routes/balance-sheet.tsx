import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/balance-sheet")({
  head: () => ({ meta: [{ title: "Balance Sheet | Kissena Baked Goods" }] }),
  component: BalanceSheet,
})

function BalanceSheet() {
  return (
    <div>
      <p className="text-ink-soft">Kissena Baked Goods Inc.</p>
      <h1 className="font-display text-4xl">Balance Sheet</h1>
      <p className="mt-2 text-lg text-ink-soft">December 31, 20X5</p>
      <p className="mt-4 text-ink-soft">Amounts are whole US dollars. Equipment and vehicles are reported net of accumulated depreciation.</p>
      <div className="max-w-2xl mx-auto mt-6 border border-edge rounded-md bg-surface overflow-x-auto">
        <table className="w-full">
          <caption className="text-left px-5 py-3 font-semibold bg-raised">Assets</caption>
          <thead><tr>
            <th scope="col" className="text-left px-5 py-3 bg-raised border-t border-edge">Account</th>
            <th scope="col" className="text-right px-5 py-3 bg-raised border-t border-edge">Amount (USD)</th>
          </tr></thead>
          <tbody>
            <tr>
              <th scope="colgroup" colSpan={2} className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Current assets</th>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge pl-10">Cash</th>
              <td id="bs-cash" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">$200,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge pl-10">Accounts receivable</th>
              <td id="bs-accounts-receivable" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">150,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge pl-10">Inventory</th>
              <td id="bs-inventory" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">50,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Total current assets</th>
              <td id="bs-total-current-assets" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap font-semibold bg-raised">400,000</td>
            </tr>
            <tr>
              <th scope="colgroup" colSpan={2} className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Property and equipment</th>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge pl-10">Equipment and vehicles, net</th>
              <td id="bs-net-equipment" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">400,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Total assets</th>
              <td id="bs-total-assets" className="text-right px-5 py-3 border-t-4 border-double font-semibold bg-raised border-edge tabular-nums whitespace-nowrap">$800,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-ink-soft">Retained earnings equals this example's net income because beginning retained earnings is zero, no dividends are paid, and no other retained earnings adjustments occur.</p>
      <div className="max-w-2xl mx-auto mt-6 border border-edge rounded-md bg-surface overflow-x-auto">
        <table className="w-full">
          <caption className="text-left px-5 py-3 font-semibold bg-raised">Liabilities and stockholders' equity</caption>
          <thead><tr>
            <th scope="col" className="text-left px-5 py-3 bg-raised border-t border-edge">Account</th>
            <th scope="col" className="text-right px-5 py-3 bg-raised border-t border-edge">Amount (USD)</th>
          </tr></thead>
          <tbody>
            <tr>
              <th scope="colgroup" colSpan={2} className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Liabilities</th>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge pl-10">Accounts payable</th>
              <td id="bs-accounts-payable" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">$70,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Total liabilities</th>
              <td id="bs-total-liabilities" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap font-semibold bg-raised">70,000</td>
            </tr>
            <tr>
              <th scope="colgroup" colSpan={2} className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Stockholders' equity</th>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge pl-10">Common stock</th>
              <td id="bs-common-stock" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">500,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge pl-10">Retained earnings</th>
              <td id="bs-retained-earnings" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">230,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Total equity</th>
              <td id="bs-total-equity" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap font-semibold bg-raised">730,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Total liabilities and equity</th>
              <td id="bs-total-liabilities-equity" className="text-right px-5 py-3 border-t-4 border-double font-semibold bg-raised border-edge tabular-nums whitespace-nowrap">$800,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-ink-soft">The displayed totals are typed. Recalculate $70,000 plus $730,000 and compare the $800,000 result with total assets. This page does not perform that calculation.</p>
    </div>
  )
}
