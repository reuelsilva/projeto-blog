import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ToggleButton from "."

jest.mock("@/app/utils/toggle-navigation-menu", () => ({
            __esModule: true,
            default: jest.fn(),
        })
)

import toggleNavigationMenu from "@/app/utils/toggle-navigation-menu"

describe("ToggleButton Component", () => {
    it("should render ToggleButton correctly", () => {
        render(<ToggleButton />);

        const buttonToggle = screen.getByTestId("button-toggle");
        
        expect(buttonToggle).toBeInTheDocument();
    })

    it("should call function toggleNavigationMenu on click button", () => {
        render(<ToggleButton/>)

        const buttonElement = screen.getByTestId("button-toggle")

        fireEvent.click(buttonElement)
        
        expect(toggleNavigationMenu).toHaveBeenCalled();
    })
})