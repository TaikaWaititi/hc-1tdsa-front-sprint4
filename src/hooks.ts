import { useState } from 'react';
import { ViaCepData } from '../types/viaCep';

export function useCepSearch() {
  const [data, setData] = useState<ViaCepData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchCep(cep: string) {
    setError(null);
    setData(null);
    if (!/^[0-9]{8}$/.test(cep)) {
      setError('CEP deve conter exatamente 8 dígitos numéricos.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!res.ok) throw new Error('Erro na requisição');
      const json = await res.json();
      if (json.erro) {
        setError('CEP não encontrado.');
        setData(null);
      } else {
        setData(json as ViaCepData);
      }
    } catch (e:any) {
      setError(e.message || 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchCep };
}
