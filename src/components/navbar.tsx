import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="flex h-20 items-center justify-center px-6">
      <Link href="/">
        <h2 className="text-2xl font-semibold">wagmi-prototype-v1</h2>
      </Link>
      <div className="flex gap-6 text-xl">
        {/* <Link
          href="/connect"
          className="px-3 py-1 duration-200 hover:bg-zinc-800/40"
        >
          Connect
        </Link>
        <Link
          href="/read"
          className="px-3 py-1 duration-200 hover:bg-zinc-800/40"
        >
          Read
        </Link>
        <Link
          href="/write"
          className="px-3 py-1 duration-200 hover:bg-zinc-800/40"
        >
          Write
        </Link> */}
      </div>
    </header>
  )
}
