import { redirect } from 'next/navigation'
import { createClient } from '../../lib/supabase/server'
import Link from 'next/link'
import { Terminal, LogOut } from 'lucide-react'
import { signOut } from './actions'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-surface-container border-b border-outline-variant/30 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3 text-primary">
            <Terminal className="w-6 h-6" />
            <span className="font-headline font-bold">ADMIN_PANEL</span>
          </Link>
          <div className="flex items-center gap-6">
            <span className="font-mono text-sm text-on-surface-variant hidden md:inline-block cursor-default">
              user: {data.user.email}
            </span>
            <form action={signOut}>
              <button className="text-error hover:text-error/80 flex items-center gap-2 font-mono text-sm transition-colors cursor-pointer">
                <LogOut className="w-4 h-4" />
                <span>LOGOUT</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        {children}
      </main>
    </div>
  )
}
