/* eslint-disable arrow-parens */
import fs from 'fs';
import config from './config';

const { pathSrc } = config;

const files = ['CHANGELOG', 'CONTRIBUTING', 'CODE_OF_CONDUCT'];
const components = ['changelog', 'how-to-contribute', 'code-of-conduct'];

const generateGithubInfos = async () => {
  await Promise.all(
    files.map(async (file, index) => {
      const response = await fetch(
        `https://raw.githubusercontent.com/AxaGuilDEv/react-toolkit/master/${file}.md`,
      );
      const responseText = await response.text();
      fs.writeFileSync(
        `${pathSrc}/pages/get-started/${components[index]}/markdown/content.md`,
        responseText,
      );
    }),
  );
};

export default generateGithubInfos;
