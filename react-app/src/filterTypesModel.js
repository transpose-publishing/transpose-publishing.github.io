import {FILTERNAMES as FN} from "./constants";


export default [
  {
    typeName: 'peerReview',
    contentGetter: content => content.filter_type_pr,
    filters: [
      {name: FN.PR_POLICY, contentGetter: content => content.pr_policy},
      {name: FN.PR_DATABASE, contentGetter: content => content.pr_database},
      {name: FN.PR_TRANSFER_POLICY, contentGetter: content => content.pr_transfer_policy}
    ]
  },
  {
    typeName: 'openPeerReview',
    contentGetter: content => content.filter_type_opr,
    filters: [
      {name: FN.OPR_REPORTS, contentGetter: content => content.opr_reports},
      {name: FN.OPR_RESPONSES, contentGetter: content => content.opr_responses},
      {name: FN.OPR_LETTERS, contentGetter: content => content.opr_letters},
      {name: FN.OPR_VERSIONS, contentGetter: content => content.opr_versions},
      {name: FN.OPR_IDENTITIES_PUBLISHED, contentGetter: content => content.opr_identities_published},
      {name: FN.OPR_IDENTITIES_AUTHOR, contentGetter: content => content.opr_identities_author},
      {name: FN.OPR_COMMENTS, contentGetter: content => content.opr_comments},
      {name: FN.OPR_INTERACTION, contentGetter: content => content.opr_interaction}
    ]
  },
  {
    typeName: 'coreview',
    contentGetter: content => content.filter_type_coreview,
    filters: [
      {name: FN.COREVIEW_POLICY, contentGetter: content => content.coreview_policy},
      {name: FN.COREVIEW_EMAIL, contentGetter: content => content.coreview_email},
      {name: FN.COREVIEW_FORM, contentGetter: content => content.coreview_form},
      {name: FN.COREVIEW_DATABASE, contentGetter: content => content.coreview_database}
    ]
  },
  {
    typeName: 'preprint',
    contentGetter: content => content.filter_type_preprint,
    filters: [
      {name: FN.PREPRINT_POLICY, contentGetter: content => content.preprint_policy},
      {name: FN.PREPRINT_VERSION, contentGetter: content => content.preprint_version},
      {name: FN.PREPRINT_CITATION, contentGetter: content => content.preprint_citation},
      {name: FN.PREPRINT_MEDIA, contentGetter: content => content.preprint_media},
      {name: FN.PREPRINT_LICENSING, contentGetter: content => content.preprint_licensing},
      {name: FN.PREPRINT_SCOOP, contentGetter: content => content.preprint_scoop},
      {name: FN.PREPRINT_REVIEW, contentGetter: content => content.preprint_review}
    ]
  }
];
