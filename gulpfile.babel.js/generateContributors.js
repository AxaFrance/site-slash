/* eslint-disable arrow-parens */
import path, { resolve } from 'path';
import fs from 'fs';
import config from './config';
import contrib from './contrib.json';

const { pathSrc } = config;

const pathContributorsPugTemplate = path.join(
  `${pathSrc}/pages/get-started/contributors/`,
  'templates',
);

const getContributors = async () => {
  const response = await fetch(
    'https://api.github.com/repos/AxaFrance/react-toolkit/stats/contributors',
  );
  const responseJson = await response.json();
  return responseJson;
}; 

const generateContributors = async () => {
  const contributorsRaw = await getContributors();
  const reservedContributors = contributorsRaw.reverse();
  const contributors = reservedContributors.map(({ weeks, total, ...restContributor }) => {
    const additions = weeks.map(({ a }) => a).reduce((acc, curr) => acc + curr);
    const deletions = weeks.map(({ d }) => d).reduce((acc, curr) => acc + curr);
    const power = Number(total) + Number(additions) + Number(deletions);
    return {
      ...restContributor,
      additions,
      deletions,
      power,
      total,
    };
  }).sort((a, b) => b.power - a.power);

  let contentFile = '.tk-contributors\n';

  contributors.forEach((contributor, index) => {
    const { author, total, additions, deletions, power } = contributor;
    const { avatar_url: avatarUrl, html_url: htmlUrl, login } = author;

    contentFile += '  .tk-contributor\n';
    contentFile += `    a.tk-contributor__link(href="${htmlUrl}" title="${login}") ${login}\n`;
    contentFile += `    img.tk-contributor__avatar(src="${avatarUrl}" loading="lazy")\n`;
    contentFile += `    span.tk-contributor__badge #${index + 1}\n`;
    contentFile += `    span.tk-contributor__commits Commits : ${total}\n`;
    contentFile += `    span.tk-contributor__additions Additions : ${additions} ++\n`;
    contentFile += `    span.tk-contributor__deletions Deletions : ${deletions} --\n`;
    contentFile += `    span.tk-contributor power : ${power}\n`;

  });

  if (!fs.existsSync(pathContributorsPugTemplate)) {
    fs.mkdirSync(pathContributorsPugTemplate, { recursive: true });
  }

  fs.writeFileSync(`${pathContributorsPugTemplate}/contributors-page.pug`, contentFile);
};

export default generateContributors;
