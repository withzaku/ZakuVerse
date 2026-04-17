const DEFAULT_WHATSAPP_NUMBER = "923408156101";

export const BUSINESS_NAME = "ZakuVerse";
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sikandarzulqarnain.gil@gmail.com";
export const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+92 340 8156101";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? DEFAULT_WHATSAPP_NUMBER;
export const WHATSAPP_PREFILLED_MESSAGE = "Hi, I want to build a website for my business.";

export function buildWhatsAppUrl(phoneNumber: string, message: string) {
  const cleanedNumber = phoneNumber.replace(/\D/g, "");
  return `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_PREFILLED_MESSAGE);
