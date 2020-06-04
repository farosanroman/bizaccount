import { selector } from 'recoil';
import { plancuentas } from '.';

export const filterCuentas = selector({
    key: "filterCuentas",
    get: ({get}) => {
       
        const listCuentas = get(plancuentas);
        // const filterListValueState = get(filterListValue);
        
        // if (filterListValueState.length) {
        //   return listState.filter((item) =>
        //     item.value.includes(filterListValueState) && item
        //   );
        // }
      //  console.log(listCuentas)
        return listCuentas;

    }
})