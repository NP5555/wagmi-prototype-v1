'use client'
import { useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  return connectors.map((connector) => (
    <button
      key={connector.uid}
      onClick={() => connect({ connector })}
      className="rounded-lg border border-black px-8 py-2 duration-200 hover:border hover:bg-zinc-800/40"
    >
      {connector.name}
    </button>
  ))
}
