import { z } from 'zod';
export const registerSchema = z.object({
    document: z.string({
        required_error: "El número de documento es obligatorio",
    }).max(12, {
        message: "El documento debe tener al menos 12 caracteres",
    }),
    name: z.string({
        required_error: "El nombre completo es obligatorio",
    }),
    cell: z.string({
        required_error: "El número de celular es obligatorio",
    }).min(10, {
        message: "El documento de celular debe tener al menos 10 caracteres",
    }),
    city: z.string({
        required_error: "La ciudad es obligatoria",
    }),
    email: z.string({
        required_error: "El correo electrónico es obligatorio",
    }).email({
        message: "Correo electrónico inválido",
    }),
    password: z.string({
        required_error: "La contraseña es obligatoria",
    }).min(6, {
        message: "La contraseña debe tener al menos 6 caracteres",
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    }).email({
        equired_error: "Invalid email "
    }),
    password: z.string({
        required_error: "password is required"
    }).min(6, {
        message: "Password must be at least 6 characters"
    })
});