/*
Fetch latest data
*/
export const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: 'the data' });
    }, 2000);
  });
