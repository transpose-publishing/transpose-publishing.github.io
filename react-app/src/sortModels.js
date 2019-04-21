import {SORT_FIELDS, SORT_ORDER} from "./constants";
const {TITLE, PUBLISHER, OA, DATE} = SORT_FIELDS;
const {ASC, DESC} = SORT_ORDER;


export const orderDefaults = {
  [TITLE]: ASC,
  [PUBLISHER]: ASC,
  [OA]: DESC,
  [DATE]: DESC
};

export const sortOptions = {
  [PUBLISHER]: {ignoreBlanks: true}
};
