import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
      <header className="pb-6 border-b border-edge">
        <h1 className="font-display text-4xl">Welcome to Kissena Baked Goods</h1>
        <p className="mt-2 text-ink-soft">Financial statements</p>
      </header>
      <p className="mt-6">
        Kissena Baked Goods is a bakery in{" "}
        <a href="https://en.wikipedia.org/wiki/Astoria,_Queens"
           target="_blank" rel="noopener noreferrer" className="underline">
          Astoria, Queens, New York
        </a>. It sells a wholesale line and accepts custom cake orders, including weddings.
        {" "}<span>(The location link opens a new tab.)</span>
      </p>
      <p className="mt-4">
        Kissena Baked Goods Inc. incorporated in New York State in late 20X4
        and opened in January 20X5. It has three ovens, four delivery vans,
        and 14 staff members.
      </p>
      <figure className="mt-8 max-w-xl border border-edge rounded-md bg-surface p-4">
        <svg viewBox="0 0 400 200" role="img" aria-label="Loaves of bread on oven racks" className="w-full h-auto">
          <rect x="8" y="8" width="384" height="184" rx="10" fill="none" stroke="#8798ad" strokeWidth="2" />
          <line x1="50" y1="30" x2="50" y2="180" stroke="#3399ff" strokeWidth="5" />
          <line x1="350" y1="30" x2="350" y2="180" stroke="#3399ff" strokeWidth="5" />
          <line x1="50" y1="75" x2="350" y2="75" stroke="#d5deea" strokeWidth="3" />
          <line x1="50" y1="125" x2="350" y2="125" stroke="#d5deea" strokeWidth="3" />
          <line x1="50" y1="175" x2="350" y2="175" stroke="#d5deea" strokeWidth="3" />
          <ellipse cx="110" cy="58" rx="34" ry="16" fill="#f3e3b5" /><path d="M96 50 l6 -4 M108 49 l6 -4 M120 50 l6 -4" stroke="#d9714e" strokeWidth="2" strokeLinecap="round" /><ellipse cx="200" cy="58" rx="34" ry="16" fill="#f3e3b5" /><path d="M186 50 l6 -4 M198 49 l6 -4 M210 50 l6 -4" stroke="#d9714e" strokeWidth="2" strokeLinecap="round" /><ellipse cx="290" cy="58" rx="34" ry="16" fill="#f3e3b5" /><path d="M276 50 l6 -4 M288 49 l6 -4 M300 50 l6 -4" stroke="#d9714e" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="155" cy="108" rx="34" ry="16" fill="#f3e3b5" /><path d="M141 100 l6 -4 M153 99 l6 -4 M165 100 l6 -4" stroke="#d9714e" strokeWidth="2" strokeLinecap="round" /><ellipse cx="245" cy="108" rx="34" ry="16" fill="#f3e3b5" /><path d="M231 100 l6 -4 M243 99 l6 -4 M255 100 l6 -4" stroke="#d9714e" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="110" cy="158" rx="34" ry="16" fill="#f3e3b5" /><path d="M96 150 l6 -4 M108 149 l6 -4 M120 150 l6 -4" stroke="#d9714e" strokeWidth="2" strokeLinecap="round" /><ellipse cx="290" cy="158" rx="34" ry="16" fill="#f3e3b5" /><path d="M276 150 l6 -4 M288 149 l6 -4 M300 150 l6 -4" stroke="#d9714e" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </figure>
      <h2 className="font-display text-2xl mt-10 mb-3">What we bake</h2>
      <ul className="list-disc pl-6 space-y-1 text-ink-soft">
        <li>Sourdough, semolina, and rye loaves</li>
        <li>Kaiser rolls, hero bread, and dinner rolls</li>
        <li>Croissants, danishes, and morning pastry</li>
        <li>Cheesecake, black and white cookies, and sheet cakes</li>
        <li>Seasonal orders, including hot cross buns and tsoureki</li>
      </ul>
      <h2 className="font-display text-2xl mt-10 mb-3">How a wholesale order is completed</h2>
      <ol className="list-decimal pl-6 space-y-1 text-ink-soft">
        <li>A customer places a wholesale order.</li>
        <li>The manager prepares a bake sheet.</li>
        <li>Bakers prepare and bake the ordered goods.</li>
        <li>Drivers deliver the goods to the customer.</li>
        <li>The accountant records the credit sale and accounts receivable.</li>
      </ol>
      <h2 className="font-display text-2xl mt-10 mb-3">The year in brief</h2>
      <p className="text-ink-soft">
        In 20X5, net sales were $1,500,000 and net income was $230,000.
        These illustrative financial statements describe the year ended December 31, 20X5.
      </p>
    </div>
  )
}
