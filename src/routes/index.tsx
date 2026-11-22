import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to Kissena Baked Goods</h1>
        <p>Financial statements</p>
      </header>
      <p>
        Kissena Baked Goods is a bakery in Astoria, Queens, New York.
        It sells a wholesale line and accepts custom cake orders, including weddings.
      </p>
      <p>
        Kissena Baked Goods Inc. incorporated in New York State in late 20X4
        and opened in January 20X5. It has three ovens, four delivery vans,
        and 14 staff members.
      </p>
      <h2>What we bake</h2>
      <ul className="list-disc pl-6">
        <li>Sourdough, semolina, and rye loaves</li>
        <li>Kaiser rolls, hero bread, and dinner rolls</li>
        <li>Croissants, danishes, and morning pastry</li>
        <li>Cheesecake, black and white cookies, and sheet cakes</li>
        <li>Seasonal orders, including hot cross buns and tsoureki</li>
      </ul>
    </div>
  )
}
