import React from 'react'
import { useState } from 'react'

const App = () => {
  const [balence, setBalence] = useState(0)
  const [search, setSearch] = useState("")
  function addMoney(amt) {
    const amount = localStorage.getItem("balence")
    if (amount) {
      setBalence(Number(amount)+amt)
      localStorage.setItem("balence", JSON.stringify(Number(amount)+amt))
      setSearch("")
    }
    else {
      setBalence(balence + amt)
      localStorage.setItem("balence", JSON.stringify(balence + amt))
      setSearch("")
    }
  }
  return (
    <div className='bg-gray-500 h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-6 text-white  font-bold'>
      <h1 className='text-3xl'>Expense Tracker App</h1>
      {(balence != 0) ? (
        <>
            <h2 className='text-3xl'>Balence-0 : {balence}</h2>
           <form action="submit" className='flex flex-col gap-4'>
            <input type="number" onChange={(e) => setSearch(Number(e.target.value))} placeholder='Enter amount' className='p-2 rounded-md text-black border-2' />
            <button type="submit" onClick={() => addMoney(search)}>Add money</button>
          </form>
        </>
      ) : (
        <>
          <h3 className='text-3xl'>You dont have money,add money</h3>
          <form action="submit" className='flex flex-col gap-4'>
            <input type="number" onChange={(e) => setSearch(Number(e.target.value))} placeholder='Enter amount' className='p-2 rounded-md text-black border-2' />
            <button type="submit" onClick={() => addMoney(search)}>Add money</button>
          </form>
        </>
      )
      }
    </div>
  )
}

export default App