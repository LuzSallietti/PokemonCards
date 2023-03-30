import { describe, test, expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers'
import { render, screen, fireEvent } from "@testing-library/react";

import Login from "../Login";

expect.extend(matchers);

//cuerpo del test (suites)

describe("Suite de tests para el componente Login", () => {
    test('El componente Login se renderiza sin inconvenientes', () => {
        render(<Login />);
      })
    test('El input del email se renderiza correctamente', () => {
        const { getByLabelText } = render(<Login />);
        const emailInput = getByLabelText('Email:');
        expect(emailInput).toBeInTheDocument();
        expect(emailInput).toHaveAttribute('placeholder', 'Ingresa tu email');
    })
    test('El input del password se renderiza correctamente', () => {
        const { getByLabelText } = render(<Login />);
        const passwordInput = getByLabelText('Password:');
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute('placeholder', 'Ingresa tu Password');
      });
    test("Testear el evento onchange del input name", () => {
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
    test('El formulario puede ser enviado', () => {
        const { getByLabelText, getByText } = render(<Login />);
        const emailInput = getByLabelText('Email:');
        const passwordInput = getByLabelText('Password:');
        const submitButton = getByText('Enviar');
        
        fireEvent.change(emailInput, { target: { value: 'test@example.com' }});
        fireEvent.change(passwordInput, { target: { value: 'password123' }});
        fireEvent.click(submitButton);
      })      
})

