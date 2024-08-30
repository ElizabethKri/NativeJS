function icreaseAge(user: UserType) {
    user.age++;
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}


test ('reference type', () => {
    let user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }

    }

    icreaseAge (user)

    expect (user.age).toBe (33)

    const superman = user
    superman.age = 1000
    expect (user.age).toBe (1000)

})

test ('arr', () => {
    let users = [
        {
            name: 'Dimych',
            age: 32,
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]

    let admins = users
    admins.push({name: 'Banda', age: 10})

    expect(users[2]).toEqual({name: 'Banda', age: 10})

})

test('value type test', () => {
    let usersCount = 100;
    let adminsCount = usersCount
    adminsCount++
})

test ('reference type address', () => {
    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let user2: UserType = {
        name: 'Eka',
        age: 29,
        address: user.address
    }

    user2.address.title ='Kanary'

    expect(user.address).toBe(user2.address)
    expect (user.address.title).toBe('Kanary')

})

test ('arr address', () => {
    const address = {
        title: 'Minsk City'
    }
    let user =
        {
            name: 'Dimych',
            age: 32,
            address: address
        }
    let user2 =
        {
            name: 'Eka',
            age: 29,
            address: address
        }


    const users = [user, user2, {name: 'Misha', age: 4, address: address}]
    const admins = [user, user2]

    admins[1].name = 'Ekaterina'

    users[0].age = 33

    expect(user.age).toBe(33)
    expect(user2.name).toBe('Ekaterina')
    expect(users[1].name).toBe('Ekaterina')
})

test('sort arr test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']
    letters.sort()
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})