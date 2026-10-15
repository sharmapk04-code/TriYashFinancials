import { createClientFromRequest } from 'npm:@base44/sdk@0.8.52';

const TIME_LABELS = { morning: 'Morning', afternoon: 'Afternoon', evening: 'Evening' };

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);

    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      return Response.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const fullName = String(body.full_name || '').trim().slice(0, 100);
    const email = String(body.email || '').trim().slice(0, 254);
    const phone = String(body.phone || '').trim().slice(0, 40);
    const preferredDate = String(body.preferred_date || '').trim().slice(0, 10);
    let preferredTime = String(body.preferred_time || '').trim();
    const notes = String(body.notes || '').trim().slice(0, 1000);

    if (!fullName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^\d{4}-\d{2}-\d{2}$/.test(preferredDate)) {
      return Response.json({ error: 'Missing or invalid fields' }, { status: 400 });
    }
    if (!Object.keys(TIME_LABELS).includes(preferredTime)) {
      preferredTime = 'morning';
    }

    const record = await base44.asServiceRole.entities.ConsultationRequest.create({
      full_name: fullName,
      email,
      phone,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
      notes
    });

    let emailSent = false;
    try {
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: 'pramod@triyashfinancial.com',
        template_name: 'ConsultationRequest',
        variables: {
          full_name: fullName,
          client_email: email,
          client_phone: phone || 'Not provided',
          preferred_date: preferredDate,
          preferred_time: TIME_LABELS[preferredTime],
          notes: notes || 'None'
        }
      });
      emailSent = true;
    } catch (emailError) {
      // The request is saved and reviewable in the app's data; the notification can be retried from it.
    }

    return Response.json({ ok: true, id: record.id, email_sent: emailSent });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}