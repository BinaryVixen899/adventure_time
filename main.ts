import { episodeList, seasonTable } from './mod.ts';

seasonTable(2).then((res) => console.info(res));
episodeList().then((res) => console.info(res));
