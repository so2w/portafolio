import { createClient } from '../../lib/supabase/server'
import { deleteProject } from './actions'
import Link from 'next/link'
import { Plus, Trash2 } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: projects } = await supabase.from('projects').select('*').order('created_at', { ascending: false })

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-headline font-bold text-on-surface">Proyectos</h1>
        <Link href="/dashboard/new" className="bg-primary hover:bg-primary-fixed text-on-primary px-4 py-2 rounded font-mono text-sm font-bold flex items-center gap-2">
          <Plus className="w-4 h-4" />
          NUEVO PROYECTO
        </Link>
      </div>

      <div className="bg-surface-container border border-outline-variant/50 rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-outline-variant/30 text-on-surface-variant font-mono text-sm bg-surface-dark">
              <th className="p-4">Nombre</th>
              <th className="p-4 hidden md:table-cell">Tecnologías</th>
              <th className="p-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {projects && projects.length > 0 ? projects.map((project: any) => (
              <tr key={project.id} className="border-b border-outline-variant/20 hover:bg-surface-dark transition-colors">
                <td className="p-4 font-headline text-on-surface">{project.name}</td>
                <td className="p-4 hidden md:table-cell font-mono text-xs text-primary">
                  {project.technologies?.join(', ')}
                </td>
                <td className="p-4 text-right">
                  <form action={deleteProject} className="inline-block">
                    <input type="hidden" name="id" value={project.id} />
                    <button type="submit" className="text-error hover:text-error/80 p-2 transition-colors inline-block cursor-pointer" title="Eliminar">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </form>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={3} className="p-8 text-center text-on-surface-variant font-mono text-sm">
                  No hay proyectos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
