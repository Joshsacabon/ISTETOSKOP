export const getScheds = () => fetch("http://localhost:4000/home/dashboard").then(res => res.json())

export const createSched = (sched) => fetch("http://localhost:4000/home/dashboard/createschedule", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(sched)
})  

export const updateSched = (sched, id) => fetch(`http://localhost:4000/home/dashboard/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(sched)
})  

export const getSched = (id) => fetch(`http://localhost:4000/home/dashboard/${id}`).then(res => res.json())