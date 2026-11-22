import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: "Kissena Baked Goods" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700&family=IBM+Plex+Sans:wght@400;600;700&display=swap",
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header className="border-b border-edge bg-surface">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <Link to="/" className="font-display text-xl">
              Kissena Baked Goods
            </Link>
            <nav className="flex flex-wrap gap-6">
              <Link to="/"
                className="text-ink-soft hover:text-ink"
                activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
                activeOptions={{ exact: true }}>
                Home
              </Link>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
        <footer className="border-t border-edge">
          <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-ink-soft">
            <p>Kissena Baked Goods Inc., Astoria, Queens, New York</p>
            <p>© 20X5 Kissena Baked Goods Inc.</p>
            <p>A fictional company used for accounting examples.</p>
          </div>
        </footer>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
