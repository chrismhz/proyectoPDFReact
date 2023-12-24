import React, {useState, useEffect} from 'react'

const SearchComponent = () => {
//setear los hooks useState
const [ users, setUsers ] = useState([])
const [ search, setSearch] = useState("")

//funcion para traer los datos de la API
const URL = 'https://jsonplaceholder.typicode.com/users'

const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
}

//funcion de busqueda
const searcher = (e) => {
    setSearch(e.target.value)
}

/*metodo de filtrado 
    let results = []
    if(!search)
    {
        results = users
    }else{
            results = users.filter( (dato) =>
            dato.name.toLowerCase().includes(search.toLocaleLowerCase())
            )
    }*/

//metodo de filtrado 2   
const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))


useEffect(()=>{
    showData()
}, [])

//renderizamos la vista
  return (
    <div style={{ margin: '0 200px' }}>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>Folio</th>
                    <th>Nombre</th>
                    <th>Descripcion del Paciente </th>
                </tr>
            </thead>
            <tbody>
            { results.map( (user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        {/*<td>{user.username}</td>*/}
                        <td>
                            <button style={{ backgroundColor: '#2F617B', color: 'white', marginLeft: '10px' }} onClick={() => {
                                // Lógica para manejar la acción de "Ver Descripción"
                                alert(`Descripción del Paciente: ${user.name}`);
                            }}> Ver Descripcion</button>
                        </td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default SearchComponent