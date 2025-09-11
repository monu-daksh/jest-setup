import { useState, ReactElement } from "react";

function SignupForm(): ReactElement {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    });

    const [errors, setErrors] = useState({
        passwordMatch: "",
        acceptTerms: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        // Clear errors while typing
        if (name === "password" || name === "confirmPassword") {
            setErrors({ ...errors, passwordMatch: "" });
        }
        if (name === "acceptTerms") {
            setErrors({ ...errors, acceptTerms: "" });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset errors first
        const newErrors = {
            passwordMatch: "",
            acceptTerms: "",
        };

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            newErrors.passwordMatch = "Passwords do not match!";
        }

        // Optional: Check if terms are accepted
        // if (!formData.acceptTerms) {
        //   newErrors.acceptTerms = "You must accept the terms and conditions";
        // }

        // Set the errors
        setErrors(newErrors);

        // Log for debugging
        console.log("Form data:", formData);
        console.log("New errors:", newErrors);

        // If no errors, proceed with signup
        if (!newErrors.passwordMatch && !newErrors.acceptTerms) {
            console.log("Form submitted successfully!");
            // Handle successful signup
        }
    };


    return (
        <div className="max-w-md bg-gray-50 mx-auto mt-10 p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your name..."
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your email..."
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter password..."
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password..."
                    />
                    {errors.passwordMatch && (
                        <p role="alert" className="text-red-500 text-sm mt-1">
                            {errors.passwordMatch}
                        </p>
                    )}
                </div>


                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                    />
                    <label htmlFor="acceptTerms" className="text-sm">
                        I accept the terms and conditions
                    </label>
                </div>
                {errors.acceptTerms && (
                    <p className="text-red-500 text-sm" role="alert">
                        {errors.acceptTerms}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Signup
                </button>
            </form>
        </div>
    );
}

export default SignupForm;
