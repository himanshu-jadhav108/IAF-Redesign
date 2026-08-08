import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#E1E3E4] dark:border-slate-800 relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E1E3E4] dark:border-slate-800">
          <h2 id="modal-title" className="text-lg font-extrabold text-[#001E40] dark:text-white">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#737780] dark:text-slate-400 hover:text-[#001E40] dark:hover:text-white hover:bg-[#F8F9FA] dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#003366] dark:focus:ring-sky-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="py-4 overflow-y-auto flex-1 text-slate-800 dark:text-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
};
