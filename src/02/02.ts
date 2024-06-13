type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddresType
    technologies: Array<TechType>
}

type AddresType = {
    street: string
    city: LocalCityType
}

type LocalCityType = {
    title: string
    country: string
}

type TechType = {
    id: number
    title: string
}


const student: StudentType = {
    id: 1,
    name: "Eliza",
    age: 25,
    isActive: true,
    address: {
        street: "Narodnaya",
        city: {
            title: "Saint",
            country: "Russia"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "CSS"},
        {id: 3, title: "React"}
    ]
}

console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[2].title)
