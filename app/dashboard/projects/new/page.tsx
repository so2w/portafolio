import Link from 'next/link';
import { ChevronLeft, Save, Terminal, Code2, Link as LinkIcon, FileCode, UploadCloud, Eye } from 'lucide-react';

export default function NewProjectPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="p-2 rounded border border-outline-variant text-on-surface-variant hover:bg-surface-bright hover:text-primary transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-headline text-2xl font-bold text-on-surface">Nuevo Proyecto</h1>
            <p className="text-on-surface-variant font-mono text-xs mt-1">ID: PRJ-AUTO-GEN</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-bright hover:bg-surface-container-high text-on-surface border border-outline-variant px-4 py-2 rounded font-mono text-sm flex items-center gap-2 transition-colors">
            <Eye className="w-4 h-4" />
            <span>Vista Previa</span>
          </button>
          <button className="bg-primary hover:bg-primary-fixed text-on-primary px-4 py-2 rounded font-mono text-sm font-bold flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(0,218,243,0.3)]">
            <Save className="w-4 h-4" />
            <span>Guardar Proyecto</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-neon-green"></div>
              </div>
              <div className="text-xs font-mono text-on-surface-variant flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                editor_config.json
              </div>
              <div className="w-4"></div>
            </div>
            
            <div className="p-6 space-y-6 bg-surface-container">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="font-mono text-sm text-primary border-b border-outline-variant/50 pb-2 flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  METADATA_PRINCIPAL
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-on-surface-variant mb-2">TITULO_PROYECTO</label>
                    <input 
                      type="text" 
                      className="w-full bg-surface-dark border border-outline-variant rounded px-4 py-2 font-mono text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Ej: Sistema de Recomendación AI"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-on-surface-variant mb-2">CATEGORIA</label>
                    <select className="w-full bg-surface-dark border border-outline-variant rounded px-4 py-2 font-mono text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
                      <option value="">Seleccionar...</option>
                      <option value="ml">Machine Learning</option>
                      <option value="nlp">NLP / LLMs</option>
                      <option value="data">Data Analysis</option>
                      <option value="web">Web Development</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-on-surface-variant mb-2">DESCRIPCION_CORTA</label>
                  <textarea 
                    className="w-full bg-surface-dark border border-outline-variant rounded px-4 py-2 font-mono text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors h-24 resize-none"
                    placeholder="Breve descripción del proyecto..."
                  ></textarea>
                </div>
              </div>

              {/* Links & Resources */}
              <div className="space-y-4">
                <h3 className="font-mono text-sm text-neon-pink border-b border-outline-variant/50 pb-2 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  ENLACES_Y_RECURSOS
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-on-surface-variant mb-2">URL_REPOSITORIO</label>
                    <div className="relative">
                      <FileCode className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                      <input 
                        type="url" 
                        className="w-full bg-surface-dark border border-outline-variant rounded pl-10 pr-4 py-2 font-mono text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="https://github.com/..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-on-surface-variant mb-2">URL_DEMO_VIVO</label>
                    <div className="relative">
                      <Eye className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                      <input 
                        type="url" 
                        className="w-full bg-surface-dark border border-outline-variant rounded pl-10 pr-4 py-2 font-mono text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="https://demo..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-4">
                <h3 className="font-mono text-sm text-neon-green border-b border-outline-variant/50 pb-2 flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  STACK_TECNOLOGICO
                </h3>
                
                <div>
                  <label className="block font-mono text-xs text-on-surface-variant mb-2">ETIQUETAS (Separadas por coma)</label>
                  <input 
                    type="text" 
                    className="w-full bg-surface-dark border border-outline-variant rounded px-4 py-2 font-mono text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Python, TensorFlow, React..."
                  />
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-surface-bright border border-outline-variant text-xs font-mono text-on-surface-variant">
                      Python <button className="hover:text-error">&times;</button>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-surface-bright border border-outline-variant text-xs font-mono text-on-surface-variant">
                      TensorFlow <button className="hover:text-error">&times;</button>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Live Preview / Media Upload */}
        <div className="space-y-6">
          <div className="bg-surface-container border border-outline-variant/50 rounded-lg p-6">
            <h3 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-primary" />
              Media del Proyecto
            </h3>
            
            <div className="border-2 border-dashed border-outline-variant/50 rounded-lg p-8 text-center hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-6 h-6 text-on-surface-variant group-hover:text-primary transition-colors" />
              </div>
              <p className="font-mono text-sm text-on-surface mb-1">Arrastra una imagen aquí</p>
              <p className="font-mono text-xs text-on-surface-variant">PNG, JPG, WEBP hasta 5MB</p>
            </div>
          </div>

          {/* Preview Card */}
          <div className="bg-surface-container border border-outline-variant/50 rounded-lg overflow-hidden">
            <div className="p-3 border-b border-outline-variant/50 bg-surface-container-high">
              <span className="font-mono text-xs text-on-surface-variant">VISTA_PREVIA_TARJETA</span>
            </div>
            <div className="p-4">
              <div className="border border-outline-variant/50 rounded-lg overflow-hidden bg-surface-dark group">
                <div className="h-32 bg-surface-bright relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant font-mono text-xs">
                    [IMAGEN_NO_DISPONIBLE]
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Título del Proyecto</h4>
                  <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">La descripción corta aparecerá aquí para dar contexto a los visitantes sobre de qué trata este proyecto.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">Python</span>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">TensorFlow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
