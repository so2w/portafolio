import { addProject } from '../actions'
import Link from 'next/link'
import { ArrowLeft, Save } from 'lucide-react'

export default function NewProjectPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="text-on-surface-variant hover:text-primary transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl font-headline font-bold text-on-surface">Nuevo Proyecto</h1>
      </div>

      <form action={addProject} className="bg-surface-container border border-outline-variant/50 rounded-lg p-6 space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="font-mono text-sm text-on-surface-variant block">Nombre_</label>
          <input id="name" name="name" type="text" required className="w-full bg-surface-dark border border-outline-variant rounded p-3 text-on-surface focus:border-primary focus:outline-none transition-colors" />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="description" className="font-mono text-sm text-on-surface-variant block">Descripción_</label>
          <textarea id="description" name="description" rows={4} required className="w-full bg-surface-dark border border-outline-variant rounded p-3 text-on-surface focus:border-primary focus:outline-none transition-colors"></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="technologies" className="font-mono text-sm text-on-surface-variant block">Tecnologías (separadas por coma)_</label>
          <input id="technologies" name="technologies" type="text" placeholder="Python, React, Tailwind..." className="w-full bg-surface-dark border border-outline-variant rounded p-3 text-on-surface focus:border-primary focus:outline-none transition-colors" />
        </div>

        <div className="space-y-2">
          <label htmlFor="url" className="font-mono text-sm text-on-surface-variant block">URL del Proyecto (GitHub/Demo)_</label>
          <input id="url" name="url" type="url" className="w-full bg-surface-dark border border-outline-variant rounded p-3 text-on-surface focus:border-primary focus:outline-none transition-colors" />
        </div>

        <div className="space-y-2">
          <label htmlFor="image_url" className="font-mono text-sm text-on-surface-variant block">URL de la Imagen_</label>
          <input id="image_url" name="image_url" type="url" placeholder="https://picsum.photos/seed/ml/800/400" className="w-full bg-surface-dark border border-outline-variant rounded p-3 text-on-surface focus:border-primary focus:outline-none transition-colors" />
        </div>

        <div className="pt-4 flex justify-end">
          <button type="submit" className="bg-primary hover:bg-primary-fixed text-on-primary px-6 py-3 rounded font-mono font-bold flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(0,218,243,0.3)] cursor-pointer">
            <Save className="w-5 h-5" />
            GUARDAR PROYECTO
          </button>
        </div>
      </form>
    </div>
  )
}
