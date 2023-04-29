import Head from 'next/head'
import { useState, useEffect } from 'react'
import { fetchNFTs } from '../utils/fetchNFTs';
import {
  HomePageWrapper
} from "../styles/HomeStyles";
import GalleryCard from '../components/GalleryCard';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const pageSize = 50
  const [json, setJson] = useState([])
  const [length, setLength] = useState(0)
  const [results, setResults] = useState([]);
  const [ownerAddress, setOwnerAddress] = useState('');
  const [contractAddress, setContractAddress] = useState("")

  const [checkedBoxes, setCheckedBoxes] = useState({
    fullGreenHouse: false,
    perfectRamen: false,
    brutalistSpace: false,
    fullUnderpass: false,
    theRealhiddendenza: false,
    fullConvenienceStore: false,
    waterElements: false,
    catDinnerBowl: false,
    triplePets: false,
    publicTransport: false,
    tropical: false
  });
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://stombprd01.blob.core.windows.net/static/tokensinfo/mb_result.json')
      const json = await response.json()
      setJson(json)

      const startIndex = (page - 1) * pageSize
      const endIndex = startIndex + pageSize
      const filteredData = json.slice(startIndex, endIndex)
      setResults(filteredData)
    }

    fetchData()
  }, [router.query, page])

  const goToPage = (pageNumber) => {
    setPage(pageNumber)
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: pageNumber }
    })
  }

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedBoxes((prevState) => ({ ...prevState, [name]: checked }));
  };

  const checkConditions = (item) => {
    switch(true) {
      case (
        checkedBoxes.fullGreenHouse &&
        item.attributes.Architecture === 'Greenhouse' &&
        item.attributes.Interior === 'Overgrown'
      ):
      case (
        checkedBoxes.perfectRamen &&
        item.attributes.Architecture === 'Japanese Traditional' &&
        item.attributes.Interior === 'Ramen Shop' &&
        item.attributes.Decoration === 'Pork Noodles'
      ):
      case (
        checkedBoxes.brutalistSpace &&
        item.attributes.Architecture === 'Modern' &&
        item.attributes.Interior === 'Space'
      ):
      case (
        checkedBoxes.fullUnderpass &&
        item.attributes.Architecture === 'Tokyo Street' &&
        item.attributes.Midground === 'Industrial' &&
        item.attributes.Background === 'Highway'
      ):
      case (
        checkedBoxes.theRealhiddendenza &&
        item.attributes.Architecture === 'Concrete Denza' &&
        (item.attributes.Car === 'Tram' || item.attributes.Car === 'Tram Pink' || item.attributes.Car === 'Tram Green' || item.attributes.Car === 'Tram Tagged')
      ):
      case (
        checkedBoxes.fullConvenienceStore &&
        item.attributes.Architecture === 'Convenience Store' &&
        item.attributes.Interior === 'Midnight Breeze Shop' &&
        item.attributes.Decoration === 'GM Shop'
      ):
      case (
        checkedBoxes.waterElements &&
        item.attributes.Interior === 'Fish Bowl' &&
        (item.attributes.Background === 'Island Sea' || item.attributes.Background === 'Beach') &&
        item.attributes.Architecture === 'Concrete Wave'
      ):
      case (
        checkedBoxes.catDinnerBowl &&
        item.attributes["Sky Element"] === 'Cat Kami' &&
        item.attributes.Interior === 'Fish Bowl'
      ):
      case (
        checkedBoxes.triplePets &&
        (item.attributes.Character === 'Bus Stop' || item.attributes.Character === 'Samu Frogs') &&
        item.attributes.Interior === 'Tatami Shiba Cat'
      ):
      case (
        checkedBoxes.publicTransport &&
        (item.attributes.Car === 'Tram' || item.attributes.Car === 'Tram Pink' || item.attributes.Car === 'Tram Green' || item.attributes.Car === 'Tram Tagged') &&
        item.attributes.Foreground === 'Train Light' &&
        item.attributes.Character === 'Bus Stop'
      ):
      case (
        checkedBoxes.tropical &&
        item.attributes.Midground === 'Palms' &&
        (item.attributes.Background === 'Beach' || item.attributes.Background === 'Island Sea')
      ):
        return true;
      default:
        return false;
    }
  };
  
  const filterResults = () => {
    const filteredResult = json.filter((item) => checkConditions(item));
    setResults(filteredResult);
    setLength(filteredResult.length)
    // console.log(filteredResult)
  };

  return (
    <div>
      <Head>
        <title>Midnight Breeze by Dutchtide Studios</title>
        <meta name="description" content="Midnight Breeze by Dutchtide Studios" />
        <meta property="twitter:title" content="Midnight Breeze by Dutchtide Studios" />
        <meta property="twitter:description" content="Midnight Breeze" />
        <meta property="og:description" content="Midnight Breeze" />
        <meta property="og:title" content="Midnight Breeze" />
        <meta property="og:url" content="https://www.midnightbreeze.io/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:image" content="https://www.midnightbreeze.store/thumbnail.png" />
        <meta property="twitter:image" content="https://www.midnightbreeze.store/thumbnail.png" />
      </Head>


      <HomePageWrapper >
        <div className='flex flex-col gap-5'>
          <div className='flex justify-center m-1'>
            <h1>My MFB TOKENS</h1>
          </div>

          <div className='flex flex-col space-y-2 mx-auto' >
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center justify-center p-4">
                <label className="text-lg flex flex-row font-bold items-center space-x-5">
                  <span className='text-2xl text-gray-300'>Full GreenHouse</span>

                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="fullGreenHouse"
                    checked={checkedBoxes.fullGreenHouse}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>

              <div className="flex flex-col items-center justify-center p-4">
                <label className="text-lg flex font-bold items-center space-x-7">
                  <span className='text-2xl text-gray-300'>Perfect Ramen</span>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="perfectRamen"
                    checked={checkedBoxes.perfectRamen}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>

              <div className="flex flex-col items-center justify-center p-4">
                <label className="text-lg flex font-bold items-center space-x-7">
                  <span className='text-2xl text-gray-300'>Brutalist Space</span>

                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="brutalistSpace"
                    checked={checkedBoxes.brutalistSpace}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>

              <div className="flex flex-col items-center justify-center p-4">
                <label className="text-lg flex font-bold items-center space-x-7">
                  <span className='text-2xl text-gray-300'>Full underpass</span>

                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="fullUnderpass"
                    checked={checkedBoxes.fullUnderpass}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>

              <div className="flex flex-col items-center justify-center p-4">
                <label className="text-lg flex font-bold items-center space-x-7">
                  <span className='text-2xl text-gray-300'>The Real hidden denza</span>

                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="theRealhiddendenza"
                    checked={checkedBoxes.theRealhiddendenza}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>

              <div className="flex flex-col items-center justify-center p-4">
                <label className="text-lg flex font-bold items-center space-x-7">
                  <span className='text-2xl text-gray-300'>Full Convenience Store</span>

                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="fullConvenienceStore"
                    checked={checkedBoxes.fullConvenienceStore}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>

              <div className="flex flex-col items-center justify-center p-4">
                <label className="text-lg flex font-bold items-center space-x-7">
                  <span className='text-2xl text-gray-300'>Water Elements</span>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="waterElements"
                    checked={checkedBoxes.waterElements}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>

              <div className="flex flex-col items-center justify-center p-4">
                <label className="text-lg flex font-bold items-center space-x-7">
                  <span className='text-2xl text-gray-300'>Cat's Dinner Bowl</span>

                  <input
                    type="checkbox"
                    name="catDinnerBowl"
                    checked={checkedBoxes.catDinnerBowl}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>

              <div className="flex flex-col items-center justify-center p-4">
                <label className="text-lg flex font-bold items-center space-x-7">
                  <span className='text-2xl text-gray-300'>Triple Pets</span>

                  <input
                    type="checkbox"
                    name="triplePets"
                    checked={checkedBoxes.triplePets}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>

              <div className="flex flex-col items-center justify-center p-4">
                <label className="text-lg flex font-bold items-center space-x-7">
                  <span className='text-2xl text-gray-300'>Public Transport</span>

                  <input
                    type="checkbox"
                    name="publicTransport"
                    checked={checkedBoxes.publicTransport}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>


              <div className="flex flex-col items-center justify-center p-4">
                <label className="text-lg flex font-bold items-center space-x-7">
                  <span className='text-2xl text-gray-300'>Tropical</span>

                  <input
                    type="checkbox"
                    name="tropical"
                    checked={checkedBoxes.tropical}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
            </div>
            <div className='flex justify-center'>
              <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md transition-colors duration-300"
                onClick={filterResults}
              >
                Filter By Trait Combinations
              </button>
            </div>
          </div>
          <div className='flex flex-col w-1/2 justify-center items-center mx-auto space-y-5'>
            <input className="border focus:outline-none py-2 px-3 flex justify-center rounded-lg w-full" value={ownerAddress} onChange={(e) => setOwnerAddress(e.target.value)} placeholder='Insert your wallet address'></input>
            <input className="border focus:outline-none py-2 px-3 flex justify-center rounded-lg w-full" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} placeholder='Insert your NFT address'></input>
            <div className='flex justify-center'>
              <button
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md transition-colors duration-300"
                onClick={()=>{fetchNFTs(ownerAddress, contractAddress, setResults)}}
              >
                Get My NFTS
              </button>
            </div>
          </div>

          <div>
            <span>Total Combinations: {length}</span>
          </div>
          <div className="grid grid-cols-5 gap-4 mx-5">
            {results ? results.map((item) => (
              <div key={item.id}>
                <GalleryCard image={item.image} name={item.name}/>
              </div>
            )): <div>No NFTs found</div>}
 
          </div>
          <div className='flex flex-row gap-x-3 mx-auto items-center'>
            {page > 1 && (
              <button onClick={() => goToPage(page - 1)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md transition-colors duration-300">Prev</button>
            )}
            {page > 2 && (
              <button onClick={() => goToPage(1)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md transition-colors duration-300">1</button>
            )}
            {page > 3 && (
              <span>...</span>
            )}
            {page > 1 && (
              <button onClick={() => goToPage(page - 1)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md transition-colors duration-300">{page - 1}</button>
            )}
            <button disabled className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md transition-colors duration-300">{page}</button>
            {page < Math.ceil(json?.length / pageSize) && (
              <button onClick={() => goToPage(page + 1)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md transition-colors duration-300">{page + 1}</button>
            )}
            {page < Math.ceil(json?.length / pageSize) - 1 && (
              <span>...</span>
            )}
            {page < Math.ceil(json?.length / pageSize) && (
              <button onClick={() => goToPage(page + 1)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl shadow-md transition-colors duration-300">Next</button>
            )}
          </div>

        </div>

      </HomePageWrapper>

    </div>
  )
}
