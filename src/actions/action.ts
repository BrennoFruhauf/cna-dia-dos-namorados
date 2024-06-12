"use server"
import mailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"

import { obterPrimeiroNome } from "@/lib/utils"

import { formatarData } from "../lib/utils"

export default async function sendData(formData: {
  name: string
  number: string
  baeName: string
  baeNumber: string
}) {
  const { name, number, baeName, baeNumber } = formData

  const optionsMailer: SMTPTransport.Options = {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  }

  const transporter = mailer.createTransport(optionsMailer)

  const dataAtual = formatarData(new Date())
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `${dataAtual} - ${obterPrimeiroNome(name)} & ${obterPrimeiroNome(
      baeName
    )}`,
    html: `
      <p><strong style="color: #ED5459;">Nome:</strong> ${name}</p>
      <p><strong style="color: #ED5459;">Telefone:</strong> ${number}</p>
      <p><strong style="color: #ED5459;">Nome do Mozão:</strong> ${baeName}</p>
      <p><strong style="color: #ED5459;">Telefone do Mozão:</strong> ${baeNumber}</p>
  `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    return false
  }
}
