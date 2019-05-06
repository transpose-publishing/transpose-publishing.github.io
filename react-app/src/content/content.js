import {editRecordUrl} from '../googleApi';

const content = {
  //banner
  banner_description: "TRANsparency in Scholarly Publishing for <br/> <b>Open Scholarship Evolution</b>",

  //user-stories page
  who_header: 'Who needs a database of detailed preprints policies?',
  why_header: 'Why use TRANSPOSE data?',
  table_description: 'Data on open peer review (OPR), co-review, and detailed preprinting policies could be useful to many different stakeholder groups. Here are a few different examples:',
  //groups
  researcher: 'Researcher',
  funder: 'Funder',
  all: 'All',
  publisher: 'Publisher',
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

  //about page
  primary_description: 'TRANSPOSE is a grassroots initiative to build a crowdsourced database of journal policies. We’re focusing on three areas: open peer review, co-reviewing, and detailed preprinting policies. We welcome contributions from anyone, but seek verification from journals and publishers. Our goal is to foster new practices while increasing awareness among authors, editors, and other stakeholders, and we seek to provide resources to assist journals in setting, sharing, and clarifying their policies.',
  more_info_header: 'More about Transpose',
  application_link: {
    text: 'Read our application for the Scholarly Communications Institute.',
    link: ''
  },
  preview_info_link: {
    text: 'Preview all the information collected (pdf).',
    link: ''
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
