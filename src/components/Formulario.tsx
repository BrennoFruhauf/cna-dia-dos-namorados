"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import InputMask from "@mona-health/react-input-mask"

import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"

export const Formulario = () => {
  const formSchema = z.object({
    nome: z
      .string()
      .min(3, { message: "Seu nome precisa ter mais de 3 letras" }),
    telefone: z.string().regex(/^\(\d{2}\) \d \d{4} \d{4}$/, {
      message: "Seu telefone é inválido",
    }),
    nomeMozao: z
      .string()
      .min(3, { message: "O nome do mozão precisa ter mais de 3 letras" }),
    telefoneMozao: z.string().regex(/^\(\d{2}\) \d \d{4} \d{4}$/, {
      message: "Telefone do mozão é inválido",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      telefone: "",
      nomeMozao: "",
      telefoneMozao: "",
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="nome"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="nome">Seu Nome:</FormLabel>
              <FormControl>
                <Input {...field} id="nome" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="telefone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="telefone">Seu Telefone:</FormLabel>
              <FormControl>
                <InputMask mask="(99) \9 9999 9999" {...field}>
                  <Input id="telefone" />
                </InputMask>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="nomeMozao"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="nomeMozao">Nome do Mozão:</FormLabel>
              <FormControl>
                <Input {...field} id="nomeMozao" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="telefoneMozao"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="telefoneMozao">Telefone do Mozão:</FormLabel>
              <FormControl>
                <InputMask mask="(99) \9 9999 9999" {...field}>
                  <Input id="telefoneMozao" />
                </InputMask>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="mb-12" type="submit">
          Enviar
        </Button>
      </form>
    </Form>
  )
}
