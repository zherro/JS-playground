export interface AuthUser {
  username: string;
  name: string;
  id: number | string;
  status: number | string;

  rcRoles: string[];
  roles: string[];
}

export const RcRoles = {
  ONE_FOR_ALL: {
    id: 'ONE_FOR_ALL',
    info: 'Pode realizar atualização de qualquer registro em telas que tem permissão.',
  },
  ALTER_ONLY: {
    id: 'ALTER_ONLY',
    info: 'Pode realizar atualização apenas em registros criados pelo próprio usuário.',
  },
};

export const Modules = {
  rotas: {
    main: { id: 'ROTA_ALL', info: 'Permissão as todas as regras de rotas' },
    create: { id: 'ROTA_CREATE', info: 'Permite cadastrar novas rotas' },
    update: { id: 'ROTA_EDIT', info: 'Permite editar uma rota existente' },
    delete: { id: 'ROTA_DELETE', info: 'Permite inativar rotas' },
    view: { id: 'ROTA_VIEW', info: 'Permite vizualizar rotas' },
  },
  clientes: {
    main: { id: 'CLIENTE_ALL', info: 'Permissão a todas as regras de clientes' },
    create: { id: 'CLIENTE_CREATE', info: 'Permite cadastrar novos clientes' },
    update: { id: 'CLIENTE_EDIT', info: 'Permite editar um cliente' },
    delete: { id: 'CLIENTE_DELETE', info: 'Permite inativar clientes' },
    view: { id: 'CLIENTE_VIEW', info: 'Permite vizualizar clientes' },
  },

  grupos: {
    main: { id: 'GRUPO_ALL', info: 'Permissão as todas as regras de grupos' },
    create: { id: 'GRUPO_CREATE', info: 'Permite cadastrar novas grupos' },
    update: { id: 'GRUPO_EDIT', info: 'Permite editar um grupo existente' },
    delete: { id: 'GRUPO_DELETE', info: 'Permite inativar grupos' },
    view: { id: 'GRUPO_VIEW', info: 'Permite vizualizar grupos' },
  },

  contratoModelo: {
    main: {
      id: 'CONTRATO_MODELO_ALL',
      info: 'Permissão as todas as regras de modelo de contratos',
    },
    create: { id: 'CONTRATO_MODELO_CREATE', info: 'Permite cadastrar novos modelos' },
    update: { id: 'CONTRATO_MODELO_EDIT', info: 'Permite editar um modelo existente' },
    delete: { id: 'CONTRATO_MODELO_DELETE', info: 'Permite intativar modelos' },
    view: { id: 'CONTRATO_MODELO_VIEW', info: 'Permite vizualizar modelos' },
  },
};
