const API_KEY = 'JRHX2T5-RE1MQWB-MDAYG74-4SS082G';

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
  const BEERS_URL = `${API_URL}beers`;
  return {
    addComment: async (beerId, commentContent) => {
      try {
        //fetch request
        const response = await fetch(`${BEERS_URL}/${beerId}/comment`, {
          method: 'POST',
          body: JSON.stringify({
            comment: commentContent,
          }),
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        });
        if (!response.ok) {
          throw 'Error';
        }
        const result = await response.json();
        return result;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },

    getBeers: async (searchQuery, dateQuery) => {
      try {

        //build request url

        let requestUrl = BEERS_URL;

        //if dateQuery, I need to bring all results, and then filter by date and limit
        //otherqise I lose results
        
        requestUrl = searchQuery ? `${BEERS_URL}?search=${searchQuery}`: BEERS_URL;


        //fetch request

        const response = await fetch(requestUrl, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        });

        //save response data

        const data = await response.json();
        let beers = data.beers;


        //apply date filter

        if (dateQuery) {
          //first filter by date
          beers = beers.filter((beer) => {
            const [, year] = beer.firstBrewed.split('/');

            return dateQuery === year;
          });
          //then apply limit (otherwise I lose results)
          beers = beers.slice(0, 10);
        }
        //return formated data
        return beers;

      } catch (e) {
        console.error(e);
        throw e;
      }
    },

    getBeerDetail: async (id) => {
      try {
        const response = await fetch(`${BEERS_URL}/${id}`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'X-API-KEY': API_KEY,
          },
        });
        const beer = await response.json();

        return beer;
      } catch (e) {
        console.error(e);
      }
    },
  };
};

export default api;