import nodemailer from 'nodemailer';

export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const { name, email, phone, message, prodotto, prezzo } = data;

    // Crea il trasportatore SMTP usando le variabili d'ambiente protette
    const transporter = nodemailer.createTransport({
      host: context.env.SMTP_HOST,
      port: 465,
      secure: true, // true per porta 465
      auth: {
        user: context.env.SMTP_USER,
        pass: context.env.SMTP_PASS,
      },
    });

    // Invia l'email direttamente dalla tua casella a te stesso
    await transporter.sendMail({
      from: `"Sito Actjtude" <${context.env.SMTP_USER}>`,
      to: context.env.SMTP_USER, // Ricevi l'ordine sulla tua mail
      replyTo: email, // Rispondendo alla mail scriverai direttamente al cliente
      subject: `Nuova richiesta ordine per: ${prodotto}`,
      html: `
        <h2>Nuova richiesta d'ordine ricevuta dal sito</h2>
        <p><strong>Prodotto:</strong> ${prodotto} (${prezzo})</p>
        <hr />
        <h3>Dati Cliente:</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email cliente:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone || 'Non specificato'}</p>
        <br />
        <p><strong>Note / Messaggio:</strong></p>
        <p>${message || 'Nessuna nota aggiuntiva'}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}