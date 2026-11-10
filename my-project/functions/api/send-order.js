export async function onRequestPost(context) {
  try {
    const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = context.env || {};

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return Response.json(
        { success: false, error: 'Variabili TELEGRAM_BOT_TOKEN e TELEGRAM_CHAT_ID non trovate su Cloudflare.' },
        { status: 500 }
      );
    }

    const body = await context.request.json();
    const { type, prodotto, prezzo, name, email, phone, message } = body;

    // Riconosce se è una richiesta personalizzata
    const isCustomRequest = type === 'custom' || prodotto === 'Progetto Su Misura / Idea Personalizzata';

    let text = '';

    if (isCustomRequest) {
      // Template per la modale "Raccontami la tua idea"
      text = `💡 *NUOVA PROPOSTA PERSONALIZZATA*\n\n` +
             `*Cliente:* ${name || 'N/D'}\n` +
             `*Email:* ${email || 'N/D'}\n` +
             `*Descrizione dell'idea:*\n${message || 'Nessun dettaglio fornito'}`;
    } else {
      // Template per gli ordini classici da catalogo
      text = `🛍️ *NUOVO ORDINE DA CATALOGO*\n\n` +
             `*Prodotto:* ${prodotto || 'N/D'} (${prezzo || 'N/D'})\n` +
             `*Cliente:* ${name || 'N/D'}\n` +
             `*Email:* ${email || 'N/D'}\n` +
             `*Telefono:* ${phone || 'Non indicato'}\n` +
             `*Messaggio:* ${message || 'Nessuna nota'}`;
    }

    // Chiamata HTTP nativa all'API di Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'Markdown'
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { success: false, error: data.description || 'Errore durante l\'invio del messaggio a Telegram' },
        { status: response.status }
      );
    }

    return Response.json({ success: true });

  } catch (error) {
    return Response.json(
      { success: false, error: error.message || 'Errore interno della funzione' },
      { status: 500 }
    );
  }
}