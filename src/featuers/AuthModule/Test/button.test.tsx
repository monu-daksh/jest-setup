import {fireEvent, render, screen} from "@testing-library/react"
import Button from "../Components/Button"


describe("test button", ()=>{
    render(<Button />)
    test("test button click", ()=>{
        expect(screen.getByText(/click me!/i)).toBeInTheDocument()
    })
    test("handle click event", ()=>{
        // mock alert
        window.alert = jest.fn()
        render(<Button />)

        const button = screen.getByText(/click me!/i)
        fireEvent.click(button)

        expect(window.alert).toHaveBeenCalledWith('Button click')


    })
})