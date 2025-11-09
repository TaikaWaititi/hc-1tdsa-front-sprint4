import React from 'react'

export default function About(){
  return (
    <div className="prose max-w-none">
      <h2 className="text-hospital-cyan">Sobre a Clínica Online</h2>
      <p>
        A <strong>Clínica Online</strong> nasceu com o propósito de transformar a forma como pacientes e profissionais de saúde 
        realizam agendamentos médicos. Nosso objetivo é simplificar processos, diminuir filas de espera e oferecer praticidade 
        no acesso a consultas. A plataforma foi desenvolvida especialmente para garantir que qualquer pessoa, em qualquer lugar, 
        consiga marcar uma consulta em poucos cliques.
      </p>

      <h3 className="text-hospital-cyan">Nossa Missão</h3>
      <p>
        Proporcionar uma experiência digital intuitiva, rápida e segura, que facilite o acesso aos serviços de saúde. 
        Acreditamos que a tecnologia pode ser um aliado poderoso no cuidado com a saúde, promovendo bem-estar e qualidade de vida.
      </p>

      <h3 className="text-hospital-cyan">Nossa Visão</h3>
      <p>
        Ser referência nacional em agendamento digital de consultas médicas, oferecendo soluções inovadoras que aproximam 
        pacientes e profissionais de saúde, reduzindo barreiras de tempo e distância.
      </p>

      <h3 className="text-hospital-cyan">Nossos Valores</h3>
      <ul>
        <li><strong>Transparência:</strong> comunicação clara e direta em todas as etapas do processo.</li>
        <li><strong>Agilidade:</strong> agendamentos rápidos e eficientes, sem burocracias.</li>
        <li><strong>Segurança:</strong> proteção total dos dados dos pacientes.</li>
        <li><strong>Acessibilidade:</strong> site responsivo e acessível para todos os dispositivos.</li>
        <li><strong>Humanização:</strong> foco no bem-estar dos pacientes e profissionais.</li>
      </ul>

      <h3 className="text-hospital-cyan">Funcionalidades Atuais</h3>
      <p>
        Nossa plataforma conta com funcionalidades que já tornam o processo mais prático para os pacientes e médicos. Entre elas:
      </p>
      <ul>
        <li>Formulário de agendamento validado com <code>react-hook-form</code>.</li>
        <li>Envio de confirmações e lembretes automáticos (em futuras versões).</li>
        <li>Páginas informativas: Home, Sobre, Integrantes, FAQ e Contato.</li>
        <li>Layout totalmente responsivo e adaptável a celulares, tablets e desktops.</li>
      </ul>

      <h3 className="text-hospital-cyan">Planos para o Futuro</h3>
      <p>
        Nas próximas etapas do desenvolvimento, planejamos implementar integração com sistemas de prontuário eletrônico, 
        histórico completo de agendamentos e autenticação de usuários. Também pretendemos adicionar um painel exclusivo 
        para médicos e clínicas gerenciarem seus horários de forma simples e eficaz.
      </p>

      <h3 className="text-hospital-cyan">Conclusão</h3>
      <p>
        A <strong>Clínica Online</strong> é mais do que um site de agendamentos: é uma iniciativa que busca tornar a saúde 
        mais acessível e conectada. Seguimos inovando e ouvindo nossos usuários para garantir um serviço que realmente 
        faça a diferença no dia a dia de todos.
      </p>

    </div>
  )
}
