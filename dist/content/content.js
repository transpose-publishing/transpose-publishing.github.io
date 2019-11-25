
/* NOTES ON USE
---------------------
This is the main dictionary of site content. It is not actively rendered, but rather a pool of keys and values that
the site code can choose from. Adding new content here will do nothing without an associated change in the code to read
the new key created. The site content gets its values by referencing the keys here, so changing a key in this dictionary will break
that reference. The only things that can be updated in this file that will be reflected in the site automatically are the values.

Most key value pairs are self explanatory. Ideally the keys are named and organized in a manner where it is clear what
part of the site is referencing that key.

3 unique dictionary structures are links, in_line_links and pages:

LINKS: offer two property values to change, the text of the link and the link url.

IN_LINE_LINKS: For cases when you want a line of text to include a link, the text is specified by the text property and
an in_line_link object specifies which section of text should be rendered as the link and the link url. The in_line_link text
should match exactly the section of the original text that will be rendered as a link.
Example:
{
  text: 'The full text, including some text that will be rendered as the link',
  in_line_link: {
    text: 'the link',
    link: 'www.someUrl.com'
  }
}

PAGES: offer the title of the page (which determines their name in the header and footer components) and the relative path.
Changing the path will just change what the user sees in the URL when navigating to that page. This was done just in case
the page title is changed and the site wants the URL to reflect that change as well.

Any changes to this or any of the content files have to respect Javascript object notation.
*/


