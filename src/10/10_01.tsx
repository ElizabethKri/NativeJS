export type UserTypeHair = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserTypeHair & {
    laptop: LaptopType
}

export type UserWithBookType = UserTypeHair & {
    books: string[]
}

export type CompanyType = {
    id: number,
    title: string
}

export type UserWithCompaniesType = UserTypeHair & {
    companies: CompanyType[]
}

export function makeHairStyle(u: UserTypeHair, power: number){
    const copy = {
        ...u,
        hair:u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string){
    return  {
        ...u,
        address: {...u.address,
        city: city}
    }

    // copy.address = {
    //     ...copy.address,
    //     city: city
    // }

    // return copy
}

export const upgradeUserLaptop =(u: UserWithLaptopType, laptop: string) => {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export const moveUserToOtherHouse =(u: UserWithLaptopType & UserWithBookType, house: number) => {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBookType, newBook: string) =>{
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBookType, oldBook: string, newBook: string) => {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export const removeBook = (u: UserWithLaptopType & UserWithBookType, removeBook: string) => {
    return {
        ...u,
        books: u.books.filter(b => b !== removeBook)
    }
}

export const updateCompanyTitle = (u: UserWithCompaniesType, idTitle: number, newTitle: string) => {
    return {
        ...u,
        companies: u.companies.map(c => c.id === idTitle ? {...c, title: newTitle} : c)
    }
}

export const updateCompanyTitle2 = (companies:{[key: string]: Array<CompanyType>} , userName: string, companyId: number, newTitle: string) => {
    return {
        ...companies,
        [userName]:companies[userName].map(c => c.id === companyId ? {
        ...c, title: newTitle} : c)}
}