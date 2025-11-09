import React from 'react'
import AppointmentForm from './AppointmentForm'

export default function Hero(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-hospital-cyan">Agende sua consulta online com rapidez</h2>
        <p className="mt-4 text-gray-700">Nosso portal facilita o agendamento, gestão de consultas e lembretes — tudo pensado para pacientes e profissionais de saúde.</p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>✔️ Agendamentos rápidos</li>
          <li>✔️ Confirmação por e‑mail</li>
          <li>✔️ Histórico de consultas</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg p-6 shadow">
        <AppointmentForm />
      </div>
    </section>
  )
}
