// frontend/app/layout.tsx
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-5xl px-4 py-3 flex gap-6">
            <div className="font-semibold">KALA</div>
            <nav className="flex gap-4 text-sm">
              <Link href="/today">Today</Link>
              <Link href="/tasks">Tasks</Link>
              <Link href="/availability">Availability</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
