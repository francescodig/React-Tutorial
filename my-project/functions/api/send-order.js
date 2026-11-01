import nodemailer from 'nodemailer';

export async function onRequestPost(context) {
  let transporter = null; // Dichiarazione nello scope principale della funzione

  try {
    const { SMTP_HOST, SMTP_USER, SMTP_PASS } = context.env || {};

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return Response.json(
        { success: false, error: 'Variabili d\'ambiente SMTP non trovate in context.env' },
        { status: 500 }
      );
    }

    const body = await context.request.json();
    const { prodotto, prezzo, name, email, phone, message } = body;

    // Assegnazione della variabile esterna senza ridefinirla con "const" o "let"
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 465,
      secure: true,
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Sito Serena" <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: email,
      subject: `Nuova richiesta ordine: ${prodotto || 'Prodotto'}`,
      html: `
        <h2>Nuova richiesta d'ordine</h2>
        <p><strong>Prodotto:</strong> ${prodotto || 'N/D'} (${prezzo || 'N/D'})</p>
        <p><strong>Cliente:</strong> ${name || 'N/D'}</p>
        <p><strong>Email cliente:</strong> ${email || 'N/D'}</p>
        <p><strong>Telefono:</strong> ${phone || 'Non indicato'}</p>
        <p><strong>Messaggio:</strong> ${message || 'Nessuna nota'}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message || 'Errore durante l\'invio dell\'email' },
      { status: 500 }
    );
  } finally {
    if (transporter) {
      try {
        transporter.close();
      } catch {
        // Ignora eventuali errori durante la disconnessione del socket
      }
    }
  }
}