import { WalletOptions } from '@/components/wallet-options'
import { WalletInfo } from '@/components/wallet-info'

export default function Connect() {
  return (
    <div className="flex w-full min-h-screen flex-col bg-orange-400 items-center justify-center gap-8 p-8">
      <h3 className="text-4xl font-bold text-white">Connect Wallets</h3>
      <div className="flex flex-col items-center gap-5 w-full max-w-2xl">
        <div className="grid grid-flow-row grid-cols-2 gap-4 w-full">
          <WalletOptions />
        </div>
        <WalletInfo />
      </div>
    </div>
  )
}
