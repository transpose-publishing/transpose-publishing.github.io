import {FILTERNAMES as FN} from "../constants";
import {isNot} from "../utils";
import content from '../content/content';


export const filterList = {
  [FN.OA]: {name: FN.OA, content: content.oa},
  [FN.PR_POLICY]: {name: FN.PR_POLICY, content: content.pr_policy},
  [FN.PR_DATABASE]: {name: FN.PR_DATABASE, content: content.pr_database},
  [FN.PR_TRANSFER_POLICY]: {name: FN.PR_TRANSFER_POLICY, content: content.pr_transfer_policy},
  [FN.OPR_REPORTS]: {name: FN.OPR_REPORTS, content: content.opr_reports},
  [FN.OPR_RESPONSES]: {name: FN.OPR_RESPONSES, content: content.opr_responses},
  [FN.OPR_LETTERS]: {name: FN.OPR_LETTERS, content: content.opr_letters},
  [FN.OPR_VERSIONS]: {name: FN.OPR_VERSIONS, content: content.opr_versions},
  [FN.OPR_IDENTITIES_PUBLISHED]: {name: FN.OPR_IDENTITIES_PUBLISHED, content: content.opr_identities_published},
  [FN.OPR_IDENTITIES_AUTHOR]: {name: FN.OPR_IDENTITIES_AUTHOR, content: content.opr_identities_author},
  [FN.OPR_COMMENTS]: {name: FN.OPR_COMMENTS, content: content.opr_comments},
  [FN.OPR_INTERACTION]: {name: FN.OPR_INTERACTION, content: content.opr_interaction},
  [FN.COREVIEW_POLICY]: {name: FN.COREVIEW_POLICY, content: content.coreview_policy},
  [FN.COREVIEW_EMAIL]: {name: FN.COREVIEW_EMAIL, content: content.coreview_email},
  [FN.COREVIEW_FORM]: {name: FN.COREVIEW_FORM, content: content.coreview_form},
  [FN.COREVIEW_DATABASE]: {name: FN.COREVIEW_DATABASE, content: content.coreview_database},
  [FN.PREPRINT_POLICY]: {name: FN.PREPRINT_POLICY, content: content.preprint_policy},
  [FN.PREPRINT_VERSION]: {name: FN.PREPRINT_VERSION, content: content.preprint_version},
  [FN.PREPRINT_CITATION]: {name: FN.PREPRINT_CITATION, content: content.preprint_citation},
  [FN.PREPRINT_MEDIA]: {name: FN.PREPRINT_MEDIA, content: content.preprint_media},
  [FN.PREPRINT_LICENSING]: {name: FN.PREPRINT_LICENSING, content: content.preprint_licensing},
  [FN.PREPRINT_SCOOP]: {name: FN.PREPRINT_SCOOP, content: content.preprint_scoop},
  [FN.PREPRINT_REVIEW]: {name: FN.PREPRINT_REVIEW, content: content.preprint_review}
};


export const filterTypesList = [
  {
    typeName: 'peerReview',
    content: content.filter_type_pr,
    filters: [
      filterList[FN.PR_POLICY],
      filterList[FN.PR_DATABASE],
      filterList[FN.PR_TRANSFER_POLICY]
    ]
  },
  {
    typeName: 'openPeerReview',
    content: content.filter_type_opr,
    filters: [
      filterList[FN.OPR_REPORTS],
      filterList[FN.OPR_RESPONSES],
      filterList[FN.OPR_LETTERS],
      filterList[FN.OPR_VERSIONS],
      filterList[FN.OPR_IDENTITIES_PUBLISHED],
      filterList[FN.OPR_IDENTITIES_AUTHOR],
      filterList[FN.OPR_COMMENTS],
      filterList[FN.OPR_INTERACTION],
    ]
  },
  {
    typeName: 'coreview',
    content: content.filter_type_coreview,
    filters: [
      filterList[FN.COREVIEW_POLICY],
      filterList[FN.COREVIEW_EMAIL],
      filterList[FN.COREVIEW_FORM],
      filterList[FN.COREVIEW_DATABASE],
    ]
  },
  {
    typeName: 'preprint',
    content: content.filter_type_preprint,
    filters: [
      filterList[FN.PREPRINT_POLICY],
      filterList[FN.PREPRINT_VERSION],
      filterList[FN.PREPRINT_CITATION],
      filterList[FN.PREPRINT_MEDIA],
      filterList[FN.PREPRINT_LICENSING],
      filterList[FN.PREPRINT_SCOOP],
      filterList[FN.PREPRINT_REVIEW],
    ]
  }
];


const no_blank = ["No", ""];
const no_notSpecified_blank = ["No", "Not specified", ""];

export const filterRules = {
  [FN.VERIFIED]: item => item.verified === "Yes",
  [FN.OA]: item => item.oa === "Yes" || item.oa === "OA",
  [FN.PR_POLICY]: item => item['pr-policy'] !== "",
  [FN.PR_DATABASE]: item => isNot(item['pr-database'], no_blank),
  [FN.PR_TRANSFER_POLICY]: item => isNot(item['pr-transfer-policy'], no_blank),
  [FN.OPR_REPORTS]: item => isNot(item['opr-reports'], no_notSpecified_blank),
  [FN.OPR_RESPONSES]: item => isNot(item['opr-responses'], no_notSpecified_blank),
  [FN.OPR_LETTERS]: item => isNot(item['opr-letters'], no_notSpecified_blank),
  [FN.OPR_VERSIONS]: item => isNot(item['opr-versions'], no_notSpecified_blank),
  [FN.OPR_IDENTITIES_PUBLISHED]: item => isNot(item['opr-identities-published'], no_notSpecified_blank),
  [FN.OPR_IDENTITIES_AUTHOR]: item => isNot(item['opr-indenties-author'], no_notSpecified_blank),
  [FN.OPR_COMMENTS]: item => isNot(item['opr-comments'], no_notSpecified_blank),
  [FN.OPR_INTERACTION]: item => isNot(item['opr-interaction'], no_notSpecified_blank),
  [FN.COREVIEW_POLICY]: item => item['coreview-policy'] !== "",
  [FN.COREVIEW_EMAIL]: item => item['coreview-email'] === "Yes",
  [FN.COREVIEW_FORM]: item => item['coreview-form'] === "Yes",
  [FN.COREVIEW_DATABASE]: item => isNot(item['coreview-database'], no_blank),
  [FN.PREPRINT_POLICY]: item => item['preprint-policy'] !== "",
  [FN.PREPRINT_VERSION]: item => isNot(item['preprint-version'], no_blank),
  [FN.PREPRINT_CITATION]: item => isNot(item['preprint-citation'], no_blank),
  [FN.PREPRINT_MEDIA]: item => item['preprint-media'] !== "",
  [FN.PREPRINT_LICENSING]: item => item['preprint-licensing'] !== "",
  [FN.PREPRINT_SCOOP]: item => item['preprint-scoop'] !== "",
  [FN.PREPRINT_REVIEW]: item => item['preprint-review'] !== ""
};
