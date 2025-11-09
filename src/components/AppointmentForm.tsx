import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  date: string
  time: string
  service: string
}

export default function AppointmentForm(){
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    alert('Agendamento criado (demo): ' + JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Nome completo</label>
        <input {...register('name', { required: true })} className="w-full border rounded px-3 py-2 mt-1" aria-required />
        {errors.name && <span className="text-red-600 text-sm">Nome é obrigatório</span>}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input {...register('email', { required: true, pattern: /@/ })} className="w-full border rounded px-3 py-2 mt-1" />
        {errors.email && <span className="text-red-600 text-sm">Email inválido</span>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium">Data</label>
          <input type="date" {...register('date', { required: true })} className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium">Hora</label>
          <input type="time" {...register('time', { required: true })} className="w-full border rounded px-3 py-2 mt-1" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Serviço</label>
        <select {...register('service', { required: true })} className="w-full border rounded px-3 py-2 mt-1">
          <option value="">Selecione</option>
          <option value="consulta-geral">Consulta geral</option>
          <option value="especialista">Especialista</option>
          <option value="retorno">Retorno</option>
        </select>
      </div>

      <div className="text-right">
        <button type="submit" className="px-4 py-2 rounded bg-hospital-cyan text-white font-medium">Agendar</button>
      </div>
    </form>
  )
}
