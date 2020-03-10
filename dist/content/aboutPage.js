
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
       text: '- View database statistics',
       link: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSU4cmOwS2NdM16S0h8F6A3FSPs1fp2Eng9HPXeosfLsL_lsXRtEC8odQW5GJTfz7fmVbl2f2YJ2_Sd/pubhtml?gid=146126401&single=true'
      },
      {
       text: '- See the poster of our landscape study on the availability of journal policies across disciplines (CSE2019 Poster)',
       link: 'https://zenodo.org/record/3237242'
      },
      {
       text: '- See the recent preprint of our landscape study on the availability of journal policies across disciplines (bioRxiv preprint)',
       link: 'https://www.biorxiv.org/content/10.1101/2020.01.24.918995v1'
      }
    ]
  },

  {
   title: 'Get involved',
    content: [
     {
      text:'- Update existing journal information: In existing journal record, click on ‘Edit Report’ link and fill in the form',
      link: 'https://transpose-publishing.github.io/#/',
     },
     {
      text: '- Add policies for one journal, or policies that are identical across several journals',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSf2VsvytNSGrYLwKmsdN3SYAIYSHo71A1-RppjlyIuLcIKepw/viewform'
     },
     {
      text: '- To add multiple journals that differ in their policies, please contact transpose-publishing@googlegroups.com',
      in_line_link: {
         text: 'transpose-publishing@googlegroups.com',
         link: 'transpose-publishing@googlegroups.com'
       }
     },
     {
       text: '- Follow us on Twitter',
       link: 'https://twitter.com/TRANSPOSEsci'
     },
     {
       text: '- For more information or questions, please contact transpose-publishing@googlegroups.com',
       in_line_link: {
          text: 'transpose-publishing@googlegroups.com',
          link: 'transpose-publishing@googlegroups.com'
       }
      }
    ]
  },

  {
   title: 'Current Contributors',
   content: [
     '- Samantha Hindle, bioRxiv and PREreview, USA',
     '- Jennifer Lin, Crossref, USA',
     '- Gary McDowell, Future of Research, USA',
     '- Jessica Polka, ASAPbio, USA',
     '- Naomi Penfold, ASAPbio, USA',
     '- Tony Ross-Hellauer, TU Graz & Know-Center, Austria',
     '- Sarah Stryeck, TU Graz, Austria',
    ]
  },
 
  {
   title: 'Past Contributors',
   content: [
     '- Cameron Blandford, 221B, USA',
     '- Benedikt Fecher, Humboldt Institute for Internet and Society, Germany',
     '- Daniel Himmelstein, UPenn, USA',
    ]
  },
 
  {
     title: 'Participating publishers',
     content: [
     'We thank the following publishers for providing data about multiple journals.',
     '- American Society of Clinical Oncology',
     '- Bielstein Journals',
     '- Company of Biologists',
     '- Copernicus',
     '- Elsevier',
     '- Entomological Society of America',
     '- European Respiratory Society',
     '- F1000',
     '- Frontiers',
     '- Hindawi',
     '- Kyiv-Mohyla Journals',
     '- MDPI',
     '- Microbiology Society',
     '- Pensoft',
     '- PLOS',
     '- Royal Society',
    ]
  }
];
