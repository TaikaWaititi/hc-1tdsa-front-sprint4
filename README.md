# HC Sprint 4 - Front-End (React + Vite + TypeScript)

**Projeto:** Sistema de Gestão (Sprint 4)  
**Equipe:**  
- Bruno Martins Bettio (RM564939)  
- Otávio Ferreira Barreto Santos (RM565960)  
- Raphael Salomão Chamma (RM564765)  
- Samuel Tenório Caval (RM565881)  

## Principais adições nesta entrega
- Componente integrado na **Home** para buscar endereço por CEP (`SearchCepForm`).
- Hook reutilizável `useCepSearch` para consumo da API ViaCEP.
- Componentes `CepResult` e `LoadingSpinner`.
- Tipagem TypeScript para resposta da ViaCEP (`src/types/viaCep.ts`).
- Estilização com **TailwindCSS** (utilitários personalizados para as cores do projeto).

## Tecnologias
- React 18
- Vite
- TypeScript
- TailwindCSS
- API externa: https://viacep.com.br/

## Observações sobre o componente de CEP
- O campo de CEP aceita somente números. Deve ter 8 dígitos para realizar a consulta.
- Tratamento de erros implementado (CEP inválido, não encontrado, erros de rede).
- A integração consome `https://viacep.com.br/ws/{cep}/json/`.

