import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '2349036596930';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:brightness-110 transition-all duration-300 animate-float-slow"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
    </a>
  );
}
