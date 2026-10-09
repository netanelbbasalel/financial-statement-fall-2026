import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to Casina Baked Goods</h1>
      <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
      <p className="mt-10 mx-8 text-xl text-green-300">
        Casina Baked Goods is a new company. 2025 was our first full year of
        operations. This website will share our financial statements with
        investors.
      </p>
    </div>
  )
}