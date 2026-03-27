import { login, signup } from './actions'
import { Terminal } from 'lucide-react'
import SecretGate from '../../components/SecretGate'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error: string }
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 terminal-grid opacity-30 pointer-events-none"></div>

      <SecretGate>
        <div className="w-full max-w-md bg-surface-container border border-outline-variant/30 rounded-lg p-8 relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex justify-center mb-8 text-primary">
          <Terminal className="w-12 h-12" />
        </div>
        <h1 className="text-2xl font-headline font-bold text-center text-on-surface mb-8">./system_auth.sh</h1>

        {searchParams?.error && (
          <div className="bg-error/10 border border-error text-error p-3 rounded font-mono text-sm mb-6">
            Error: {searchParams.error}
          </div>
        )}

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="font-mono text-sm text-on-surface-variant block">email_address_</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-surface-dark border border-outline-variant rounded p-3 text-on-surface font-mono text-sm focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="font-mono text-sm text-on-surface-variant block">security_token_</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full bg-surface-dark border border-outline-variant rounded p-3 text-on-surface font-mono text-sm focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              formAction={login}
              type="submit"
              className="w-full bg-primary hover:bg-primary-fixed text-on-primary py-3 rounded font-mono font-bold transition-colors shadow-[0_0_15px_rgba(0,218,243,0.3)]"
            >
              &gt; LOGIN
            </button>
            <button
              formAction={signup}
              type="submit"
              className="w-full bg-surface-bright hover:bg-surface-container-high text-on-surface border border-outline-variant py-3 rounded font-mono font-bold transition-colors"
            >
              &gt; REGISTER
            </button>
          </div>
        </form>
      </div>
      </SecretGate>
    </div>
  )
}
