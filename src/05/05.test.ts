import {ManType} from './05';

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ]
})

test("should get Arr of greeting messages", () => {
    const message = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)

    expect(message.length).toBe(3);
    expect(message[0]).toBe("Hello Andrew. Welcome to IT-Incubator")
    expect(message[1]).toBe("Hello Alexander. Welcome to IT-Incubator")
    expect(message[2]).toBe("Hello Dmitry. Welcome to IT-Incubator")
})