window._content = {
  dictionary: {
    //Pages
    home_page: {
      title: 'Home',
      path: '/'
    },
    more_info_page: {
      title: 'More Information',
      path: '/more-information'
    },
    user_stories_page: {
      title: 'User Stories',
      path: '/user-stories'
    },
    about_page: {
      title: 'About',
      path: '/about'
    },
    stats_page: {
      title: 'Stats',
      path: '/stats'
    },

    //Footer
    footer_database_link: {
      text: 'Database',
      link: 'https://docs.google.com/spreadsheets/d/10cgryddPROS2szJrC2xzTsqEu1nCgSTNZZBkLizZfTc/export?format=csv&id=10cgryddPROS2szJrC2xzTsqEu1nCgSTNZZBkLizZfTc&gid=0'
    },
    copyright_statement: "All original work in this repository is dedicated to the public domain under the CC0 waiver. This work was funded by a grant to ASAPbio from the Leona M. and Harry B. Helmsley Charitable Trust.",

    //Banner
    banner_description: "A database of journal policies <br/>on peer review, co-reviewing, and preprinting",
    home_page_banner_description: "A database of journal policies <br/>on peer review, co-reviewing, and preprinting",
    download_link: {
      text: "Download database",
      link: 'https://docs.google.com/spreadsheets/d/10cgryddPROS2szJrC2xzTsqEu1nCgSTNZZBkLizZfTc/export?format=csv&id=10cgryddPROS2szJrC2xzTsqEu1nCgSTNZZBkLizZfTc&gid=0'
    },
    new_record_link: {
      text: "Update or add records",
      link: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSU4cmOwS2NdM16S0h8F6A3FSPs1fp2Eng9HPXeosfLsL_lsXRtEC8odQW5GJTfz7fmVbl2f2YJ2_Sd/pubhtml?gid=1688324546&single=true'
    },
    search_placeholder: "Search journal title, ISSN, DOI, Publisher",
    search_header: "Transpose database",

    //Filters and labels
    filter_type_pr: "Peer review",
    filter_type_opr: "Open peer review",
    filter_type_coreview: "Co-review",
    filter_type_preprint: "Preprint",
    filter_verified: "Verified",
    filter_oa: "OA",
    pr_policy: "Peer review policy",
    pr_database: "Peer review activity deposited into database",
    pr_transfer_policy: "Peer review transfer policy",
    opr_reports: "Peer review reports",
    opr_responses: "Peer review author responses",
    opr_letters: "Peer review editorial decision letter",
    opr_versions: "Peer review manuscript",
    opr_identities_published: "Reviewer identities published",
    opr_identities_author: "Reviewer identities to author",
    opr_comments: "Public commenting",
    opr_interaction: "Open reviewer interaction",
    coreview_policy: "Co-reviewer policy",
    coreview_email: "Co-reviewer in email invite",
    coreview_form: "Co-reviewer in review form",
    coreview_database: "Co-reviewer deposited in database",
    preprint_policy: "Preprint policy",
    preprint_version: "Publication links to preprint version",
    preprint_citation: "Preprints allowed in citation list",
    preprint_media: "Media coverage",
    preprint_licensing: "Preprint licensing policy",
    preprint_scoop: "Scoop protection",
    preprint_review: "Community review",
    allowed_preprint_version: "Allowed preprint version",
    allowed_preprint_version_no_policy: "No preprint policy",
    allowed_preprint_version_none: "None (preprints not allowed)",
    allowed_preprint_version_first: "First submission only",
    allowed_preprint_version_after: "After peer review",
    allowed_preprint_version_any: "Any manuscript version",
    allowed_preprint_version_unsure: "Unsure",
    allowed_preprint_version_other: "Other",

    //Results section and title details
    date: "Date",
    issn: "ISSN ",
    doi: "DOI",
    title: "Journal",
    publisher: "Publisher",
    verified: "Verified",
    oa: "OA",
    report_error_link: {
      text: 'Report error',
      link: 'mailto:transpose-publishing@googlegroups.com'
    },
    compare_checkbox_label: "Compare up to 3 journals",
    details_label_pr: "Peer review",
    details_label_opr: "Open peer review",
    details_label_coreview: "Co-review",
    details_label_preprint: "Preprints",
    pr_type_details: "Type of peer review",
    pr_policy_details: "Peer review policy",
    pr_form_url_details: "Peer review form",
    pr_credit_url_details: "Peer review credit policy",
    pr_database_details: "Publons/ORCID credit",
    pr_transfer_policy_details: "Peer review transfer policy",
    opr_reports_details: "Peer review reports published",
    opr_responses_details: "Author responses to reviews published",
    opr_letters_details: "Editorial decision letters published",
    opr_versions_details: "Previous versions of the manuscript published",
    opr_identities_published_details: "Reviewer identities published",
    opr_indenties_author_details: "Reviewer identities revealed to author",
    opr_comments_details: "Public commenting",
    opr_interaction_details: "Reviewers consult with each other",
    opr_reports_details_false: "Peer review reports not published",
    opr_responses_details_false: 'Author responses to reviews not published',
    opr_letters_details_false: 'Editorial decision letters not published',
    opr_versions_details_false: 'Previous versions of the manuscript not published',
    opr_identities_published_details_false: 'Reviewer identities not published',
    opr_indenties_author_details_false: 'Reviewer identities not revealed to author',
    opr_comments_details_false: 'No public commenting',
    opr_interaction_details_false: 'Reviewers do not consult with each other',
    opr_additional_details: "Additional information",
    coreview_policy_details: "Co-reviewer policy",
    coreview_email_details: "Reviewer invitation explicitly allows co-reviewers",
    coreview_form_details: "Peer review form explicitly accepts co-reviewer names",
    coreview_database_details: "ORCID/Publon credit for co-reviewers",
    preprint_policy_details: "Preprint policy",
    preprint_version_details: "Version of paper allowed in preprint server",
    preprint_servers_details: "Acceptable preprint servers",
    preprint_citation_details: "Can cite preprints in journal article",
    preprint_link_details: "Article links to preprint",
    preprint_media_details: "Preprint media coverage policy",
    preprint_licensing_details: "Preprint licensing policy",
    preprint_scoop_details: "Scoop protection policy",
    preprint_review_details: "Preprint community review policy",
    preprint_label_author_guidelines: "Preprint author guidelines",
    preprint_label_link_citations: "Links & citations",
    preprint_label_media: "Media coverage & review",
    preprint_label_discovery: "Priority of discovery",
    no_data: "", //What to show when no data


    //User Stories Page
    why_header: 'Why use Transpose data?',
    table_description: 'Data on open peer review (OPR), co-review, and detailed preprinting policies could be useful to many different stakeholder groups. Here are a few different examples:',
    //groups
    researcher: 'Researcher',
    funder: 'Funder',
    all: 'All',
    institution: 'Institution',
    journalist: 'Journalist',
    tech_provider: 'Technology & service provider',
    //types
    opr: 'OPR',
    opr: 'OPR',
    co_review: 'Co-review',
    preprints: 'Preprints',


    //More info page
    glossary_header: 'Glossary',
    glossary_description: {
      text: 'Please see below for definitions of terms used to present information in journal records. If anything is unclear, feel free to get in touch at transpose-publishing@googlegroups.com',
      in_line_link: {
        text: 'transpose-publishing@googlegroups.com',
        link: 'mailto:transpose-publishing@googlegroups.com'
      }
    },
    editorial_policies_header: 'Editorial policies',
    faq_header: 'FAQ',


    //Footer
    twitter_link: 'https://twitter.com/TRANSPOSEsci',
  }
};
