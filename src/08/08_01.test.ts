type UsersType  = {
    [key: string]  : {id: number, name: string}
}

//объекты в ассоциативном массиве
let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Eliza'},
        '312323': {id: 312323, name: 'Nick'},
        '2321': {id: 2321, name: 'Vlad'},
        '1': {id: 1, name: 'Viktor'},
    }
})

test("should update corresponding user", () => {
    // expect(users[0]).toBe('Eliza') ;
    // expect(users[1]).toBe('Natasha') ;
    // expect(users[2]).toBe('Valera') ;
    // expect(users[3]).toBe('Katya') ;

    users['1'].name = 'Ekaterina'
    // expect(users['1'].name).toBe('Ekaterina')
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'})
})


test("should delete corresponding user", () => {

    delete users['1']
    expect(users['1']).toBeUndefined()
})