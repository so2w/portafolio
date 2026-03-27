'use client';

import { useState } from 'react';
import { Lock, Terminal } from 'lucide-react';

export default function SecretGate({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [secret, setSecret] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (btoa(secret.toLowerCase().trim()) === "cmVsYXRvcw==") {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setSecret('');
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="w-full max-w-md bg-surface-container border border-outline-variant/30 rounded-lg p-8 relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
      <div className="flex justify-center mb-8 text-primary">
        <Lock className="w-12 h-12" />
      </div>
      <h1 className="text-2xl font-headline font-bold text-center text-on-surface mb-8">./system_locked</h1>
      
      {error && (
        <div className="bg-error/10 border border-error text-error p-3 rounded font-mono text-sm mb-6 flex gap-2 items-center">
          <Terminal className="w-4 h-4" /> Error: Access Denied
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="secret_phrase" className="font-mono text-sm text-on-surface-variant block">secret_phrase_</label>
          <input
            id="secret_phrase"
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="w-full bg-surface-dark border border-outline-variant rounded p-3 text-on-surface font-mono text-sm focus:border-primary focus:outline-none transition-colors"
            required
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-fixed text-on-primary py-3 rounded font-mono font-bold transition-colors shadow-[0_0_15px_rgba(0,218,243,0.3)]"
        >
          &gt; VERIFY
        </button>
      </form>
    </div>
  );
}
