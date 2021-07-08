export function storage (date, notes) {
    window.localStorage.setItem(date, notes);
 }

 window.addEventListener('storage', (event) => {
    console.log({[event.key]: event.oldValue});
   });