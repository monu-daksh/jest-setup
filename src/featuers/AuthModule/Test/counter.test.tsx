import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../Components/Counter"



describe("test counter components", ()=>{
    render(<Counter />)

    test("find text and button", ()=>{
        expect(screen.getByText(/count/i)).toBeInTheDocument()
        expect(screen.getByRole("button", {name:/increment/i})).toBeInTheDocument()
    })


    test("handle event check", async()=>{
        render(<Counter />)
        const button = screen.getByRole('button', {name:/increment/i})
        fireEvent.click(button)
        expect(await screen.getByText("Count: 1")).toBeInTheDocument()
        fireEvent.click(button)
        expect(await screen.getByText("Count: 2")).toBeInTheDocument()
    })
})