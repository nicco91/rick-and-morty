import config from 'config';
import { Endpoint } from 'models/endpoint';
import { getCharacter, getEpisode, getLocation } from 'rickmortyapi';

export function extractId(url: string, endpoint: Endpoint) {
  const path = `${config.api.baseUrl}/${endpoint}/`;
  const id = url.replace(path, '');
  return parseInt(id);
}

export function extractIds(urls: string[], endpoint: Endpoint) {
  return urls.map((url) => extractId(url, endpoint));
}

export function getResource(endpoint: Endpoint, ids: number[]) {
  switch (endpoint) {
    case 'character':
      return getCharacter(ids);
    case 'episode':
      return getEpisode(ids);
    case 'location':
      return getLocation(ids);
  }
}
