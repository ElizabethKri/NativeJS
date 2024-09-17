import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserTypeHair,
    UserWithBookType, UserWithCompaniesType,
    UserWithLaptopType
} from './10_01';
import {Simulate} from 'react-dom/test-utils';
import copy = Simulate.copy;



test('reference type test', () => {
    let user: UserTypeHair = {
        name: 'Elizabeth',
        hair: 32,
        address: {
            city: 'Spb'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Elizabeth',
        hair: 32,
        address: {
            city: 'Spb',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        }
    }

    const movedUser = moveUser(user, 'Minsk')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Minsk')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Elizabeth',
        hair: 32,
        address: {
            city: 'Spb',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        }
    }

    const movedUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(movedUser)
    expect(user.address).toBe(movedUser.address)
    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(movedUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('upgrade book', () => {
    let user: UserWithLaptopType & UserWithBookType= {
        name: 'Elizabeth',
        hair: 32,
        address: {
            city: 'Spb',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(movedUser)
    expect(user.books).toBe(movedUser.books)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBookType= {
        name: 'Elizabeth',
        hair: 32,
        address: {
            city: 'Spb',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedUser = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(movedUser)
    expect(user.books).not.toBe(movedUser.books)
    expect(movedUser.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
    expect(user.address).toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)

})

test('update js on ts', () => {
    let user: UserWithLaptopType & UserWithBookType= {
        name: 'Elizabeth',
        hair: 32,
        address: {
            city: 'Spb',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedUser = updateBook(user,'js', 'ts')

    expect(user).not.toBe(movedUser)
    expect(user.books).not.toBe(movedUser.books)
    expect(movedUser.books[2]).toBe('ts')
    expect(user.books.length).toBe(4)
    expect(user.address).toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
})

test('remove js', () => {
    let user: UserWithLaptopType & UserWithBookType= {
        name: 'Elizabeth',
        hair: 32,
        address: {
            city: 'Spb',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['css', 'html', 'js', 'react']
    }

    const movedUser = removeBook(user,'js')

    expect(user).not.toBe(movedUser)
    expect(user.books).not.toBe(movedUser.books)
    expect(movedUser.books[2]).toBe('react')
    expect(user.books.length).toBe(4)
    expect(user.address).toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
})

test('companies', () => {
    let user: UserWithLaptopType & UserWithCompaniesType= {
        name: 'Elizabeth',
        hair: 32,
        address: {
            city: 'Spb',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        },
        companies: [
            {id: 1, title: 'Unicon'},
            {id: 2, title: 'IT-Incubator'}
        ]
    }

    const movedUser = updateCompanyTitle(user, 1, 'Юникон') as UserWithLaptopType & UserWithCompaniesType

    expect(user).not.toBe(movedUser)
    expect(user.address).toBe(movedUser.address)
    expect(user.companies).not.toBe(movedUser.companies)
    expect(movedUser.companies[0].title).toBe('Юникон')
})

test('update companies', () => {
    let user: UserWithLaptopType= {
        name: 'Elizabeth',
        hair: 32,
        address: {
            city: 'Spb',
            house: 12
        },
        laptop: {
            title: 'ZenBook',
        }
    }

    let companies = {
        'Eliza': [ {id: 1, title: 'Unicon'}],
        'Nick':  [{id: 2, title: 'Un'}],
    }
    const copy = updateCompanyTitle2(companies, 'Eliza', 1, 'Юникон')
    expect(copy['Eliza']).not.toBe(companies['Eliza'])
    expect(copy['Nick']).toBe(companies['Nick'])
    expect(copy['Eliza'][0].title).toBe('Юникон')
})