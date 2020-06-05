import { atom } from 'recoil';

export const plancuentas = atom({
    key: 'plancuentas',
    default: [ ]
  });

  export const tipoauxi = atom({
    key: 'tipoauxi',
    default: ['BD','TT','CL','CA','BE' ]
  });
  export const auxi = atom({
    key: 'auxi',
    default: ['BD' ]
  });