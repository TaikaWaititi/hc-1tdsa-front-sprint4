import React from 'react';
import { ViaCepData } from '../types/viaCep';

export default function CepResult({data}:{data: ViaCepData}){
  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h4 className="font-semibold text-hospital-cyan text-lg">Resultado</h4>
      <ul className="mt-2 text-sm text-gray-700 space-y-1">
        <li><strong>CEP:</strong> {data.cep}</li>
        <li><strong>Logradouro:</strong> {data.logradouro || '-'}</li>
        <li><strong>Complemento:</strong> {data.complemento || '-'}</li>
        <li><strong>Bairro:</strong> {data.bairro || '-'}</li>
        <li><strong>Cidade:</strong> {data.localidade || '-'}</li>
        <li><strong>UF:</strong> {data.uf || '-'}</li>
      </ul>
    </div>
  );
}
