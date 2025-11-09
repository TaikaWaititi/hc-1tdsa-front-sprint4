import React from 'react'

export default function Team(){
  return (
    <div className="space-y-6">
      <h2 className="text-hospital-cyan font-bold text-2xl">Integrantes</h2>
      <p className="text-gray-700">Confira abaixo os integrantes do grupo com suas respectivas informações.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded shadow flex flex-col items-center text-center">
          <img src="/samuel-tenorio.jpg" alt="Samuel Tenório" className="w-32 h-32 object-cover rounded-full mb-4" />
          <h4 className="font-semibold">Samuel Tenório</h4>
          <p className="text-sm text-gray-600">RM: 564765</p>
          <div className="flex flex-col items-center space-y-1 mt-2">
            <a href="https://github.com/SaaxzDev" target="_blank" rel="noopener noreferrer" className="text-hospital-cyan hover:underline text-sm">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/samuel-ten%C3%B3rio-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
               target="_blank" rel="noopener noreferrer" className="text-hospital-cyan hover:underline text-sm">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col items-center text-center">
          <img src="/raphael-salomao.jpg" alt="Raphael Chamma" className="w-32 h-32 object-cover rounded-full mb-4" />
          <h4 className="font-semibold">Raphael Chamma</h4>
          <p className="text-sm text-gray-600">RM: 564939</p>
          <div className="flex flex-col items-center space-y-1 mt-2">
            <a href="https://github.com/salomaochamma" target="_blank" rel="noopener noreferrer" className="text-hospital-cyan hover:underline text-sm">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/raphael-salom%C3%A3o-chamma-467b55200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
               target="_blank" rel="noopener noreferrer" className="text-hospital-cyan hover:underline text-sm">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col items-center text-center">
          <img src="/foto-bruno.jpg" alt="Bruno Martins Bettio" className="w-32 h-32 object-cover rounded-full mb-4" />
          <h4 className="font-semibold">Bruno Martins Bettio</h4>
          <p className="text-sm text-gray-600">RM: 565881</p>
          <div className="flex flex-col items-center space-y-1 mt-2">
            <a href="https://github.com/TaikaWaititi" target="_blank" rel="noopener noreferrer" className="text-hospital-cyan hover:underline text-sm">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bruno-martins-bettio/" target="_blank" rel="noopener noreferrer" className="text-hospital-cyan hover:underline text-sm">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col items-center text-center">
          <img src="/otavio-ferreira.jpg" alt="Otávio Ferreira" className="w-32 h-32 object-cover rounded-full mb-4" />
          <h4 className="font-semibold">Otávio Ferreira</h4>
          <p className="text-sm text-gray-600">RM: 565960</p>
          <div className="flex flex-col items-center space-y-1 mt-2">
            <a href="https://github.com/otavioxxt" target="_blank" rel="noopener noreferrer" className="text-hospital-cyan hover:underline text-sm">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/otavio-ferreira-535089240/" target="_blank" rel="noopener noreferrer" className="text-hospital-cyan hover:underline text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
