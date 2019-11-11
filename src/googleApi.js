import {JOURNAL_UID_PREFIX} from './constants';
import {generateUid} from './utils';

const spreadSheetUrl = 'https://docs.google.com/spreadsheets/d/1PRhySQOmCIb4VPTXJJESWBwnlS2ZwXlRnO2bNwG1umo#gid=0';
const firstEntryColumnIndex = 5;

export function fetchData () {
  return {
    fetchTimeout: new Promise((resolve, reject) => {
      setTimeout(resolve, 3000)
    }),
    dataPromise: new Promise((resolve, reject) => {
      sheetrock({
        url: spreadSheetUrl,
        callback: (errors, options, resp) => {
          const columnsLength = resp.rows[0].cellsArray.length;
          const dataArray = new Array(columnsLength - firstEntryColumnIndex).fill(null);
          for (const row of resp.rows) {
            let indexCounter = firstEntryColumnIndex;
            const label = row.cellsArray[1];
            while(indexCounter < columnsLength) {
              if(!dataArray[indexCounter - firstEntryColumnIndex]?.uid) {
                dataArray[indexCounter - firstEntryColumnIndex] = {uid: generateUid(JOURNAL_UID_PREFIX)}
              }
              dataArray[indexCounter - firstEntryColumnIndex][label] = row.cellsArray[indexCounter];
              indexCounter++
            }
          }
          resolve(dataArray)
        }
      });
    })
  }
}
