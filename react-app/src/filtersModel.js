import {FILTERNAMES as FN} from "./constants";


export const filterList = {
  [FN.PR_POLICY]: {name: FN.PR_POLICY, contentGetter: content => content.pr_policy},
  [FN.PR_DATABASE]: {name: FN.PR_DATABASE, contentGetter: content => content.pr_database},
  [FN.PR_TRANSFER_POLICY]: {name: FN.PR_TRANSFER_POLICY, contentGetter: content => content.pr_transfer_policy},
  [FN.OPR_REPORTS]: {name: FN.OPR_REPORTS, contentGetter: content => content.opr_reports},
  [FN.OPR_RESPONSES]: {name: FN.OPR_RESPONSES, contentGetter: content => content.opr_responses},
  [FN.OPR_LETTERS]: {name: FN.OPR_LETTERS, contentGetter: content => content.opr_letters},
  [FN.OPR_VERSIONS]: {name: FN.OPR_VERSIONS, contentGetter: content => content.opr_versions},
  [FN.OPR_IDENTITIES_PUBLISHED]: {name: FN.OPR_IDENTITIES_PUBLISHED, contentGetter: content => content.opr_identities_published},
  [FN.OPR_IDENTITIES_AUTHOR]: {name: FN.OPR_IDENTITIES_AUTHOR, contentGetter: content => content.opr_identities_author},
  [FN.OPR_COMMENTS]: {name: FN.OPR_COMMENTS, contentGetter: content => content.opr_comments},
  [FN.OPR_INTERACTION]: {name: FN.OPR_INTERACTION, contentGetter: content => content.opr_interaction},
  [FN.COREVIEW_POLICY]: {name: FN.COREVIEW_POLICY, contentGetter: content => content.coreview_policy},
  [FN.COREVIEW_EMAIL]: {name: FN.COREVIEW_EMAIL, contentGetter: content => content.coreview_email},
  [FN.COREVIEW_FORM]: {name: FN.COREVIEW_FORM, contentGetter: content => content.coreview_form},
  [FN.COREVIEW_DATABASE]: {name: FN.COREVIEW_DATABASE, contentGetter: content => content.coreview_database},
  [FN.PREPRINT_POLICY]: {name: FN.PREPRINT_POLICY, contentGetter: content => content.preprint_policy},
  [FN.PREPRINT_VERSION]: {name: FN.PREPRINT_VERSION, contentGetter: content => content.preprint_version},
  [FN.PREPRINT_CITATION]: {name: FN.PREPRINT_CITATION, contentGetter: content => content.preprint_citation},
  [FN.PREPRINT_MEDIA]: {name: FN.PREPRINT_MEDIA, contentGetter: content => content.preprint_media},
  [FN.PREPRINT_LICENSING]: {name: FN.PREPRINT_LICENSING, contentGetter: content => content.preprint_licensing},
  [FN.PREPRINT_SCOOP]: {name: FN.PREPRINT_SCOOP, contentGetter: content => content.preprint_scoop},
  [FN.PREPRINT_REVIEW]: {name: FN.PREPRINT_REVIEW, contentGetter: content => content.preprint_review}
};


export const filterTypesList = [
  {
    typeName: 'peerReview',
    contentGetter: content => content.filter_type_pr,
    filters: [
      filterList[FN.PR_POLICY],
      filterList[FN.PR_DATABASE],
      filterList[FN.PR_TRANSFER_POLICY]
    ]
  },
  {
    typeName: 'openPeerReview',
    contentGetter: content => content.filter_type_opr,
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
    contentGetter: content => content.filter_type_coreview,
    filters: [
      filterList[FN.COREVIEW_POLICY],
      filterList[FN.COREVIEW_EMAIL],
      filterList[FN.COREVIEW_FORM],
      filterList[FN.COREVIEW_DATABASE],
    ]
  },
  {
    typeName: 'preprint',
    contentGetter: content => content.filter_type_preprint,
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
