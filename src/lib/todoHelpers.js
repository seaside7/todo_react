export const addTodo = (list, item) => {
    return list.concat(item)
}

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, list) => list.find(item => item.id === id) //build in array method, to fine id

export const toogleTodo = (todo) => ({...todo, isComplete: !todo.isComplete}) //... spread the object , !opposite

export const updateTodo = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id)
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex+1)
    ]
}