
/*
These are the anchor ids used by links in the src code, changing these values will control the url path, ie: /more-information/{anchor_id}
They are not directly rendered anywhere, new anchor_ids will be inert unless they are referenced in the src code.
*/
const anchor_ids = {
  peer_review: 'peer-review',
  open_peer_review: 'open-peer-review',
  co_review: 'co-review',
  preprints: 'preprints'
};
window._content.anchor_ids = anchor_ids;


/*
This GLOSSARY array is rendered directly. Adding / removing elements to the glossary, either cards in existing
sections like Peer Review or whole new sections, will render those in the glossary automatically if correctly formatted.
If a new section is added with a new anchor_id, please be aware that there would be no links across the site referencing
that anchor_id automatically, so while the section will get rendered, it will not have an active anchor_id.

Glossary descriptions can include in_line_links by being formatted as an object with text and in_line_link properties.
*/
window._content.glossary = [
  {
    title: 'Peer Review',
    anchor_id: anchor_ids.peer_review,
    cards: [
      {
        title: 'Single blind',
        description: 'During the peer review process, the reviewers’ identities remain anonymous to the authors, but the authors’ identities are revealed to the reviewers.'
      },
      {
        title: 'Double blind',
        description: 'During the peer review process, the author’s identities remain anonymous to reviewers, and vice versa.'
      },
      {
        title: 'Not blind',
        description: 'During the peer review process, reviewers and authors are aware of each others’ identities.'
      },
      {
        title: 'Peer review credit',
        description: 'Reviewers are credited/acknowledged for their peer review activities, for example through services such as Publons or ORCID.'
      },
      {
        title: 'Publons',
        description: 'Publons is a commercial service enabling scientists to record their peer review and editorial activities for academic journals.'
      },
      {
        title: 'ORCID',
        description: 'ORCID is a non-profit organisation that provides persistent and unique identifiers to help distinguish and track a scientist’s progress and achievements, including peer review activities.'
      },
      {
        title: 'Peer review transfer',
        description: 'A process offered to authors when their manuscript has been rejected by a journal, allowing the peer review reports to be transferred to and considered by another journal to aid their editorial decision.'
      },
    ]
  },

  {
    title: 'Open peer review',
    anchor_id: anchor_ids.open_peer_review,
    cards: [
      {
        title: 'Peer review report',
        description: 'The contents of peer reviewers’ comments. Public commenting during formal peer review.'
      },
      {
        title: 'Previous versions of the manuscript published',
        description: 'The journal makes available earlier versions of the manuscript (such as the initial and revised submissions)'
      },
      {
        title: 'Public commenting during formal peer review',
        description: 'Editors take into consideration comments from people other than invited reviewers.'
      },
      {
        title: 'Open interaction',
        description: 'Reviewers consult with one another (beyond simply seeing one anothers’ reviews when they are shared with the author).'
      },
    ]
  },

  {
    title: 'Co-review',
    anchor_id: anchor_ids.co_review,
    cards: [
      {
        title: 'Co-reviewer',
        description: 'A scientist - often a trainee - who reviews a scientific manuscript together with the primary reviewer.'
      },
    ]
  },

  {
    title: 'Preprints',
    anchor_id: anchor_ids.preprints,
    cards: [
      {
        title: 'Preprint',
        description: 'A preprint is a version of a research manuscript that has not yet been published by a journal. Preprints are normally submitted to preprint servers before they are peer-reviewed and published as a way to help speed up the dissemination of scientific discoveries and enable the community to provide feedback that might improve the manuscript before publication. '
      },
      {
        title: 'Article links to preprint',
        description: 'Some journals display on the published paper a hyperlink to the preprint version of the manuscript.'
      },
      {
        title: 'Preprint licensing policy',
        description: 'Some journals have policies about which licenses authors can release their preprints under.'
      },
      {
        title: 'Preprint media policy',
        description: 'Some journals have policies about how preprints can be discussed with the media or in blogs.'
      },
      {
        title: 'Scoop protection',
        description: 'Scoop protection was first introduced to protect authors of manuscripts that were “scooped” during the peer review process. With scoop protection, the pending editorial decision for any submitted manuscript would not be affected if a competing paper was published after the submitted manuscript’s submission date. Some journals have extended this protection from the date of preprint posting, sometimes conditional on submitting the preprinted work to the journal within a set period of time. '
      },
      {
        title: 'Preprint community review',
        description: 'Peer review of preprints by the scientific community. This can occur on dedicated reviewing sites or on the preprint server itself. Some journal editors consider these reviews to supplement the peer review process and further inform their editorial decisions.  '
      },
    ]
  }
];


