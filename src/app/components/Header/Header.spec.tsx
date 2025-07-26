import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from ".";

describe("Header Component", () => {

    it("should render Header correctly", () => {
        render(<Header />)

        const titleElement = screen.getByText("CURIOSIDADES DE TECNOLOGIA");
        expect(titleElement).toBeInTheDocument();

        const textElement = screen.getByText("Tudo aquilo que você sempre quis saber sobre o mundo Tech, em um único lugar.");
        expect(textElement).toBeInTheDocument();
    })
})