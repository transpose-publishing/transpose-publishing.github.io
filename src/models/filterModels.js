import {FILTER_NAMES as FLTR} from "../constants";
import {isNot} from "../utils";
import {getContent} from '../utils';

const {content} = getContent();

const no_blank = ["No", ""];
const no_notSpecified_blank = ["No", "Not specified", ""];

export const filterMap = {
  [FLTR.VERIFIED]: {
    name: FLTR.VERIFIED,
    title: content.filter_verified,
    rule: item => item.verified === "Yes",
  },
  [FLTR.OA]: {
    name: FLTR.OA,
    title: content.filter_oa,
    rule: item => item.oa === "Yes" || item.oa === "OA",
  },
  [FLTR.PR_POLICY]: {
    name: FLTR.PR_POLICY,
    title: content.pr_policy,
    rule: item => item['pr-policy'] !== "",
  },
  [FLTR.PR_DATABASE]: {
    name: FLTR.PR_DATABASE,
    title: content.pr_database,
    rule: item => isNot(item['pr-database'], no_blank),
  },
  [FLTR.PR_TRANSFER_POLICY]: {
    name: FLTR.PR_TRANSFER_POLICY,
    title: content.pr_transfer_policy,
    rule: item => isNot(item['pr-transfer-policy'], no_blank),
  },
  [FLTR.OPR_REPORTS]: {
    name: FLTR.OPR_REPORTS,
    title: content.opr_reports,
    rule: item => isNot(item['opr-reports'], no_notSpecified_blank),
  },
  [FLTR.OPR_RESPONSES]: {
    name: FLTR.OPR_RESPONSES,
    title: content.opr_responses,
    rule: item => isNot(item['opr-responses'], no_notSpecified_blank),
  },
  [FLTR.OPR_LETTERS]: {
    name: FLTR.OPR_LETTERS,
    title: content.opr_letters,
    rule: item => isNot(item['opr-letters'], no_notSpecified_blank),
  },
  [FLTR.OPR_VERSIONS]: {
    name: FLTR.OPR_VERSIONS,
    title: content.opr_versions,
    rule: item => isNot(item['opr-versions'], no_notSpecified_blank),
  },
  [FLTR.OPR_IDENTITIES_PUBLISHED]: {
    name: FLTR.OPR_IDENTITIES_PUBLISHED,
    title: content.opr_identities_published,
    rule: item => isNot(item['opr-identities-published'], no_notSpecified_blank),
  },
  [FLTR.OPR_IDENTITIES_AUTHOR]: {
    name: FLTR.OPR_IDENTITIES_AUTHOR,
    title: content.opr_identities_author,
    rule: item => isNot(item['opr-indenties-author'], no_notSpecified_blank),
  },
  [FLTR.OPR_COMMENTS]: {
    name: FLTR.OPR_COMMENTS,
    title: content.opr_comments,
    rule: item => isNot(item['opr-comments'], no_notSpecified_blank),
  },
  [FLTR.OPR_INTERACTION]: {
    name: FLTR.OPR_INTERACTION,
    title: content.opr_interaction,
    rule: item => isNot(item['opr-interaction'], no_notSpecified_blank),
  },
  [FLTR.COREVIEW_POLICY]: {
    name: FLTR.COREVIEW_POLICY,
    title: content.coreview_policy,
    rule: item => item['coreview-policy'] !== "",
  },
  [FLTR.COREVIEW_EMAIL]: {
    name: FLTR.COREVIEW_EMAIL,
    title: content.coreview_email,
    rule: item => item['coreview-email'] === "Yes",
  },
  [FLTR.COREVIEW_FORM]: {
    name: FLTR.COREVIEW_FORM,
    title: content.coreview_form,
    rule: item => item['coreview-form'] === "Yes",
  },
  [FLTR.COREVIEW_DATABASE]: {
    name: FLTR.COREVIEW_DATABASE,
    title: content.coreview_database,
    rule: item => isNot(item['coreview-database'], no_blank),
  },
  [FLTR.PREPRINT_POLICY]: {
    name: FLTR.PREPRINT_POLICY,
    title: content.preprint_policy,
    rule: item => item['preprint-policy'] !== "",
  },
  [FLTR.PREPRINT_VERSION_LINK]: {
    name: FLTR.PREPRINT_VERSION_LINK,
    title: content.preprint_version_link,
    rule: item => isNot(item['preprint-url'], no_blank),
  },
  [FLTR.PREPRINT_CITATION]: {
    name: FLTR.PREPRINT_CITATION,
    title: content.preprint_citation,
    rule: item => isNot(item['preprint-citation'], no_blank),
  },
  [FLTR.PREPRINT_MEDIA]: {
    name: FLTR.PREPRINT_MEDIA,
    title: content.preprint_media,
    rule: item => item['preprint-media'] !== "",
  },
  [FLTR.PREPRINT_LICENSING]: {
    name: FLTR.PREPRINT_LICENSING,
    title: content.preprint_licensing,
    rule: item => item['preprint-licensing'] !== "",
  },
  [FLTR.PREPRINT_SCOOP]: {
    name: FLTR.PREPRINT_SCOOP,
    title: content.preprint_scoop,
    rule: item => item['preprint-scoop'] !== "",
  },
  [FLTR.PREPRINT_REVIEW]: {
    name: FLTR.PREPRINT_REVIEW,
    title: content.preprint_review,
    rule: item => item['preprint-review'] !== "",
  },
  [FLTR.ALLOWED_PREPRINT_NO_POLICY]: {
    name: FLTR.ALLOWED_PREPRINT_NO_POLICY,
    title: content.allowed_preprint_version_no_policy,
    rule: item => item['preprint-version'] === 'No preprint policy',
  },
  [FLTR.ALLOWED_PREPRINT_NONE]: {
    name: FLTR.ALLOWED_PREPRINT_NONE,
    title: content.allowed_preprint_version_none,
    rule: item => item['preprint-version'] === 'None (preprints not allowed)',
  },
  [FLTR.ALLOWED_PREPRINT_FIRST]: {
    name: FLTR.ALLOWED_PREPRINT_FIRST,
    title: content.allowed_preprint_version_first,
    rule: item => item['preprint-version'] === 'First submission only (before peer review)',
  },
  [FLTR.ALLOWED_PREPRINT_AFTER]: {
    name: FLTR.ALLOWED_PREPRINT_AFTER,
    title: content.allowed_preprint_version_after,
    rule: item => item['preprint-version'] === 'After peer review (but not final, copyedited version)',
  },
  [FLTR.ALLOWED_PREPRINT_ANY]: {
    name: FLTR.ALLOWED_PREPRINT_ANY,
    title: content.allowed_preprint_version_any,
    rule: item => item['preprint-version'] === "Any manuscript version (preprint or postprint, but not necessarily the publisher's version)",
  },
  [FLTR.ALLOWED_PREPRINT_UNSURE]: {
    name: FLTR.ALLOWED_PREPRINT_UNSURE,
    title: content.allowed_preprint_version_unsure,
    rule: item => item['preprint-version'] === "Unsure (preprints are allowed, but it's not clear what version)",
  },
  [FLTR.ALLOWED_PREPRINT_OTHER]: {
    name: FLTR.ALLOWED_PREPRINT_OTHER,
    title: content.allowed_preprint_version_other,
    rule: item => item['preprint-version'] === 'Other',
  },
};

