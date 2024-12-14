

export function CardCustomer() {
    return (
        <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg gap-2 
        hover:scale-105 duration-300">
            <h2><a className="font-bold">Nome: </a>Mercado Silva</h2>
            <p><a className="font-bold">E-mail: </a>teste@teste.com</p>
            <p><a className="font-bold">Telefone: </a>(XX) XXXXXXXXXX</p>
            <button className="bg-red-500 px-4 mt-2 rounded text-white self-start">
                Deletar
            </button>
        </article>
    )
}