function createLinks({user}) {
  const links = new Map()
  const linkItems = []

  for (const href of user.contacts) {
    url = new URL(href).host.split('.');
    linkType = url[url.indexOf('com') - 1];
    links.set(linkType, href);
  }
  for (const [linkType, href] of links.entries()) {
    const linkPic = createElement('img', {
      className: 'linkPic',
      attributes: {
        src: `/assets/img/${linkType}.svg`,
        alt: `${linkType} link`,
      },
    });
    const a = createElement('a', { attributes: { href: href } }, linkPic);
    const linkItem = createElement('li', { className: 'linkItem' }, a);
    linkItems.push(linkItem);
  }

  return linkItems;
}