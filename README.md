
# 🚀 Wagmi-Prototype-V1

An advanced **Next.js + Wagmi** project to interact with Ethereum smart contracts. This project allows users to read balances from Ethereum addresses and ERC-20 tokens using the Wagmi library.

---

## 🛠️ **Tech Stack**

- **Next.js** - React framework for server-side rendering
- **Wagmi** - Ethereum React Hooks
- **Viem** - Ethereum library for encoding/decoding
- **Tailwind CSS** - Modern UI styling

---

## 🔧 **Installation & Setup**

1️⃣ **Clone the repository**

```bash
  git clone https://github.com/NP5555/wagmi-prototype-v1.git
  cd wagmi-prototype-v1
```

2️⃣ **Install dependencies**

```bash
  npm install   # or yarn install
```

3️⃣ **Set up environment variables**

Create a `.env.local` file in the root directory and add the required API keys:

```bash
NEXT_PUBLIC_ALCHEMY_API_KEY=your-alchemy-api-key
NEXT_PUBLIC_WALLET_PRIVATE_KEY=your-wallet-private-key
```

4️⃣ **Run the development server**

```bash
  npm run dev   # or yarn dev
```

🚀 The project will be live at: [http://localhost:3000](http://localhost:3000)

---

## 📖 **Usage**

### 🔹 Read from Ethereum & ERC-20 Contracts

The `Read` component fetches balances using **wagmi hooks**:

```tsx
const {
  data: userBalance,
  refetch: refetchBalance,
} = useBalance({
  address: VITALIK_ADDRESS,
})

const {
  data: tokenBalance,
  refetch: refetchTokens,
} = useReadContract({
  abi: ercAbi,
  address: ERC_TOKEN_ADDRESS,
  functionName: 'balanceOf',
  args: [VITALIK_ADDRESS],
})
```

To fetch balances, use:

```tsx
<button onClick={() => refetchBalance()}>
  Get ETH Balance
</button>
```

```tsx
<button onClick={() => refetchTokens()}>
  Get ERC20 Token Balance
</button>
```

---

## 🔑 **Environment Variables (Keys)**

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_ALCHEMY_API_KEY` | Alchemy API key for Ethereum data |
| `NEXT_PUBLIC_WALLET_PRIVATE_KEY` | Private key for interacting with the blockchain |

⚠️ **Never expose private keys in frontend applications!**

---

## 👤 **Project Owner**

- **GitHub:** [NP5555](https://github.com/NP5555)

---

## 📜 **License**

This project is licensed under the MIT License.

---

Happy coding! 🚀