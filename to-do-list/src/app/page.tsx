"use client"

import { ToDoList } from "@/types/ToDoList"
import { useState } from "react"

export default function Home() {

  const [ itemInput, setItemInput] = useState('')
  const [ list, setList ] = useState<ToDoList[]>([
    { label: 'Fazer o dever de casa', checked: false},
    { label: 'Comprar o bolo', checked: false}
  ]
  )

  return(
    <div className="flex flex-col items-center">
      
      <div className="py-3 text-3xl">Lista de tarefas</div>
      
      <div className="flex mt-5 h-16 w-96 justify-center items-center bg-slate-700 rounded-sm">
        <input 
        type="text" 
        placeholder="O que deseja fazer?"
        className="h-10  mr-5 rounded-md text-black"
        value={itemInput}
        onChange={e => setItemInput(e.target.value)}
        />
        <button>Adicionar</button>
      </div>

      <div>
        {list.map(item => (
          <li>{item.label} - <button className="hover:underline">[ deletar ]</button></li>
        ))}
      </div>
      

    </div>
  )
}