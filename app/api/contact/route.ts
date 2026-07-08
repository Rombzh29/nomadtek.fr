import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(req: NextRequest) {
  const { name, email, project } = await req.json()

if (!emailRegex.test(email)) {
  return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
}

  if (!name || !email || !project) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  try {
    await transporter.sendMail({
      from: `"NomadTek" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Nouveau projet - ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\nProjet :\n${project}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur envoi email :', error)
    return NextResponse.json({ error: 'Erreur envoi' }, { status: 500 })
  }
}