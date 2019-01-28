const base = {
  name: 'Oregon Knowledge Bank',
  url: 'https://oregonkb.com'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - a local public safety resource`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is a repository for northwest public safety programs and research.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'a local public safety resource',

  /* url */
  siteUrl: base.url,
  siteImage: 'preview.png',
  // pathPrefix: '',

  // author
  authorName: 'OKB'
};

module.exports = config;
