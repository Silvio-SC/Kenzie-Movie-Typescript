import { z } from "zod"

export const FormLoginSchema = z.object({
    email: z.string().min(1, 'O Email é obrigatório').email('O Email esta incorreto'),
    password: z.string().min(1, 'Insira a Senha!'),
})

export type TLoginFormValues = z.infer<typeof FormLoginSchema>