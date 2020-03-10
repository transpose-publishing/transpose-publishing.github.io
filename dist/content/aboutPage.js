
/*
This aboutPage array is rendered directly. The first item is just the description without a title (a title can be added
by adding a title property) The rest of the items have a title and content. Content is an array that can contain plain
text, links or in_line_links
*/

window._content.about_page = [
  {
    class: 'primary-description',
    content: 'Transpose (TRANsparency in Scholarly Publishing for Open Scholarship Evolution) is an initiative to build a database of journal policies. We’re focusing on three areas: open peer review, co-reviewing, and detailed preprinting policies. We welcome contributions from anyone, but seek verification from journals and publishers. Our goal is to foster new practices while increasing awareness among authors, editors, and other stakeholders, and we seek to provide resources to assist journals in setting, sharing, and clarifying their policies.'
  },

  {
    title: 'More about Transpose',
    content: [
      {
        text: 'View database statistics',
        link: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSU4cmOwS2NdM16S0h8F6A3FSPs1fp2Eng9HPXeosfLsL_lsXRtEC8odQW5GJTfz7fmVbl2f2YJ2_Sd/pubhtml?gid=146126401&single=true'
      },
      {
        text: 'See our landscape study on the availability of journal policies across disciplines (CSE2019 Poster)',
        link: 'https://zenodo.org/record/3237242'
      },
      {
        text: 'Read potential use cases to learn how these data could be useful to different stakeholder groups.',
        link: 'https://transpose-publishing.github.io/#/user-stories'
      }
    ]
  },

  {
    title: 'Get involved',
    content: [
      {
        text:'Edit and add new records to the database',
        link: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQVQVbwRTFymY1yMMPvHRLzEhlnm0HZ1ZEKvWeNjjbYtvyYuZ4_6eTqrJ0LkQDVF8ASwv62U3uw4V18/pubhtml?gid=1520385021&single=true'
      },
      {
        text: 'Follow us on Twitter',
        link: 'https://twitter.com/TRANSPOSEsci'
      }
    ]
  },

  {
    title: 'Contributors',
    content: [
      'CURRENT',
      'Samantha Hindle, bioRxiv and PREreview, USA',
      'Jennifer Lin, Crossref, USA',
      'Gary McDowell, Future of Research, USA',
      'Jessica Polka, ASAPbio, USA',
      'Naomi Penfold, ASAPbio, USA',
      'Tony Ross-Hellauer, TU Graz & Know-Center, Austria',
      'Sarah Stryeck, TU Graz, Austria',
      'PAST',
      'Cameron Blandford, 221B, USA',
      'Benedikt Fecher, Humboldt Institute for Internet and Society, Germany',
      'Daniel Himmelstein, UPenn, USA',
    ]
  }
];
