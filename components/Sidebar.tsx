import Link from 'next/link';
import { Terminal, LayoutDashboard, Code2, BarChart2, Cpu, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-surface-container border-r border-outline-variant/30 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-outline-variant/30">
        <div className="flex items-center gap-3 text-primary">
          <Terminal className="w-6 h-6" />
          <span className="font-headline font-bold tracking-tight">SINTAXIS QUANTUM</span>
        </div>
        <div className="mt-2 font-mono text-xs text-on-surface-variant">v2.0.4-beta</div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded bg-primary/10 text-primary border border-primary/30 font-mono text-sm transition-colors">
          <LayoutDashboard className="w-4 h-4" />
          <span>Dashboard</span>
        </Link>
        <Link href="/dashboard/projects/new" className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant hover:bg-surface-bright hover:text-on-surface font-mono text-sm transition-colors">
          <Code2 className="w-4 h-4" />
          <span>Proyectos</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant hover:bg-surface-bright hover:text-on-surface font-mono text-sm transition-colors">
          <BarChart2 className="w-4 h-4" />
          <span>Analíticas</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant hover:bg-surface-bright hover:text-on-surface font-mono text-sm transition-colors">
          <Cpu className="w-4 h-4" />
          <span>Recursos</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded text-on-surface-variant hover:bg-surface-bright hover:text-on-surface font-mono text-sm transition-colors">
          <Settings className="w-4 h-4" />
          <span>Configuración</span>
        </Link>
      </nav>

      <div className="p-4 border-t border-outline-variant/30">
        <Link href="/login" className="flex items-center gap-3 px-4 py-3 rounded text-error hover:bg-error/10 font-mono text-sm transition-colors w-full">
          <LogOut className="w-4 h-4" />
          <span>Cerrar Sesión</span>
        </Link>
      </div>
    </aside>
  );
}
