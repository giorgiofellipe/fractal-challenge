/* eslint-disable camelcase */
interface AccessProfile {
  id: number;
  nome: string;
}

interface ClientProducts {
  graficos: boolean;
  mapas: boolean;
  analises: boolean;
  energia: boolean;
  hidrico: boolean;
}

interface Client {
  id: number;
  nome: string;
  produtos_contratados: ClientProducts;
  usuario: number;
}

interface Config {
  id: number;
  cliente: Client;
  login: string;
  nome: string;
  perfil: string;
  perfilAcesso: AccessProfile;
  token: string;
  ultimoAcesso: string;
}

interface GraphSerie {
  id_dns: number;
  data_hora: string;
  vazao: number;
  nivel: string;
  chuva: number;
}

interface GeoCoord {
  lat: number;
  lng: number;
}

interface GeoPoint {
  nome_stt: string;
  nome_rio_stt: string;
  responsavel_stt: string;
  lat_stt: number;
  lng_stt: number;
  localizaco_stt: string;
  uf_stt: string;
}