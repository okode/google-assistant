import * as httpm from 'typed-rest-client/HttpClient';

export class GeoDBService {

  private static readonly BASE_URL = 'https://geodb.dev.miindel.com/articles';
  private static readonly SEARCH_TEMPLATE =
  {
    _source: { },
    query: {
      bool: {
        must: [
          {
            query_string: {
              query: 'searchterm',
              analyze_wildcard: true,
              default_field: '*'
            }
          }
        ]
      }
    }
  };

  private httpc = new httpm.HttpClient('node-api-user-agent');

  async getTreatment(treatment: string) {
    const search = { ...GeoDBService.SEARCH_TEMPLATE };
    search.query.bool.must[0].query_string.query = treatment;
    let response = await this.httpc.post(`${GeoDBService.BASE_URL}/_search`, JSON.stringify(search));
    let body = await response.readBody();
    return JSON.parse(body)[0] as { assistant: string };
  }

}