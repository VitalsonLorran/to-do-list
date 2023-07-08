"use client"

import { useState } from "react"

export default function Home() {

  const [ itemInput, setItemInput] = useState('')


  return(
    <div className="flex flex-col items-center">
      
      <div className="py-3 text-3xl">Lista de tarefas</div>
      
      <div className="flex mt-5 h-16 w-96 justify-center items-center bg-slate-700 rounded-sm">
        <input 
        type="text" 
        placeholder="O que deseja fazer?"
        className="h-10 pr-5 mr-5 rounded-md"
        value={itemInput}
        onChange={e => setItemInput(e.target.value)}
        />
        <button>Adicionar</button>
      </div>

      

    </div>
  )
}