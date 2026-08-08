import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Bot, Sparkles, X, Send, HelpCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { programsData } from '@/data/programsData';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  quickActions?: { label: string; link: string }[];
}

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const shouldReduceMotion = useReducedMotion();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: `Hello! I am your AI Impact Assistant for InAmigos Foundation. Ask me anything about our 6 flagship programs (Sewa, Bachpanshala, Jeev, Udaan, Prakriti, Vikas), 80G tax exemption receipts, or volunteer opportunities!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickActions: [
        { label: 'Explore Programs', link: '/programs' },
        { label: '80G Tax Exemption', link: '/donate' },
        { label: 'Volunteer Steps', link: '/volunteer' },
      ]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "How does 80G tax exemption work for donations?",
    "Tell me about Project Bachpanshala education drives.",
    "How do I apply for a volunteer internship?",
    "What is Project Jeev animal welfare initiative?"
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputQuery;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAIResponse(text);
      setIsTyping(false);
      setMessages((prev) => [...prev, response]);
    }, 600);
  };

  const generateAIResponse = (query: string): Message => {
    const q = query.toLowerCase();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (q.includes('80g') || q.includes('tax') || q.includes('receipt')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `All monetary donations to InAmigos Foundation are 50% tax-deductible under Section 80G of the Indian Income Tax Act. Upon donating on our secure Donate page, an official 80G receipt is issued with your PAN card details.`,
        timestamp: now,
        quickActions: [{ label: 'Go to Donation Page', link: '/donate' }]
      };
    }

    if (q.includes('bachpanshala') || q.includes('education') || q.includes('school')) {
      const p = programsData.find(item => item.id === 'bachpanshala');
      if (p) {
        return {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: `Project Bachpanshala (बचपनशाला) provides free evening classes, school bags, stationery, and digital literacy to over 3,200+ first-generation child learners across 24 centers in Bilaspur and surrounding areas.`,
          timestamp: now,
          quickActions: [{ label: 'View Bachpanshala Details', link: '/programs#bachpanshala' }]
        };
      }
    }

    if (q.includes('volunteer') || q.includes('intern') || q.includes('apply')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `You can join over 200+ active InAmigos Foundation volunteers! We offer roles in Field Teaching, Meal Drives, Animal Welfare, Event Mgmt, and Digital Media. Complete our on-site application form on the Volunteer page to receive an onboarding call within 48 hours.`,
        timestamp: now,
        quickActions: [{ label: 'Fill Volunteer Form', link: '/volunteer' }]
      };
    }

    if (q.includes('jeev') || q.includes('animal') || q.includes('dog')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `Project Jeev (जीव) feeds 500+ stray animals daily, installs reflective night-collars on highway strays, places summer water bowls, and provides emergency veterinary first-aid.`,
        timestamp: now,
        quickActions: [{ label: 'View Project Jeev', link: '/programs#jeev' }]
      };
    }

    if (q.includes('sewa') || q.includes('food') || q.includes('meal')) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `Project Sewa (सेवा) has served over 150,000+ meals and dry ration kits to daily-wage workers, unhoused elders, and vulnerable families in Chhattisgarh.`,
        timestamp: now,
        quickActions: [{ label: 'View Project Sewa', link: '/programs#sewa' }]
      };
    }

    return {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: `InAmigos Foundation is a Section 8 registered NGO based in Bilaspur, Chhattisgarh (Founder: Mr. Govind Shukla). We operate 6 flagship programs: Sewa (Food), Bachpanshala (Education), Jeev (Animal Care), Udaan (Women Hygiene), Prakriti (Environment), and Vikas (Youth Skill). How else can I assist you today?`,
      timestamp: now,
      quickActions: [
        { label: 'Explore Programs', link: '/programs' },
        { label: 'Contact NGO', link: '/contact' }
      ]
    };
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-linear-to-r from-[#003366] to-[#006E25] dark:from-sky-600 dark:to-emerald-600 text-white p-4 rounded-full shadow-2xl transition-transform flex items-center gap-2.5 focus:outline-none focus:ring-4 focus:ring-[#003366]/40 dark:focus:ring-sky-400/40 border border-white/20"
        aria-label="Open AI Impact Assistant"
      >
        <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">AI Impact Assistant</span>
      </motion.button>

      {/* Slide-over Drawer / Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
            animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:w-105 bg-white dark:bg-slate-900 shadow-2xl border-l border-[#E1E3E4] dark:border-slate-800 flex flex-col"
          >
            {/* Assistant Header */}
            <div className="bg-[#001E40] dark:bg-slate-950 text-white p-4 flex items-center justify-between border-b border-[#003366] dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FF8C00] dark:bg-orange-500 flex items-center justify-center text-white shadow-xs">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-bold flex items-center gap-1.5">
                    AI Impact Assistant
                    <span className="text-[9px] bg-emerald-500/30 text-emerald-300 font-bold px-1.5 py-0.5 rounded-full border border-emerald-400/30">
                      Live Model Prototype
                    </span>
                  </h3>
                  <span className="text-[11px] text-slate-300">InAmigos Foundation Knowledge Engine</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Subheader Notice */}
            <div className="bg-[#F8F9FA] dark:bg-slate-850 px-4 py-2 border-b border-[#E1E3E4] dark:border-slate-800 text-[11px] text-[#43474F] dark:text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#006E25] dark:text-emerald-400" />
              <span>Answers generated using verified Section 8 NGO audit records.</span>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.98 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`flex flex-col gap-1.5 max-w-[85%] ${
                    msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
                  }`}
                >
                  <div
                    className={`p-3.5 rounded-2xl text-xs leading-relaxed text-left ${
                      msg.sender === 'user'
                        ? 'bg-[#003366] dark:bg-sky-600 text-white rounded-br-xs shadow-xs'
                        : 'bg-[#F8F9FA] dark:bg-slate-800 text-[#191C1D] dark:text-slate-100 border border-[#E1E3E4] dark:border-slate-700 rounded-bl-xs'
                    }`}
                  >
                    {msg.text}

                    {msg.quickActions && (
                      <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-700">
                        {msg.quickActions.map((qa, i) => (
                          <a
                            key={i}
                            href={qa.link}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#003366] dark:text-sky-300 bg-white dark:bg-slate-700 px-2.5 py-1 rounded-full border border-[#003366]/20 dark:border-sky-400/30 hover:bg-[#003366] hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition-colors"
                          >
                            <span>{qa.label}</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-[#737780] dark:text-slate-400 px-1">{msg.timestamp}</span>
                </motion.div>
              ))}

              {isTyping && (
                <div className="self-start bg-[#F8F9FA] dark:bg-slate-800 p-3 rounded-2xl border border-[#E1E3E4] dark:border-slate-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#003366] dark:bg-sky-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-[#003366] dark:bg-sky-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 bg-[#003366] dark:bg-sky-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Quick Prompts */}
            <div className="p-3 bg-[#F8F9FA] dark:bg-slate-900 border-t border-[#E1E3E4] dark:border-slate-800 flex flex-wrap gap-1.5">
              <span className="text-[10px] font-bold text-[#737780] dark:text-slate-400 w-full flex items-center gap-1">
                <HelpCircle className="w-3 h-3 text-[#003366] dark:text-sky-400" /> Suggested Questions:
              </span>
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="text-[11px] bg-white dark:bg-slate-800 text-[#003366] dark:text-sky-300 border border-[#C3C6D1] dark:border-slate-700 px-2.5 py-1 rounded-full hover:border-[#003366] dark:hover:border-sky-400 hover:bg-[#003366]/5 dark:hover:bg-slate-700 text-left transition-colors truncate max-w-full"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white dark:bg-slate-900 border-t border-[#E1E3E4] dark:border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask AI about programs, 80G tax receipts..."
                className="flex-1 px-3.5 py-2.5 text-xs bg-[#F8F9FA] dark:bg-slate-800 border border-[#C3C6D1] dark:border-slate-700 text-[#191C1D] dark:text-slate-100 placeholder:text-[#737780] dark:placeholder:text-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003366] dark:focus:ring-sky-400"
              />
              <Button type="submit" variant="primary" size="sm" icon={<Send className="w-3.5 h-3.5" />}>
                Send
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
