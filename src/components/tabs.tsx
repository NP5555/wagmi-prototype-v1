import Link from 'next/link'

export default function Tabs() {
  return (
    <div className="flex w-full flex-col gap-4 font-semibold">
      <Link href="/connect">
        <div className="border border-black shadow-black-400 shadow-xl px-4 py-6 duration-200 hover:bg-zinc-800/60">
          <h3 className="text-4xl">1. Connect wallets</h3>
        </div>
      </Link>
      <Link href="/read">
        <div className="border border-black shadow-black-400 shadow-xl px-4 py-6 duration-200 hover:bg-zinc-800/60">
          <h3 className="text-4xl">2. Read contracts.</h3>
        </div>
      </Link>
      <Link href="/write">
        <div className="border border-black shadow-black-400 shadow-xl px-4 py-6 duration-200 hover:bg-zinc-800/60">
          <h3 className="text-4xl">3. Send transactions to smart contracts.</h3>
        </div>
      </Link>
    </div>
  )
}
