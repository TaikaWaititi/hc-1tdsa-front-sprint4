import React from 'react'

export default function FAQ(){
  return (
    <div className="prose max-w-none">
      <h2>Perguntas Frequentes</h2>

      <h3>-Como agendar?</h3>
      <p>Use o formulário na página inicial para selecionar data, hora e tipo de serviço. Após preencher os dados obrigatórios, clique em <strong>Agendar</strong> e você receberá a confirmação.</p>

      <h3>-É possível cancelar uma consulta?</h3>
      <p>No momento, o cancelamento deve ser feito entrando em contato pelo telefone ou pelo e-mail disponíveis na página de Contato. <strong>Em versões futuras</strong>, será possível cancelar diretamente pelo sistema.</p>

      <h3>-Posso remarcar uma consulta?</h3>
      <p><strong>Sim</strong>, basta criar um novo agendamento e informar ao suporte que deseja substituir o anterior.</p>

      <h3>-Recebo lembretes da minha consulta?</h3>
      <p><strong>Sim!</strong> Você receberá uma confirmação por e-mail logo após o agendamento e um lembrete próximo à data da consulta.</p>

      <h3>-Meus dados estão seguros?</h3>
      <p><strong>Sim</strong>, a plataforma foi desenvolvida com foco em segurança e boas práticas de privacidade. Todos os dados são armazenados de forma segura e utilizados apenas para fins de agendamento.</p>

      <h3>-Quais tipos de consulta posso agendar?</h3>
      <ul>
        <li><strong>Consulta geral</strong></li>
        <li><strong>Especialista</strong></li>
        <li><strong>Retorno</strong></li>
      </ul>

      <h3>-Preciso pagar pelo agendamento?</h3>
      <p><strong>Não</strong>. O agendamento é <strong>gratuito</strong> e serve apenas para reservar seu horário. Eventuais taxas ou valores são tratados diretamente com a clínica.</p>

      <h3>-O sistema funciona em celular?</h3>
      <p><strong>Sim</strong>, o site é totalmente responsivo e pode ser acessado de qualquer dispositivo (computador, tablet ou smartphone).</p>

      <h3>-Quais navegadores são suportados?</h3>
      <p><strong>Google Chrome, Mozilla Firefox, Microsoft Edge e Safari estão totalmente suportados.</strong></p>

      <h3>-Preciso criar uma conta para usar?</h3>
      <p>Não. Basta informar <strong>nome, e-mail e os dados da consulta</strong> para realizar o agendamento.</p>

      <h3>-Posso visualizar meu histórico de consultas?</h3>
      <p>Nesta versão inicial, não. Mas <strong>nas próximas etapas do projeto</strong> haverá uma área do paciente para consulta de histórico.</p>
    </div>
  )
}
