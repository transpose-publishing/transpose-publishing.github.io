
/*
This UserStoryTable array renders directly. Adding or removing objects in the array will be reflected in the User Stories page.
Any item in the list can reference values from the dictionary with the format _dictionary.key_name or can be plain text.
*/

const _dictionary = window._content.dictionary;

window._content.userStoryTable = [
  {
    group: _dictionary.researcher,
    type: _dictionary.opr,
    use_case: 'As an early career researcher, I want to know which journals will give me credit for peer review so that I can demonstrate that I’m an expert in my field for my green card application'
  },
  {
    group: _dictionary.funder,
    type: _dictionary.opr,
    use_case: 'As a funder who wants to promote open science, I need a list of journals that comply with my policies on open peer review so that I can recommend them to grantees.'
  },
  {
    group: _dictionary.all,
    type: _dictionary.all,
    use_case: 'As an advocate, I want to know journal policies across fields so that I can monitor the adoption of certain policies over time.'
  },
  {
    group: _dictionary.researcher,
    type: _dictionary.opr,
    use_case: 'As a PI, I want to quickly and anonymously check policies on co-reviewing so that I can involve my student in peer review and make sure I’m compliant and giving students credit.'
  },
  {
    group: _dictionary.publisher,
    type: _dictionary.opr,
    use_case: 'As a journal editor or publishing staff, I want to review and evaluate my journal’s peer review policies against others so that I can best serve my research community.'
  },
  {
    group: _dictionary.researcher,
    type: _dictionary.opr,
    use_case: 'As a meta-researcher, I want to pull journal peer review policies so that I can study the history, trends, and effectiveness of different peer review implementations over time.'
  },
  {
    group: _dictionary.funder,
    type: _dictionary.opr,
    use_case: 'As funder, I want to know the journals that publish reviewer names and their reviews so that my grantees can get credit for peer review.'
  },
  {
    group: _dictionary.institution,
    type: _dictionary.co_review,
    use_case: 'As the director of a graduate program, I want a list of journals open to co-reviewing so that I can facilitate peer review training.'
  },
  {
    group: _dictionary.researcher,
    type: _dictionary.opr,
    use_case: 'As a graduate student wanting to learn to peer review, I want a list of journals that publish peer review so I can read good and bad examples.'
  },
  {
    group: _dictionary.researcher,
    type: _dictionary.opr,
    use_case: 'As a PI, I want to know which journals will give me credit for doing peer review so that I can build a stronger tenure and promotion package.'
  },
  {
    group: _dictionary.researcher,
    type: _dictionary.opr,
    use_case: 'As an author, I want to pick journals that publish peer review so that I can receive more constructive feedback on the research.'
  },
  {
    group: _dictionary.researcher,
    type: _dictionary.opr,
    use_case: 'As an author, I want a list of journals that do “open interaction” collaborative peer review so that the requested revisions are more clear.'
  },
  {
    group: _dictionary.researcher,
    type: _dictionary.opr,
    use_case: 'As an early career researcher concerned about bias, I want to choose a journal that publishes peer reviews so that this risk would be minimized through transparency.'
  },
  {
    group: _dictionary.funder,
    type: _dictionary.opr,
    use_case: 'As a funder, I want to read the peer review of the papers I fund so that I can ensure the results are not shared in a journal that has predatory publishing practices.'
  },
  {
    group: _dictionary.journalist,
    type: _dictionary.preprints,
    use_case: 'As a journalist, I want authors to know the policy of journals they’ve submitted to regarding media coverage of preprints so that I can write about preprints without causing a paper to be rejected.'
  },
  {
    group: _dictionary.researcher,
    type: _dictionary.preprints,
    use_case: 'As an author, I want to quickly check the list of preprint servers approved across journals so that I do not waste time submitting to a journal where my preprint posting would go against a journal’s restrictive prior publication policy.'
  },
  {
    group: _dictionary.publisher,
    type: _dictionary.preprints,
    use_case: 'As a preprint server, I want to be know preprint policies across journals so that I can be a reliable resource to recommend to researchers what journals to submit.'
  },
  {
    group: _dictionary.institution,
    type: _dictionary.preprints,
    use_case: 'As an institutional administrator trying to promote open science, I want to know the journals which allow preprints so that I can include them in a list for my researchers.'
  },
  {
    group: _dictionary.institution,
    type: _dictionary.all,
    use_case: 'As a librarian, I want an easy way to look up journal policies across publishers and fields so that I can better advise researchers.'
  },
  {
    group: _dictionary.tech_provider,
    type: _dictionary.preprints,
    use_case: 'As the developer of a reference manager, I want to know which journals allow citations to preprints so that I can code citation styles appropriately, or notify users when they try to add a disallowed citation.'
  },
  {
    group: _dictionary.tech_provider,
    type: _dictionary.opr,
    use_case: 'As the representative of a manuscript tracking system, I want to learn journal peer review policies so that I can better serve the peer review needs of my clients.'
  }
];
