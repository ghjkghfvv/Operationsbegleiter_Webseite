'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import Image from 'next/image';
import { BELLA_DEMO_MESSAGES } from '@/lib/constants';

interface Message {
  type: 'user' | 'bella';
  text: string;
}

export function BellaDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bella', text: 'Hallo! Ich bin Bella 🐰, Ihre persönliche KI-Gesundheitsassistentin. Wie kann ich Ihnen helfen? Klicken Sie auf eine der Beispielfragen unten!' },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set());

  function handleQuestionClick(index: number) {
    if (isTyping || usedQuestions.has(index)) return;
    const qa = BELLA_DEMO_MESSAGES[index];

    setUsedQuestions(prev => new Set(prev).add(index));
    setMessages(prev => [...prev, { type: 'user', text: qa.question }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bella', text: qa.answer }]);
    }, 1500);
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Chat Window */}
      <div className="glass rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/10">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-pink-400 to-rose-500 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
            <Image src="/bella_avatar.png" alt="Bella AI" width={40} height={40} />
          </div>
          <div>
            <p className="font-semibold text-white">Bella</p>
            <p className="text-xs text-white/70">KI-Gesundheitsassistentin • Online</p>
          </div>
          <div className="ml-auto w-2 h-2 rounded-full bg-success animate-pulse" />
        </div>

        {/* Messages */}
        <div className="h-[380px] overflow-y-auto p-4 space-y-3 bg-[var(--background)]/50">
          <AnimatePresence mode="popLayout">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.type === 'user'
                      ? 'bg-pink-500 text-white rounded-br-md'
                      : 'bg-pink-50 text-[var(--foreground)] rounded-bl-md border border-pink-100'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-pink-50 px-4 py-3 rounded-2xl rounded-bl-md flex gap-1 border border-pink-100">
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 rounded-full bg-pink-400/60"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Example Questions */}
        <div className="p-4 border-t border-[var(--border)] bg-[var(--surface)]/50">
          <p className="text-xs text-[var(--foreground)]/50 mb-2">Beispielfragen:</p>
          <div className="flex flex-wrap gap-2">
            {BELLA_DEMO_MESSAGES.map((qa, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(index)}
                disabled={isTyping || usedQuestions.has(index)}
                className="text-xs px-3 py-1.5 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-left"
              >
                {qa.question.length > 40 ? qa.question.slice(0, 40) + '…' : qa.question}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar (decorative) */}
        <div className="p-3 border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)]">
            <span className="text-sm text-[var(--foreground)]/40 flex-1">Nachricht eingeben…</span>
            <Send className="w-4 h-4 text-pink-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
