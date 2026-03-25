'use server'

import { createClient } from '../../lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function addProject(formData: FormData) {
  const supabase = await createClient()
  
  const name = formData.get('name') as string
  const description = formData.get('description') as string
  const url = formData.get('url') as string
  const image_url = formData.get('image_url') as string
  const techString = formData.get('technologies') as string
  const technologies = techString.split(',').map(t => t.trim()).filter(Boolean)

  const { error } = await supabase.from('projects').insert({
    name, description, url, image_url, technologies
  })

  // Basic error feedback can be improved through state or URL params
  if (!error) {
    revalidatePath('/')
    revalidatePath('/dashboard')
    redirect('/dashboard')
  }
}

export async function deleteProject(formData: FormData) {
  const supabase = await createClient()
  const id = formData.get('id') as string

  if (id) {
    await supabase.from('projects').delete().eq('id', id)
    revalidatePath('/')
    revalidatePath('/dashboard')
  }
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}
