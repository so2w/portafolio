import { Search, Sliders, User } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="bg-surface-container border-b border-outline-variant/30 h-16 flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex-1 flex items-center">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Buscar en el sistema..." 
            className="w-full bg-surface-dark border border-outline-variant/50 rounded-full pl-10 pr-4 py-2 text-sm font-mono text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
          <Sliders className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
          <div className="text-right hidden md:block">
            <div className="text-sm font-bold text-on-surface">Julian Arango</div>
            <div className="text-xs font-mono text-primary">Admin Root</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-bright border border-primary/30 flex items-center justify-center text-primary">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
