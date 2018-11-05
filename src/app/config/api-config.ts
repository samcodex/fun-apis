import { FunApi } from "../models/fun-apis";

export const ApiConfig: FunApi[] = [
  {
    name: 'Chuck Norris Facts',
    website: 'https://api.chucknorris.io/',
    url: 'https://api.chucknorris.io/jokes/random',
    description: 'A fan of Chuck Norris? This one is for you.'
  },
  {
    name: 'Pokemon API',
    website: 'https://pokeapi.co/',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    description: 'All the Pokémon data you’ll ever need!'
  },
  {
    name: 'International Space Station API',
    website: 'http://open-notify.org/Open-Notify-API/ISS-Location-Now/',
    url: 'http://api.open-notify.org/iss-now.json',
    description: 'Maybe an app tracking the ISS is what you need in your portfolio!'
  },
  {
    name: 'Star Wars API',
    website: 'https://swapi.co/',
    url: 'https://swapi.co/api/people/1/',
    description: 'Create the ultimate Star Wars project for your portfolio!'
  },
  {
    name: 'musixmatch',
    website: 'https://developer.musixmatch.com/documentation',
    url: 'https://api.musixmatch.com/ws/1.1/chart.artists.get?format=jsonp&callback=callback&country=us',
    description: 'Display your favourite lyrics on your website!'
  },
  {
    name: 'numbers api',
    website: 'http://numbersapi.com',
    url: 'http://numbersapi.com/42',
    description: 'Want to learn interesting facts about numbers? Here’s an API for you!'
  },
  {
    name: 'Fun Translations',
    website: 'https://funtranslations.com/api',
    url: 'https://api.funtranslations.com/translate/',
    description: 'Fan of languages like Dothraki, Klingon or Minion? Translate English to these languages and many more!'
  },
  {
    name: 'BreweryDB',
    website: 'https://www.brewerydb.com/',
    url: 'https://api.brewerydb.com/v2/',
    description: 'Beer, beer and more beer!'
  },
  {
    name: 'REST Countries',
    website: 'https://restcountries.eu/',
    url: 'https://restcountries.eu/rest/v2/name/aruba?fullText=true',
    description: 'Incorporate country information anywhere!'
  },
  {
    name: 'Tronald Dump',
    website: 'https://www.tronalddump.io/',
    url: 'https://api.tronalddump.io/quote/VHKwB8crTte7--FqtIxq9A',
    description: 'Ever wonder what Donald Trump thinks about something? This API can help.'
  },
  {
    name: 'NASA APIs',
    website: 'https://api.nasa.gov/index.html',
    url: 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo',
    description: 'Want to access the NASA Image and Video Library, display Mars rover photos or listen to sounds from space? NASA got you covered!'
  },
  {
    name: 'jService',
    website: 'http://jservice.io/',
    url: 'http://jservice.io/api/random',
    description: 'Maybe it’s time for you to build your own trivia app? Look no further.'
  },
  {
    name: 'catfacts',
    website: 'https://alexwohlbruck.github.io/cat-facts/',
    url: 'https://cat-fact.herokuapp.com/facts',
    description: 'If you’re like me, I/’m sure you’d love an API dedicated to facts about cats!'
  },
  {
    name: 'kitsu API',
    website: 'https://kitsu.docs.apiary.io/#',
    url: 'https://kitsu.io/api/edge/anime?filter[genres]=adventure',
    description: 'Help someone out by making a website to discover new animes.'
  },
  {
    name: 'TacoFancy API',
    website: 'https://github.com/evz/tacofancy-api',
    url: 'http://taco-randomizer.herokuapp.com/random',
    description: 'For anyone who loves tacos'
  },
  {
    name: 'Advice Slip',
    website: 'https://api.adviceslip.com/',
    url: 'https://api.adviceslip.com/advice',
    description: 'Create an advice generator app with this API.'
  },
  {
    name: 'marvel',
    website: 'https://developer.marvel.com/',
    url: 'http://gateway.marvel.com/v1/public/comics',
    description: 'The world/’s biggest comic API, the possibilities are endless!'
  },
  {
    name: 'AniDB',
    website: 'https://wiki.anidb.net/w/API',
    url: 'http://api.anidb.net:9001/httpapi?request=anime',
    description: 'An API dedicated to anime information.',
    logo: 'https://wiki.anidb.net/images/anidb_wiki.gif?7a8f2'
  },
];
