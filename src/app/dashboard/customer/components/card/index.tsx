"use client"

import { CustomerProps } from "@/utils/customer.type"
import { api } from "@/lib/api";

export function CardCustomer({customer}: {customer: CustomerProps}) {

    async function handleDeleteCustomer(){
        // alert(customer.id)
        try {
            const response = await api.delete("/api/customer", {
                params: {
                    id: customer.id
                }
            })
    
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg gap-2 
        hover:scale-105 duration-300">
            <h2><a className="font-bold">Nome: </a>{customer.name}</h2>
            <p><a className="font-bold">E-mail: </a>{customer.email}</p>
            <p><a className="font-bold">Telefone: </a>{customer.phone}</p>
            <button
             className="bg-red-500 px-4 mt-2 rounded text-white self-start"
             onClick={handleDeleteCustomer}
             >
                Deletar
            </button>
        </article>
    )
}