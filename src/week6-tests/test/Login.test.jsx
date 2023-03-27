import { describe, test, expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers'
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";

expect.extend(matchers);

//cuerpo del test (suites)

describe("tests para el componente Login", () => {
    test("Se renderiza el componente en el DOM", () => {
        render(<Login/>)
        const EmailInput = screen.getByPlaceholderText("Ingresa tu email");
        expect(EmailInput).toBeDefined();
        expect(EmailInput.value).toEqual("");
        fireEvent.change(EmailInput, { target: { value:"Kike Vanegas" } })
        expect(EmailInput.value).toEqual("Kike Vanegas")
    })
    test("Existe el boton para submit", () => {
        render(<Login/>)        
        expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })
})
