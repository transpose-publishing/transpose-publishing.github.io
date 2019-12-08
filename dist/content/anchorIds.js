
/*
These are the anchor ids used by the moreInfo page. Changing these values will control the url path, ie: /more-information/?anchor={anchor_id}

To add an anchor id, add it to this list then add an anchor_id property to a card on the moreInfo page following the same
format as in the glossary:  anchor_id: anchor_ids.name_of_new_anchor,

These anchor ids can also be used in the other content files to build link urls by using the following format:
link: 'https://transpose-publishing.github.io/#/more-information/?anchor=' + anchor_ids.name_of_new_anchor

New anchor_ids will be inert unless the source code or content links are updated to reference them.
*/
const anchor_ids = {
  peer_review: 'peer-review',
  open_peer_review: 'open-peer-review',
  co_review: 'co-review',
  preprints: 'preprints',
};
window._content.anchor_ids = anchor_ids;