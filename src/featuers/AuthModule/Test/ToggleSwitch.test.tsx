import {render, screen} from '@testing-library/react'
import ToggleSwitch from "../Components/ToggleSwitch"
import userEvent from '@testing-library/user-event'



describe('test toggle components', ()=>{
    beforeEach(()=>{
        render(<ToggleSwitch />)
    })

    test('toggle button inital state', ()=>{
        const button = screen.getByText(/off/i)
        expect(button).toBeInTheDocument()
    })

    test("click toggle", async()=>{
        const user = userEvent.setup()

        const button = screen.getByRole("button", {name:/off/i})

        await user.click(button)

        expect(screen.getByText(/on/i)).toBeInTheDocument()

        await user.click(button)

        expect(screen.getByText(/off/i)).toBeInTheDocument()
    })


})