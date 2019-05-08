const startTime = Date.now();
import {JOURNAL_UID_PREFIX} from './constants';
import {generateUid} from './utils';

const spreadSheetUrl = 'https://docs.google.com/spreadsheets/d/19fuw6MEVPgoTgqY5Vh8JFEvW_HA4oPaDE_g3BZhB7Ek';
const gid = "#gid=1234798369"; //sheet id
export const downloadUrl = `${spreadSheetUrl}/export?format=xlsx&id=19fuw6MEVPgoTgqY5Vh8JFEvW_HA4oPaDE_g3BZhB7Ek`;


export function fetchData ({rows = 0}) {
  return new Promise((resolve, reject) => {
    sheetrock({
      url: spreadSheetUrl + gid,
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
            item.uid = generateUid(JOURNAL_UID_PREFIX);
            dataArray.push(item);
          }
        }
        console.log('timer', Date.now() - startTime);
        resolve(dataArray);
      }
    });
  });
}