export const filterList = Object.values(filterMap);

export const filterTypesList = [
  {
    typeName: 'peerReview',
    title: content.filter_type_pr,
    filters: [
      filterMap[FLTR.PR_POLICY],
      filterMap[FLTR.PR_DATABASE],
      filterMap[FLTR.PR_TRANSFER_POLICY]
    ]
  },
  {
    typeName: 'openPeerReview',
    title: content.filter_type_opr,
    filters: [
      filterMap[FLTR.OPR_REPORTS],
      filterMap[FLTR.OPR_RESPONSES],
      filterMap[FLTR.OPR_LETTERS],
      filterMap[FLTR.OPR_VERSIONS],
      filterMap[FLTR.OPR_IDENTITIES_PUBLISHED],
      filterMap[FLTR.OPR_IDENTITIES_AUTHOR],
      filterMap[FLTR.OPR_COMMENTS],
      filterMap[FLTR.OPR_INTERACTION],
    ]
  },
  {
    typeName: 'coreview',
    title: content.filter_type_coreview,
    filters: [
      filterMap[FLTR.COREVIEW_POLICY],
      filterMap[FLTR.COREVIEW_EMAIL],
      filterMap[FLTR.COREVIEW_FORM],
      filterMap[FLTR.COREVIEW_DATABASE],
    ]
  },
  {
    typeName: 'preprint',
    title: content.filter_type_preprint,
    filters: [
      filterMap[FLTR.PREPRINT_POLICY],
      filterMap[FLTR.PREPRINT_VERSION_LINK],
      filterMap[FLTR.PREPRINT_CITATION],
      filterMap[FLTR.PREPRINT_MEDIA],
      filterMap[FLTR.PREPRINT_LICENSING],
      filterMap[FLTR.PREPRINT_SCOOP],
      filterMap[FLTR.PREPRINT_REVIEW],
      {
        typeName: 'allowedPreprintVersion',
        title: content.allowed_preprint_version,
        filters: [
          filterMap[FLTR.ALLOWED_PREPRINT_NO_POLICY],
          filterMap[FLTR.ALLOWED_PREPRINT_NONE],
          filterMap[FLTR.ALLOWED_PREPRINT_FIRST],
          filterMap[FLTR.ALLOWED_PREPRINT_AFTER],
          filterMap[FLTR.ALLOWED_PREPRINT_ANY],
          filterMap[FLTR.ALLOWED_PREPRINT_UNSURE],
          filterMap[FLTR.ALLOWED_PREPRINT_OTHER],
        ]
      },
    ]
  }
];