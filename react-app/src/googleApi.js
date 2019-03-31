const startTime = Date.now();
const spreadSheetUrl = 'https://docs.google.com/spreadsheets/d/19fuw6MEVPgoTgqY5Vh8JFEvW_HA4oPaDE_g3BZhB7Ek/edit?usp=sharing';

export function fetchData ({rows = 0}) {
  return new Promise((resolve, reject) => {
    sheetrock({
      url: spreadSheetUrl + "#gid=1234798369",
      fetchSize: rows,
      callback: (errors, options, resp) => {
        const dataArray = [];
        for (const row of resp.rows) {
          if(row.num !== 0) {
            const item = {};
            let labelIndex = 0;
            for (const label of row.labels) {
              item[label] = row.cellsArray[labelIndex];
              labelIndex++
            }
            dataArray.push(item);
          }
        }
        console.log('timer', Date.now() - startTime);
        resolve(dataArray);
      }
    });
  });
}

export function fetchContent () {
  return new Promise((resolve, reject) => {
    sheetrock({
      url: spreadSheetUrl + "#gid=1450529732",
      callback: (errors, options, resp) => {
        const obj = {};
        resp.rows.forEach( (row, index) => {
          if(index !== 0) {
            obj[row.cellsArray[0]] = row.cellsArray[1]
          }
        });
        resolve(obj)
      }
    })
  })
}
