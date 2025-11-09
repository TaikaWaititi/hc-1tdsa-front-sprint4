export interface ViaCepData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string; // cidade
  uf: string; // estado
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}
