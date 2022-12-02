// "use client"

import Image from 'next/image'
import styles from './page.scss'
import Card from '../components/Card';
import Link from 'next/link';

const categoryArray = [
  {
    title: 'Treanding',
    apiUrl: `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
  },
  {
    title: 'Popular',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`
  },
  {
    title: 'Top Rated',
    apiUrl: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
  },

  {
    title: 'Best by Tom Cruise',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=true&page=1&with_cast=500&with_people=500&sort_by=vote_count.desc`
  },
  {
    title: 'Action',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=true&include_video=false&page=1&with_genres=28`
  },
  {
    title: 'Best by Shah Rukh Khan',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=true&page=1&with_cast=35742&with_people=35742&sort_by=vote_count.desc`
  },
  {
    title: 'Comedy',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=true&include_video=false&page=1&with_genres=35`
  },
  {
    title: 'Best from Bollywood',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_original_language=hi`
  },
  {
    title: 'Horror',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=true&include_video=false&page=1&with_genres=27`
  },
  {
    title: 'Best from 2010',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=true&include_video=false&page=1&primary_release_year=2010&sort_by=vote_count.desc`
  },
  {
    title: 'Best by Leonardo DiCaprio',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=true&page=1&with_cast=6194&with_people=6194&sort_by=vote_count.desc`
  },
  {
    title: 'Sci-Fi',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=true&include_video=false&page=1&with_genres=878&sort_by=vote_count.desc`
  },
  {
    title: 'Crime',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&include_adult=true&include_video=false&page=1&with_genres=80`
  },
]

const getCardsByCategory = async (api,cardSize) => {
  const res = await fetch(api)
  const data = await res.json()

  const cardComponents = data.results.map((movie,i) =>  <Card key={i} className={cardSize} {...movie}  />)

  return cardComponents;
}

export default async function Home() {

  return (
    <div>
      {
        await Promise.all(categoryArray.map(async (category) => (
            <div key={category.title}>
              <h2 className='categoryTitle'>{category.title}</h2>
              <div className='cardContainer'>
                {await getCardsByCategory(category.apiUrl, (category.title === 'Treanding' ? 'wide' : 'normal'))}
              </div>
            </div>
          )
        ))
      }
    </div>
  )
}
