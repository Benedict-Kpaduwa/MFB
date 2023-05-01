import Head from 'next/head'
import { useState, useEffect } from 'react'
import { fetchNFTs, getNFTsMetadata } from '../utils/fetchNFTs';
import {
  HomePageWrapper
} from "../styles/HomeStyles";
import GalleryCard from '../components/GalleryCard';
import { useRouter } from 'next/router'

const contractAddr = "0xD9c036e9EEF725E5AcA4a22239A23feb47c3f05d";

export default function Home() {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [json, setJson] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [ownerAddress, setOwnerAddress] = useState('');

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

      // const startIndex = (page - 1) * pageSize
      // const endIndex = startIndex + pageSize
      // const filteredData = json.slice(startIndex, endIndex)
      // setResults(filteredData)
    }

    fetchData()
  }, [router.query, page])

  useEffect(() => {
    getNFTsMetadata(filteredResults)
  },[])

  // const goToPage = (pageNumber) => {
  //   setPage(pageNumber)
  //   router.push({
  //     pathname: router.pathname,
  //     query: { ...router.query, page: pageNumber }
  //   })
  // }

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

  useEffect(() => {
    const filteredResult = json.filter((item) => checkConditions(item));
    setFilteredResults(filteredResult);
    console.log(filteredResult)
  }, [checkedBoxes]);
  
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
        <div className='flex'>
          <div className="flex flex-col h-screen md:flex-row">
            <div className="bg-gray-200 p-8 sidebar">
              <h1 className='text-black'>FILTERS</h1>

              <div className='w-full space-y-2 my-2'>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="fullGreenHouse"
                    checked={checkedBoxes.fullGreenHouse}
                    onChange={handleCheckboxChange}
                  />
                  <span className='lg:text-lg md:text-lg sm:text-xs text-gray-900'>Full GreenHouse</span>
                </div>
                <div className='flex flex-row items-center space-x-5'> 
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="perfectRamen"
                    checked={checkedBoxes.perfectRamen}
                    onChange={handleCheckboxChange}
                  />
                  <span className='lg:text-lg md:text-lg sm:text-xs text-gray-900'>Perfect Ramen</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="brutalistSpace"
                    checked={checkedBoxes.brutalistSpace}
                    onChange={handleCheckboxChange}
                  />
                  <span className='lg:text-lg md:text-lg sm:text-xs text-gray-900'>Brutalist Space</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="fullUnderpass"
                    checked={checkedBoxes.fullUnderpass}
                    onChange={handleCheckboxChange}
                  />
                  <span className='lg:text-lg md:text-lg sm:text-xs text-gray-900'>Full underpass</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="theRealhiddendenza"
                    checked={checkedBoxes.theRealhiddendenza}
                    onChange={handleCheckboxChange}
                  />
                  <span className='lg:text-lg md:text-lg sm:text-xs text-gray-900'>The Real Hidden Denza</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="fullConvenienceStore"
                    checked={checkedBoxes.fullConvenienceStore}
                    onChange={handleCheckboxChange}
                  />
                  <span className='lg:text-lg md:text-lg sm:text-xs text-gray-900'>Full Convenience Store</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="waterElements"
                    checked={checkedBoxes.waterElements}
                    onChange={handleCheckboxChange}
                  />
                  <span className='lg:text-lg md:text-lg sm:text-xs text-gray-900'>Water Elements</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    type="checkbox"
                    name="catDinnerBowl"
                    checked={checkedBoxes.catDinnerBowl}
                    onChange={handleCheckboxChange}
                  />
                  <span className='lg:text-lg md:text-lg sm:text-xs text-gray-900'>Cat's Dinner Bowl</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    type="checkbox"
                    name="triplePets"
                    checked={checkedBoxes.triplePets}
                    onChange={handleCheckboxChange}
                  />
                  <span className='lg:text-lg md:text-lg sm:text-xs text-gray-900'>Triple Pets</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    type="checkbox"
                    name="publicTransport"
                    checked={checkedBoxes.publicTransport}
                    onChange={handleCheckboxChange}
                  />
                  <span className='lg:text-lg md:text-lg sm:text-xs text-gray-900'>Public Transport</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    type="checkbox"
                    name="tropical"
                    checked={checkedBoxes.tropical}
                    onChange={handleCheckboxChange}
                  />
                  <span className='lg:text-lg md:text-lg sm:text-xs text-gray-900'>Tropical</span>
                </div>

                <div className="flex flex-col space-y-2 my-2">
                  <label  className="lg:text-lg md:text-lg sm:text-xs text-gray-900">Enter Your Wallet Address</label>
                  <div className="flex lg:flex-row md:flex-col sm:flex-col items-center">
                    <input
                      className="mr-2 leading-tight border border-gray-500 px-2 py-1 rounded-md"
                      type="text"
                      value={ownerAddress} 
                      onChange={(e) => setOwnerAddress(e.target.value)}
                      placeholder='Enter Wallet Address'
                    />
                    <button 
                      onClick={() => {fetchNFTs(ownerAddress, contractAddr, setFilteredResults)}} 
                      className="p-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    > 
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-content w-full">
            <div className="flex flex-col items-center p-8 w-full">
              <div className='bg-black sticky top-0'>
                <h1 className="text-4xl font-bold mb-8 ">My NFTs: {filteredResults?.length}</h1>
              </div>
              <div className="w-full space-y-8 flex flex-col">
                {filteredResults ? filteredResults?.map((item) => (
                  <GalleryCard key={item.id} image={item.image} name={item.name} id={item.id} contractAddress={contractAddr} />
                )): <h1>You Have No NFTS</h1>}
              </div>
            </div>
          </div>

        </div>
      </HomePageWrapper>

    </div>
  )
}
