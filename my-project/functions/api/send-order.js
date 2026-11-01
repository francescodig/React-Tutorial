import nodemailer from 'nodemailer';

export async function onRequestPost(context) {
  try {
    const { prodotto, prezzo, name, email, phone, message } = await context.request.json();

    // Inizializza la connessione SMTP con le variabili impostate su Cloudflare
    const transporter = nodemailer.createTransport({
      host: context.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: context.env.SMTP_USER,
        pass: context.env.SMTP_PASS,
      },
    });

    // Invia la mail
    await transporter.sendMail({
      from: `"Sito Actjtude" <${context.env.SMTP_USER}>`,
      to: context.env.SMTP_USER,
      replyTo: email,
      subject: `Nuova richiesta ordine per: ${prodotto}`,
      html: `
        <h2>Nuova richiesta ordine ricevuta</h2>
        <p><strong>Prodotto:</strong> ${prodotto} (${prezzo})</p>
        <hr />
        <h3>Dati Cliente:</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone || 'Non specificato'}</p>
        <p><strong>Messaggio:</strong> ${message || 'Nessuna nota'}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}