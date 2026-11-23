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
      <p className="mt-4 text-ink-soft">Amounts are whole US dollars.</p>
      <h2 className="font-display text-2xl mt-10 mb-3">Assets</h2>
      <div className="max-w-2xl mx-auto border border-edge rounded-md bg-surface overflow-x-auto">
        <table className="w-full">
          <thead><tr>
            <th scope="col" className="text-left px-5 py-3 bg-raised">Account</th>
            <th scope="col" className="text-right px-5 py-3 bg-raised">Amount (USD)</th>
          </tr></thead>
          <tbody>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge">Cash</th>
              <td id="bs-cash" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">210,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge">Accounts receivable</th>
              <td id="bs-accounts-receivable" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">150,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge">Inventory</th>
              <td id="bs-inventory" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">90,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge">Equipment and vehicles, net</th>
              <td id="bs-net-equipment" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">400,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Total assets</th>
              <td id="bs-total-assets" className="text-right px-5 py-3 border-t-4 border-double font-semibold bg-raised border-edge tabular-nums whitespace-nowrap">850,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="font-display text-2xl mt-10 mb-3">Liabilities</h2>
      <div className="max-w-2xl mx-auto border border-edge rounded-md bg-surface overflow-x-auto">
        <table className="w-full">
          <thead><tr>
            <th scope="col" className="text-left px-5 py-3 bg-raised">Account</th>
            <th scope="col" className="text-right px-5 py-3 bg-raised">Amount (USD)</th>
          </tr></thead>
          <tbody>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge">Accounts payable</th>
              <td id="bs-accounts-payable" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">120,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge">Notes payable</th>
              <td id="bs-notes-payable" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">230,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Total liabilities</th>
              <td id="bs-total-liabilities" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap font-semibold bg-raised">350,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="font-display text-2xl mt-10 mb-3">Stockholders' equity</h2>
      <div className="max-w-2xl mx-auto border border-edge rounded-md bg-surface overflow-x-auto">
        <table className="w-full">
          <thead><tr>
            <th scope="col" className="text-left px-5 py-3 bg-raised">Account</th>
            <th scope="col" className="text-right px-5 py-3 bg-raised">Amount (USD)</th>
          </tr></thead>
          <tbody>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge">Common stock</th>
              <td id="bs-common-stock" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">200,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge">Retained earnings</th>
              <td id="bs-retained-earnings" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap">300,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Total stockholders' equity</th>
              <td id="bs-total-equity" className="text-right px-5 py-3 border-t border-edge tabular-nums whitespace-nowrap font-semibold bg-raised">500,000</td>
            </tr>
            <tr>
              <th scope="row" className="text-left px-5 py-3 border-t border-edge font-semibold bg-raised">Total liabilities and stockholders' equity</th>
              <td id="bs-total-liabilities-equity" className="text-right px-5 py-3 border-t-4 border-double font-semibold bg-raised border-edge tabular-nums whitespace-nowrap">850,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
