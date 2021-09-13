export const getClients = () => fetch("http://localhost:4000/home/clientlist").then(res => res.json())

export const createClient = (client) => fetch("http://localhost:4000/createclient", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(client)
})  

export const updateClient = (client, id) => fetch(`http://localhost:4000/home/clientlist/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(client)
})  


export const getClient = (id) => fetch(`http://localhost:4000/home/clientlist/${id}`).then(res => res.json())