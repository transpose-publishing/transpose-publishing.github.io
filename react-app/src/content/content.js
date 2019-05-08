import {editRecordUrl} from '../googleApi';

const content = {
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

  //Banner
  banner_description: "TRANsparency in Scholarly Publishing for <br/> <b>Open Scholarship Evolution</b>",
  home_page_banner_description: "TRANsparency in Scholarly Publishing for <br/> Open Scholarship Evolution",
  download_button: "Download database",
  new_record_button: "New record",
  search_placeholder: "Search journal title, ISSN, DOI, Publisher",
  search_header: "TRANSPOSE database",

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

  //Results and details
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
  opr_identities_author_details: "Reviewer identities revealed to author",
  opr_comments_details: "Public commenting",
  opr_interaction_details: "Reviewers consult with each other",
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
  no_data: "",
  preprint_label_author_guidelines: "Preprint author guidelines",
  preprint_label_link_citations: "Links & citations",
  preprint_label_media: "Media coverage & review",
  preprint_label_discovery: "Priority of discovery",


  //User Stories Page
  why_header: 'Why use TRANSPOSE data?',
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
  co_review: 'Co-review',
  preprints: 'Preprints',
  //stories
  author_story_1: 'As an author, I want to quickly check the list of preprint servers approved across journals so that I do not waste time submitting to a journal where my preprint posting would go against a journal’s restrictive prior publication policy.',
  author_story_2: 'As an author, I want to pick journals that publish peer review so that I can receive more constructive feedback on the research.',
  author_story_3: 'As an author, I want a list of journals that do “open interaction” collaborative peer review so that the requested revisions are more clear.',
  researcher_story_1: 'As an early career researcher, I want to know which journals will give me credit for peer review so that I can demonstrate that I’m an expert in my field for my green card application',
  researcher_story_2: 'As a meta-researcher, I want to pull journal peer review policies so that I can study the history, trends, and effectiveness of different peer review implementations over time.',
  researcher_story_3: 'As a graduate student wanting to learn to peer review, I want a list of journals that publish peer review so I can read good and bad examples.',
  researcher_story_4: 'As an early career researcher concerned about bias, I want to choose a journal that publishes peer reviews so that this risk would be minimized through transparency.',
  pi_story_1: 'As a PI, I want to quickly and anonymously check policies on co-reviewing so that I can involve my student in peer review and make sure I’m compliant and giving students credit.',
  pi_story_2: 'As a PI, I want to know which journals will give me credit for doing peer review so that I can build a stronger tenure and promotion package.',
  funder_story_1: 'As a funder who wants to promote open science, I need a list of journals that comply with my policies on open peer review so that I can recommend them to grantees.',
  funder_story_2: 'As funder, I want to know the journals that publish reviewer names and their reviews so that my grantees can get credit for peer review.',
  funder_story_3: 'As a funder, I want to read the peer review of the papers I fund so that I can ensure the results are not shared in a journal that has predatory publishing practices.',
  advocate_story_1: 'As an advocate, I want to know journal policies across fields so that I can monitor the adoption of certain policies over time.',
  publisher_story_1: 'As a journal editor or publishing staff, I want to review and evaluate my journal’s peer review policies against others so that I can best serve my research community.',
  publisher_story_2: 'As a preprint server, I want to be know preprint policies across journals so that I can be a reliable resource to recommend to researchers what journals to submit.',
  publisher_story_3: 'As a preprint server administrator, I want to know preprint policies across journals so that I can be a reliable resource to researchers asking which journal they can submit to.',
  institution_story_1: 'As the director of a graduate program, I want a list of journals open to co-reviewing so that I can facilitate peer review training.',
  institution_story_2: 'As an institutional administrator trying to promote open science, I want to know the journals which allow preprints so that I can include them in a list for my researchers.',
  institution_story_3: 'As a librarian, I want an easy way to look up journal policies across publishers and fields so that I can better advise researchers.',
  journalist_story_1: 'As a journalist, I want authors to know the policy of journals they’ve submitted to regarding media coverage of preprints so that I can write about preprints without causing a paper to be rejected.',
  tech_provider_story_1: 'As the developer of a reference manager, I want to know which journals allow citations to preprints so that I can code citation styles appropriately, or notify users when they try to add a disallowed citation.',
  tech_provider_story_2: 'As the representative of a manuscript tracking system, I want to learn journal peer review policies so that I can better serve the peer review needs of my clients.',

  //About Page
  primary_description: 'TRANSPOSE is a grassroots initiative to build a crowdsourced database of journal policies. We’re focusing on three areas: open peer review, co-reviewing, and detailed preprinting policies. We welcome contributions from anyone, but seek verification from journals and publishers. Our goal is to foster new practices while increasing awareness among authors, editors, and other stakeholders, and we seek to provide resources to assist journals in setting, sharing, and clarifying their policies.',
  more_info_header: 'More about Transpose',
  application_link: {
    text: 'Read our application for the Scholarly Communications Institute.',
    link: 'https://docs.google.com/document/d/1vcsf2pzQelBVUF6GaSU4FQ8JhDVvq4wrpc4ulZPA7hE/edit#heading=h.v9lrq4a95j57'
  },
  preview_info_link: {
    text: 'Preview all the information collected (pdf).',
    link: 'https://transpose-publishing.github.io/images/TRANSPOSE%20policy%20editor%20-%20Google%20Forms%202018%2010%2011.pdf'
  },
  use_cases_link_text: 'Read potential use cases to learn how these data could be useful to different stakeholder groups.',
  get_involved_header: 'Get involved',
  edit_link: {
    text:'📝Edit and add new records to the TRANSPOSE policy database',
    link: editRecordUrl
  },
  follow_link: {
    text: '💬 Follow us on Twitter',
    link: 'https://twitter.com/TRANSPOSEsci'
  },
  contributors_header: 'Contributors'
};

export default content;
