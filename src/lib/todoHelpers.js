export const addTodo = (list, item) => {
    return list.concat(item)
}

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, list) => list.find(item => item.id === id) //build in array method, to fine id

export const toogleTodo = (todo) => ({...todo, isComplete: !todo.isComplete}) //... spread the object , !opposite