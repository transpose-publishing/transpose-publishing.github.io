import {FILTER_TYPES as FT} from "../constants";
import {isNot} from "../utils";
import content from '../content/content';


export const filterList = {
  [FT.OA]: {name: FT.OA, content: content.oa},
  [FT.PR_POLICY]: {name: FT.PR_POLICY, content: content.pr_policy},
  [FT.PR_DATABASE]: {name: FT.PR_DATABASE, content: content.pr_database},
  [FT.PR_TRANSFER_POLICY]: {name: FT.PR_TRANSFER_POLICY, content: content.pr_transfer_policy},
  [FT.OPR_REPORTS]: {name: FT.OPR_REPORTS, content: content.opr_reports},
  [FT.OPR_RESPONSES]: {name: FT.OPR_RESPONSES, content: content.opr_responses},
  [FT.OPR_LETTERS]: {name: FT.OPR_LETTERS, content: content.opr_letters},
  [FT.OPR_VERSIONS]: {name: FT.OPR_VERSIONS, content: content.opr_versions},
  [FT.OPR_IDENTITIES_PUBLISHED]: {name: FT.OPR_IDENTITIES_PUBLISHED, content: content.opr_identities_published},
  [FT.OPR_IDENTITIES_AUTHOR]: {name: FT.OPR_IDENTITIES_AUTHOR, content: content.opr_identities_author},
  [FT.OPR_COMMENTS]: {name: FT.OPR_COMMENTS, content: content.opr_comments},
  [FT.OPR_INTERACTION]: {name: FT.OPR_INTERACTION, content: content.opr_interaction},
  [FT.COREVIEW_POLICY]: {name: FT.COREVIEW_POLICY, content: content.coreview_policy},
  [FT.COREVIEW_EMAIL]: {name: FT.COREVIEW_EMAIL, content: content.coreview_email},
  [FT.COREVIEW_FORM]: {name: FT.COREVIEW_FORM, content: content.coreview_form},
  [FT.COREVIEW_DATABASE]: {name: FT.COREVIEW_DATABASE, content: content.coreview_database},
  [FT.PREPRINT_POLICY]: {name: FT.PREPRINT_POLICY, content: content.preprint_policy},
  [FT.PREPRINT_VERSION]: {name: FT.PREPRINT_VERSION, content: content.preprint_version},
  [FT.PREPRINT_CITATION]: {name: FT.PREPRINT_CITATION, content: content.preprint_citation},
  [FT.PREPRINT_MEDIA]: {name: FT.PREPRINT_MEDIA, content: content.preprint_media},
  [FT.PREPRINT_LICENSING]: {name: FT.PREPRINT_LICENSING, content: content.preprint_licensing},
  [FT.PREPRINT_SCOOP]: {name: FT.PREPRINT_SCOOP, content: content.preprint_scoop},
  [FT.PREPRINT_REVIEW]: {name: FT.PREPRINT_REVIEW, content: content.preprint_review}
};


export const filterTypesList = [
  {
    typeName: 'peerReview',
    content: content.filter_type_pr,
    filters: [
      filterList[FT.PR_POLICY],
      filterList[FT.PR_DATABASE],
      filterList[FT.PR_TRANSFER_POLICY]
    ]
  },
  {
    typeName: 'openPeerReview',
    content: content.filter_type_opr,
    filters: [
      filterList[FT.OPR_REPORTS],
      filterList[FT.OPR_RESPONSES],
      filterList[FT.OPR_LETTERS],
      filterList[FT.OPR_VERSIONS],
      filterList[FT.OPR_IDENTITIES_PUBLISHED],
      filterList[FT.OPR_IDENTITIES_AUTHOR],
      filterList[FT.OPR_COMMENTS],
      filterList[FT.OPR_INTERACTION],
    ]
  },
  {
    typeName: 'coreview',
    content: content.filter_type_coreview,
    filters: [
      filterList[FT.COREVIEW_POLICY],
      filterList[FT.COREVIEW_EMAIL],
      filterList[FT.COREVIEW_FORM],
      filterList[FT.COREVIEW_DATABASE],
    ]
  },
  {
    typeName: 'preprint',
    content: content.filter_type_preprint,
    filters: [
      filterList[FT.PREPRINT_POLICY],
      filterList[FT.PREPRINT_VERSION],
      filterList[FT.PREPRINT_CITATION],
      filterList[FT.PREPRINT_MEDIA],
      filterList[FT.PREPRINT_LICENSING],
      filterList[FT.PREPRINT_SCOOP],
      filterList[FT.PREPRINT_REVIEW],
    ]
  }
];


const no_blank = ["No", ""];
const no_notSpecified_blank = ["No", "Not specified", ""];

export const filterRules = {
  [FT.VERIFIED]: item => item.verified === "Yes",
  [FT.OA]: item => item.oa === "Yes" || item.oa === "OA",
  [FT.PR_POLICY]: item => item['pr-policy'] !== "",
  [FT.PR_DATABASE]: item => isNot(item['pr-database'], no_blank),
  [FT.PR_TRANSFER_POLICY]: item => isNot(item['pr-transfer-policy'], no_blank),
  [FT.OPR_REPORTS]: item => isNot(item['opr-reports'], no_notSpecified_blank),
  [FT.OPR_RESPONSES]: item => isNot(item['opr-responses'], no_notSpecified_blank),
  [FT.OPR_LETTERS]: item => isNot(item['opr-letters'], no_notSpecified_blank),
  [FT.OPR_VERSIONS]: item => isNot(item['opr-versions'], no_notSpecified_blank),
  [FT.OPR_IDENTITIES_PUBLISHED]: item => isNot(item['opr-identities-published'], no_notSpecified_blank),
  [FT.OPR_IDENTITIES_AUTHOR]: item => isNot(item['opr-indenties-author'], no_notSpecified_blank),
  [FT.OPR_COMMENTS]: item => isNot(item['opr-comments'], no_notSpecified_blank),
  [FT.OPR_INTERACTION]: item => isNot(item['opr-interaction'], no_notSpecified_blank),
  [FT.COREVIEW_POLICY]: item => item['coreview-policy'] !== "",
  [FT.COREVIEW_EMAIL]: item => item['coreview-email'] === "Yes",
  [FT.COREVIEW_FORM]: item => item['coreview-form'] === "Yes",
  [FT.COREVIEW_DATABASE]: item => isNot(item['coreview-database'], no_blank),
  [FT.PREPRINT_POLICY]: item => item['preprint-policy'] !== "",
  [FT.PREPRINT_VERSION]: item => isNot(item['preprint-version'], no_blank),
  [FT.PREPRINT_CITATION]: item => isNot(item['preprint-citation'], no_blank),
  [FT.PREPRINT_MEDIA]: item => item['preprint-media'] !== "",
  [FT.PREPRINT_LICENSING]: item => item['preprint-licensing'] !== "",
  [FT.PREPRINT_SCOOP]: item => item['preprint-scoop'] !== "",
  [FT.PREPRINT_REVIEW]: item => item['preprint-review'] !== ""
};
