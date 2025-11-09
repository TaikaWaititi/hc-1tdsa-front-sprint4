import React from 'react'
import Hero from '../components/Hero'
import SearchCepForm from '../components/SearchCepForm'

export default function Home(){
  return (
    <div className="space-y-8">
      <Hero />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">


      <section className="grid grid-cols-1 md:grid-cols-3 gap6"

        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold text-lg text-hospital-cyan">Como funciona</h3>
              <p className="mt-2 text-sm text-gray-700">Passo a passo simples para agendar um atendimento online.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold text-lg text-hospital-cyan">Segurança</h3>
              <p className="mt-2 text-sm text-gray-700">Tratamento seguro dos dados do paciente.</p>
            </div>
          </div>
        </div>

        <aside>
          <SearchCepForm />
        </aside>
      </section>
    </div>
  )
}
