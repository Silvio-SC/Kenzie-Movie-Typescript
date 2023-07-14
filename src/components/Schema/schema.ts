import { z } from "zod"

export const SchemaLogin = z.object({
    email: z
    .string().nonempty("E-mail obrigatório")
    .email("E-mail inválido"),
    
    password:
    z.string()
    .min(8, "Senha obrigatória"),
})

export const SchemaRegister = z.object({
    name: z
    .string().
    nonempty("Nome obrigatório"),

    email: z
    .string()
    .nonempty("E-mail obrigatório")
    .email("E-mail inválido"),

    password: z
    .string()
    .min(8, "Senha obrigatória com no mínimo 8 caracteres")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])[\s\S]{8,}$/, "A senha precisa conter no mínimo uma letra maiuscula, uma letra minuscula, um caractere especial e  um número"),

    confirm:
    z.string()
    .nonempty("Confirme sua senha"),

}).refine(({password, confirm}) => password === confirm, {
    message: "As senhas precisam ser iguais",
    path:["confirm"],
});

export type TRegisterValues = z.infer<typeof SchemaRegister>

export const SchemaModalCreate = z.object({
    score: z.string().nonempty("Selecione uma nota"),
    
    description: z.string().nonempty("Deixe um comentário")
})

export type TModalCreateValues = z.infer<typeof SchemaModalCreate>


export const SchemaModalEdit = z.object({
    score: z.string().nonempty("Selecione uma nota"),
    
    description: z.string().nonempty("Deixe um comentário")
})

export type TModalEditValues = z.infer<typeof SchemaModalEdit>