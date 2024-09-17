
type UsersType  = {
   [key: string]  : {id: number, name: string}
}

//объекты в ассоциативном массиве

export const users: UsersType = {
    '101': {id: 101, name: 'Eliza'},
    '312323': {id: 312323, name: 'Nick'},
    '2321': {id: 2321, name: 'Vlad'},
    '1': {id: 101, name: 'Viktor'},
}


let user = {id: 100500, name: 'Igor'}

//users[1]
users[user.id] = user;
delete users[user.id];
users[user.id].name = 'Vitya'


//объекты в обычном массиве

export const usersArr = [
    {id: 101, name: 'Eliza'},
    {id: 312323, name: 'Nick'},
    {id: 2321, name: 'Vlad'},
    {id: 101, name: 'Viktor'},
]

// usersArr.findIndex()
usersArr.find(u => u.id === 1)
// let usersCopy =  [...usersArr.filter(), user] - фильтровать надо, чтобы не добавить дубликат
// let users = usersArr.filter(u => u.id !== user.id)



