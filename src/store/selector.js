import { selector } from 'recoil';
import { plancuentas,auxi } from '.';

export const filterCuentas = selector({
    key: "filterCuentas",
    get: ({get}) => {
        const a = get(auxi);
     // console.log("selector "+a)
        const listCuentas = get(plancuentas);
        // const filterListValueState = get(filterListValue);
        
        // if (filterListValueState.length) {
        //   return listState.filter((item) =>
        //     item.value.includes(filterListValueState) && item
        //   );
        // }
      //  console.log(listCuentas)

         return listCuentas.filter(item => item.AUXILIAR ==a);;

    }
})