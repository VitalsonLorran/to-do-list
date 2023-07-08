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
  const botaoClicou = () => {
    setItemInput('')
    if (itemInput){
    setList([
      
      ...list,
      { label: itemInput, checked: false}
    ])}
  }

  const deleteItem = (index: number) => {
    setList(list.filter((item, key) => key !== index))
  }

  return(
    <div className="flex flex-col items-center">
      
      <div className="py-3 text-3xl">Lista de tarefas</div>
      
      <div className="flex mb-5 mt-5 h-16 w-96 justify-center items-center bg-slate-700 rounded-sm">
        <input 
        type="text" 
        placeholder="O que deseja fazer?"
        className="h-10  mr-5 rounded-md text-black"
        value={itemInput}
        onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={botaoClicou} className="border p-1.5 bg-gray-600 border-gray-800 text-black  rounded-lg ">Adicionar</button>
      </div>

      <div>
        {list.map((item, index) => (
          <li key={index}>{item.label} - <button onClick={() => deleteItem(index)} className="hover:underline py-1">[ deletar ]</button></li>
        ))}
      </div>
      

    </div>
  )
}