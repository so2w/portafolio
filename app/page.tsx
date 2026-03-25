import Image from 'next/image';
import Link from 'next/link';
import { Terminal, Eye, MessageSquare, Activity, Network, Send, User, Lock, ExternalLink, FileCode } from 'lucide-react';

import { createClient } from '../lib/supabase/server';

export default async function PortfolioPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase.from('projects').select('*').order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 terminal-grid opacity-30 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-surface-container/80 backdrop-blur-md border-b border-outline-variant/30 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-primary">
            <Terminal className="w-6 h-6" />
            <span className="font-headline font-bold tracking-tight">SINTAXIS QUANTUM</span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-mono text-sm">
            <a href="#whoami" className="text-on-surface-variant hover:text-primary transition-colors">./whoami</a>
            <a href="#experience" className="text-on-surface-variant hover:text-primary transition-colors">./experience</a>
            <a href="#skills" className="text-on-surface-variant hover:text-primary transition-colors">./skills</a>
            <a href="#projects" className="text-on-surface-variant hover:text-primary transition-colors">./projects</a>
            <Link href="/login" className="text-primary border border-primary/50 px-3 py-1 rounded hover:bg-primary/10 transition-colors flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10 space-y-24">
        
        {/* Hero Section */}
        <section id="whoami" className="min-h-[80vh] flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                SISTEMA EN LÍNEA
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-tight">
                Julian <span className="text-primary">Arango</span>
              </h1>
              <h2 className="font-mono text-xl md:text-2xl text-on-surface-variant">
                &gt; AI Engineer & Data Analyst_
              </h2>
              <p className="text-on-surface-variant max-w-lg leading-relaxed">
                Hybrid Senior fusionando operaciones comerciales e implementación de software con el poder de la Inteligencia Artificial y el Análisis de Datos. 
                Construyendo soluciones eficientes para optimizar procesos comerciales mediante flujos de trabajo agénticos (Agentic Workflows).
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="bg-primary hover:bg-primary-fixed text-on-primary px-6 py-3 rounded font-mono text-sm font-bold flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(0,218,243,0.3)]">
                  <Eye className="w-4 h-4" />
                  <span>Ver Proyectos</span>
                </a>
                <a href="#contact" className="bg-surface-bright hover:bg-surface-container-high text-on-surface border border-outline-variant px-6 py-3 rounded font-mono text-sm flex items-center gap-2 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span>Iniciar Conexión</span>
                </a>
              </div>
            </div>
            
            {/* Hero Terminal */}
            <div className="terminal-window transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-neon-green"></div>
                </div>
                <div className="text-xs font-mono text-on-surface-variant">julian_profile.sh</div>
                <div className="w-4"></div>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="flex">
                  <span className="text-primary mr-2">➜</span>
                  <span className="text-neon-pink">~</span>
                  <span className="text-on-surface ml-2">./get_status.sh</span>
                </div>
                <div className="text-on-surface-variant pl-4 border-l-2 border-outline-variant/50 space-y-2">
                  <p><span className="text-primary">Rol:</span> AI Engineer / Data Analyst</p>
                  <p><span className="text-primary">Base:</span> Medellín, Colombia</p>
                  <p><span className="text-primary">Especialidad:</span> Agentic Workflows, Automatización, SQL</p>
                  <p><span className="text-primary">Estado:</span> Desarrollando Text-to-SQL MVP</p>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-primary mr-2">➜</span>
                  <span className="text-neon-pink">~</span>
                  <span className="w-2 h-4 bg-on-surface ml-2 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="font-headline text-3xl font-bold text-on-surface">Experiencia</h2>
            <div className="h-px bg-outline-variant/50 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { role: "Inventory Analyst", company: "Steward Health Care", period: "Ago 2023 - Presente", desc: ["Gestión optimizada de datos usando Power Query y Pivot Tables", "Stakeholder management enfocado en EEUU", "Administración de plataformas ServiceNow e Intune"] },
              { role: "IT Infra Analyst", company: "CCO Systems", period: "Nov 2022 - Jun 2023", desc: ["Supervisión del éxito del cliente y consultoría técnica", "Mejora continua de procesos e infraestructura IT"] },
              { role: "Implementation Spec.", company: "BYTE CO", period: "Jun 2019 - Nov 2022", desc: ["Despliegue integral de sistemas corporativos ERP", "Entrenamiento exhaustivo de usuarios finales", "Planificación y ejecución de migración de datos"] },
              { role: "Independent Consultant", company: "Freelance", period: "Abr 2017 - May 2019", desc: ["Asesoramiento técnico y consultoría en ERP para PYMES", "Gestión, depuración y administración de bases de datos SQL", "Capacitación de equipos técnicos"] },
              { role: "Implementation Analyst", company: "Casa de Software Tecno S.A.S", period: "May 2012 - Mar 2017", desc: ["Implementaciones end-to-end de software corporativo en la industria de la carne", "Manejo e integración de módulos de producción, financieros y logística"] }
            ].map((job, idx) => (
              <div key={idx} className="bg-surface-container border border-outline-variant/50 rounded-lg p-6 hover:border-primary/50 transition-colors group">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div>
                    <h3 className="font-headline font-bold text-xl text-primary group-hover:text-primary-fixed transition-colors">{job.role}</h3>
                    <p className="font-mono text-sm text-on-surface-variant mt-1">{job.company}</p>
                  </div>
                  <span className="font-mono text-xs bg-surface-bright px-2 py-1 rounded text-on-surface-variant whitespace-nowrap">{job.period}</span>
                </div>
                <ul className="space-y-2 text-on-surface-variant text-sm">
                  {job.desc.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neon-pink mt-1">▹</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="h-px bg-outline-variant/50 flex-1"></div>
            <h2 className="font-headline text-3xl font-bold text-on-surface">sys.get_capabilities()</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container border border-outline-variant/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-neon-green/10 flex items-center justify-center text-neon-green border border-neon-green/20">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-headline font-bold text-lg">AI & Automation</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">Gemini API</span>
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">Agentic Workflows</span>
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">Prompt Eng</span>
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">n8n</span>
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="font-headline font-bold text-lg">Data & Engineering</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">Python</span>
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">SQL</span>
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">Streamlit</span>
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">R</span>
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">Docker</span>
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">GCP</span>
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-neon-pink/10 flex items-center justify-center text-neon-pink border border-neon-pink/20">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-headline font-bold text-lg">Business & Ops</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">ERP Implementation</span>
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">Power Query</span>
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">Strategic Analysis</span>
                <span className="font-mono text-xs bg-surface-dark border border-outline-variant px-3 py-1.5 rounded text-on-surface">Software Training</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="font-headline text-3xl font-bold text-on-surface">Proyectos Destacados</h2>
            <div className="h-px bg-outline-variant/50 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects && projects.length > 0 ? projects.map((project: any) => (
              <div key={project.id} className="bg-surface-container border border-outline-variant/50 rounded-lg overflow-hidden group flex flex-col">
                <div className="h-48 bg-surface-bright relative overflow-hidden shrink-0">
                  {project.image_url ? (
                    <Image 
                      src={project.image_url} 
                      alt={project.name} 
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                    />
                  ) : (
                     <div className="w-full h-full flex items-center justify-center bg-surface-dark">
                        <Terminal className="text-surface-variant w-12 h-12" />
                     </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline font-bold text-xl text-on-surface group-hover:text-primary transition-colors">{project.name}</h3>
                    <div className="flex gap-2">
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies && project.technologies.map((tech: string, i: number) => (
                      <span key={i} className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            )) : (
               <div className="col-span-full py-12 text-center text-on-surface-variant border border-dashed border-outline-variant rounded-lg">
                 &gt; No projects found in system. Initialize via dashboard.
               </div>
            )}
          </div>
        </section>

        {/* About / Terminal Section */}
        <section id="about" className="space-y-12">
          <div className="terminal-window max-w-4xl mx-auto">
            <div className="terminal-header">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-neon-green"></div>
              </div>
              <div className="text-xs font-mono text-on-surface-variant">cat julian_info.json</div>
              <div className="w-4"></div>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-on-surface-variant">
<span className="text-primary">{`{`}</span>
  <span className="text-neon-pink">"nombre"</span>: <span className="text-neon-green">"Julian Arango"</span>,
  <span className="text-neon-pink">"educacion"</span>: <span className="text-primary">{`[`}</span>
    <span className="text-neon-green">"ITM - Tecnólogo en Electrónica"</span>,
    <span className="text-neon-green">"Coursera - Google Data Analytics"</span>,
    <span className="text-neon-green">"Coursera - Data Analysis with R"</span>
  <span className="text-primary">{`]`}</span>,
  <span className="text-neon-pink">"intereses"</span>: <span className="text-primary">{`[`}</span>
    <span className="text-neon-green">"GenAI & Agentic Workflows"</span>,
    <span className="text-neon-green">"Automatización de Procesos"</span>,
    <span className="text-neon-green">"Business Intelligence"</span>
  <span className="text-primary">{`]`}</span>,
  <span className="text-neon-pink">"filosofia"</span>: <span className="text-neon-green">"Resolver la fricción en los negocios, combinando un profundo conocimiento de las operaciones con IA y Automatización."</span>
<span className="text-primary">{`}`}</span>
              </pre>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 text-center space-y-8">
          <h2 className="font-headline text-4xl font-bold text-on-surface">./iniciar_conversacion.sh</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Actualmente estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto interesante o simplemente quieres hablar sobre tecnología, mi bandeja de entrada está abierta.
          </p>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-fixed text-on-primary px-8 py-4 rounded font-mono text-lg font-bold transition-colors shadow-[0_0_20px_rgba(0,218,243,0.4)]">
            <Send className="w-5 h-5" />
            <span>Transmitir Mensaje</span>
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-outline-variant/30 bg-surface-container py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-primary">
            <Terminal className="w-5 h-5" />
            <span className="font-headline font-bold">SINTAXIS QUANTUM</span>
          </div>
          <p className="font-mono text-xs text-on-surface-variant">
            © {new Date().getFullYear()} Julian Arango. Diseñado y construido en el terminal.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-mono text-xs">GitHub</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-mono text-xs">LinkedIn</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors font-mono text-xs">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