/*
The EDITORIAL POLICIES array is rendered directly. The format of bullets is slightly different. Instead of rendering
a list of card objects like the glossary, each bullets array renders a list of text. Each item in the bullets array can be
plain text, text with sub-bullets, or text with an in_line_link.

Examples:
bullets: [
  'plain text',
  {
    text: 'text with sub-bullets',
    bullets: [
      'sub-bullet 1',
      'sub-bullet 2
    ]
  },
  {
    text: 'text with in_line_link',
    in_line_link: ...
  }
]

The Editorial Policies section can also render non-bulleted cards like the Glossary when formatted with properties title
and description. Descriptions can include in_line_links.
*/
window._content.editorial_policies = [
  {
    title: 'Data sources and licensing',
    bullets: [
      'All contributions to TRANSPOSE are released under CC0.',
      'We also display data from Crossref, DOAJ, Publons, and ORCID.'
    ]
  },
  {
    title: 'Versions',
    bullets: [
      'By default, the most recent version of a record will be displayed, unless the TRANSPOSE team believes an earlier record to be of higher quality in terms of accuracy and completeness.',
      'All versions are retained and are available for download.'
    ]
  },
  {
    title: 'Data origin',
    bullets: [
      {
        text: 'There are two ways to enter data into TRANSPOSE:',
        bullets: [
          'A publicly-accessible form. Use this when entering information about single journals or groups of journals that share the same policies.',
          {
            text:'A spreadsheet to enter many journals at once (contact transpose-publishing@googlegroups.com), which permits more flexibility in differentiating policies but is less user-friendly.',
            in_line_link: {
              text: 'transpose-publishing@googlegroups.com ',
              link: 'transpose-publishing@googlegroups.com '
            }
          }
        ]
      },
      'Data may have been contributed directly by the journal editor or another representative of the journal or publisher, or it may have been added by a member of the public.'
    ]
  },
  {
    title: 'Journal verification process',
    bullets: [
      'Records can be marked as “journal verified.” These records are displayed as such on the web and can no longer be edited through the publicly-accessible form.',
      {
        text: 'Journal verification process',
        bullets: [
          'Regardless of which data entry method is used, contributors can assert during the submission process that they are an authorized representative of the journal, such as an editor or publisher.',
          'If information was not provided to member of the team directly (eg via email) by a journal representative, we will contact a representative of the journal before making verified records public in our front end. If the email address provided by the user who entered the information does not originate from the domain of the journal or publisher, we will also contact another representative of the journal.'
        ]
      }
    ]
  },
  {
    title: 'Reporting issues with records',
    description: {
      text: 'If you find a problem with a record, please let us know by pressing the “report” button. You may also email transpose-publishing@googlegroups.com  with any concerns. ',
      in_line_link: {
        text: 'transpose-publishing@googlegroups.com',
        link: 'transpose-publishing@googlegroups.com'
      }
    }
  }
];


/*
The FAQ array below is rendered directly. It is similar to glossary cards. Adding an object with title and description
will render a card in the FAQ section. FAQ Descriptions can also include in_link_links.
*/
window._content.faq = [
  {
    title: 'Where can I access the data?',
    description: {
      text: 'Click here to download the database in csv format.',
      in_line_link: {
        text: 'here',
        link: 'https://docs.google.com/spreadsheets/d/10cgryddPROS2szJrC2xzTsqEu1nCgSTNZZBkLizZfTc/export?format=csv&id=10cgryddPROS2szJrC2xzTsqEu1nCgSTNZZBkLizZfTc&gid=0'
        }
      }
    },
  {
    title: 'I am a publisher interested in depositing or updating data; whom should I contact?',
    description: {
      text: 'Thank you for your interest! Please email transpose-publishing@googlegroups.com ',
      in_line_link: {
        text: 'transpose-publishing@googlegroups.com',
        link: 'transpose-publishing@googlegroups.com'
      }
    }
  }
];
