// src/featuers/AuthModule/Tests/LoginForm.test.tsx
import { render, screen } from '@testing-library/react';
import LoginForm from '../Components/LoginForm';
import userEvent from '@testing-library/user-event';



describe("LoginForm", () => {
  test("render the login form", () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test("can type into email and password fields", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "password@123");
    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password@123");
  });

  test("checkboxes and radio buttons work", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    const remember = screen.getByLabelText(/remember me/i);
    const acceptsTerms = screen.getByLabelText(/accept terms/i);
    const adminRadio = screen.getByLabelText(/admin/i);
    await user.click(remember);
    await user.click(acceptsTerms);
    await user.click(adminRadio);
    expect(remember).toBeChecked();
    expect(acceptsTerms).toBeChecked();
    expect(adminRadio).toBeChecked();
  });

  test('dropdown selection works', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    const countrySelect = screen.getByRole('combobox', { name: /country/i }) as HTMLSelectElement;
    expect(countrySelect).toBeInTheDocument();
    await user.selectOptions(countrySelect, 'usa');
    expect(countrySelect.value).toBe('usa');
  });

  test('form submission triggers handleSubmit', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    // Fill required fields
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');

    // Optional: interact with other fields
    await user.click(screen.getByLabelText(/admin/i));
    await user.selectOptions(screen.getByRole('combobox', { name: /country/i }), 'usa');

    // Submit form
    await user.click(screen.getByRole('button', { name: /login/i }));


  });

  test('form elements have correct initial values', () => {
    render(<LoginForm />);
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;
    const rememberCheckbox = screen.getByLabelText(/remember me/i) as HTMLInputElement;
    const termsCheckbox = screen.getByLabelText(/accept terms/i) as HTMLInputElement;
    const userRadio = screen.getByLabelText(/user/i) as HTMLInputElement;

    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    expect(rememberCheckbox.checked).toBe(false);
    expect(termsCheckbox.checked).toBe(false);
    expect(userRadio.checked).toBe(true);
  });
});