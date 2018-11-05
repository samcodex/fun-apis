export interface FunApi {
  name: string;
  url: string;
  description: string;
  website: string;
  id?: number;
  logo?: string;
  method?: string;
  order?: number;
  checked?: boolean;
}

export class ApiCenter {
  funApis: FunApi[];

  constructor() {}
}
