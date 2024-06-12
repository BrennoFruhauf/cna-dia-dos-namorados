"use client"

import { useState } from "react"

import { useForm } from "react-hook-form"
import { z } from "zod"

import sendData from "@/actions/action"
import { zodResolver } from "@hookform/resolvers/zod"
import InputMask from "@mona-health/react-input-mask"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog"
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
  const [showDialog, setShowDialog] = useState(false)
  const [loading, setLoading] = useState(false)

  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Seu nome precisa ter mais de 3 letras" }),
    number: z.string().regex(/^\(\d{2}\) \d \d{4} \d{4}$/, {
      message: "Seu telefone é inválido",
    }),
    baeName: z
      .string()
      .min(3, { message: "O nome do mozão precisa ter mais de 3 letras" }),
    baeNumber: z.string().regex(/^\(\d{2}\) \d \d{4} \d{4}$/, {
      message: "Telefone do mozão é inválido",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      number: "",
      baeName: "",
      baeNumber: "",
    },
  })

  const handler = async (formData: {
    name: string
    number: string
    baeName: string
    baeNumber: string
  }) => {
    setLoading(true)
    const hasSent = await sendData(formData)

    if (hasSent) {
      form.reset()
      setLoading(false)
      setShowDialog(true)
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(handler)}
        >
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Seu Nome:</FormLabel>
                <FormControl>
                  <Input {...field} id="name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="number"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="number">Seu Telefone:</FormLabel>
                <FormControl>
                  <InputMask mask="(99) \9 9999 9999" {...field}>
                    <Input id="number" />
                  </InputMask>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="baeName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="baeName">Nome do Mozão:</FormLabel>
                <FormControl>
                  <Input {...field} id="baeName" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="baeNumber"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="baeNumber">Telefone do Mozão:</FormLabel>
                <FormControl>
                  <InputMask mask="(99) \9 9999 9999" {...field}>
                    <Input id="baeNumber" />
                  </InputMask>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="mb-12" type="submit">
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Form>

      <AlertDialog open={true}>
        <AlertDialogContent className="bg-white h-screen flex flex-col justify-center">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-color-p">
              Tudo certinho ❤️!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-color-t text-base">
              Nosso time comercial entrará em contato com vocês em breve.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="w-28 mx-auto"
              onClick={() => setShowDialog(false)}
            >
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
