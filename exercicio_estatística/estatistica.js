// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     // Escolha um elemento pivot (pode ser o primeiro elemento)
//     const pivot = arr[0];
  
//     // Divida o array em duas partes: elementos menores que o pivot e elementos maiores que o pivot
//     const left = [];
//     const right = [];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
  
//     // Recursivamente ordene as duas partes
//     const sortedLeft = quickSort(left);
//     const sortedRight = quickSort(right);
  
//     // Combine as partes ordenadas com o pivot no meio
//     return sortedLeft.concat(pivot, sortedRight);
//   }





const lista_ordenada = {'NÚMERO': 'QUANTIDADE', 23: [23,23].length,24: [24,24,24].length,25: [25,25,25,25].length,26: [26,26,26,26,26].length,27: [27,27,27,27,27,27].length,28: [28,28,28,28].length,29: [29,29,29].length,30: [30].length,31: [31].length,32: [32,32].length,33: [33].length,34: [34].length,35: [35].length,36: [36].length,39: [39].length,41: [41].length}
console.table(lista_ordenada)
