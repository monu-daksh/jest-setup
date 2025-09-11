import { render, screen } from "@testing-library/react"
import InputField from "../Components/InputField."
import userEvent from "@testing-library/user-event"


describe("test input component", ()=>{
    beforeEach(()=>{     // this Input field will run for every test case now
        render(<InputField />)
    })


    test("find input and paragraph", ()=>{
        const input = screen.getByPlaceholderText(/type.../i)
        expect(input).toBeInTheDocument()

        expect(screen.getByText(/you typed/i)).toBeInTheDocument()
    })

    test("type value in input field", async()=>{
        const user = userEvent.setup()
        const input = screen.getByPlaceholderText(/type.../i)
        await user.type(input, "Hello")
        expect(screen.getByText(/you typed:hello/i)).toBeInTheDocument()
    })


})