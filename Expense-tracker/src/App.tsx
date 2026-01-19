import React, { useState, useEffect } from 'react'

const App = () => {
  const [balance, setBalance] = useState(0)
  const [search, setSearch] = useState("")

  // Load balance from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem("balance")
    if (saved) {
      setBalance(JSON.parse(saved))
    }
  }, [])

  function addMoney(e) {
    e.preventDefault()   // stop page reload

    const newBalance = balance + Number(search)
    setBalance(newBalance)
    localStorage.setItem("balance", JSON.stringify(newBalance))
    setSearch("")
  }

  return (
    <div className='bg-gray-500 h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-6 text-white font-bold'>
      <h1 className='text-3xl'>Expense Tracker App</h1>

      {balance !== 0 ? (
        <>
          <h2 className='text-3xl'>Balance : {balance}</h2>
        </>
      ) : (
        <h3 className='text-3xl'>You don’t have money, add money</h3>
      )}

      <form onSubmit={addMoney} className='flex flex-col gap-4'>
        <input
          type="number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Enter amount'
          className='p-2 rounded-md text-black border-2'
        />
        <button type="submit" className='bg-blue-600 p-2 rounded-md'>
          Add money
        </button>
      </form>
    </div>
  )
}

export default App
