import Head from 'next/head'
import { useState, useEffect } from 'react'
import { fetchNFTs } from '../utils/fetchNFTs';
import {
  HomePageWrapper
} from "../styles/HomeStyles";
import GalleryCard from '../components/GalleryCard';
import { useRouter } from 'next/router'

const contractAddr = "0xD9c036e9EEF725E5AcA4a22239A23feb47c3f05d";

export default function Home() {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const pageSize = 50
  const [json, setJson] = useState([])
  const [results, setResults] = useState([]);
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

  useEffect(() => {
    const filteredResult = json.filter((item) => checkConditions(item));
    setFilteredResults(filteredResult);
    console.log(filteredResult)
  }, [checkedBoxes]);
  
  // const filterResults = () => {
  //   const filteredResult = json.filter((item) => checkConditions(item));
  //   setResults(filteredResult);
  //   // console.log(filteredResult)
  // };

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
        <div className='flex flex-row gap-5'>
          <div>
            <div className="h-screen bg-gray-200 p-8 w-[400px] fixed left-0 top-[106px]">
              <h1 className='text-black'>FILTERS</h1>

              <div className='w-full space-y-10 my-5'>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="fullGreenHouse"
                    checked={checkedBoxes.fullGreenHouse}
                    onChange={handleCheckboxChange}
                  />
                  <span className='text-4xl text-gray-900'>Full GreenHouse</span>
                </div>
                <div className='flex flex-row items-center space-x-5'> 
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="perfectRamen"
                    checked={checkedBoxes.perfectRamen}
                    onChange={handleCheckboxChange}
                  />
                  <span className='text-4xl text-gray-900'>Perfect Ramen</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="brutalistSpace"
                    checked={checkedBoxes.brutalistSpace}
                    onChange={handleCheckboxChange}
                  />
                  <span className='text-4xl text-gray-900'>Brutalist Space</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="fullUnderpass"
                    checked={checkedBoxes.fullUnderpass}
                    onChange={handleCheckboxChange}
                  />
                  <span className='text-4xl text-gray-900'>Full underpass</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="theRealhiddendenza"
                    checked={checkedBoxes.theRealhiddendenza}
                    onChange={handleCheckboxChange}
                  />
                  <span className='text-4xl text-gray-900'>The Real Hidden Denza</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="fullConvenienceStore"
                    checked={checkedBoxes.fullConvenienceStore}
                    onChange={handleCheckboxChange}
                  />
                  <span className='text-4xl text-gray-900'>Full Convenience Store</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="waterElements"
                    checked={checkedBoxes.waterElements}
                    onChange={handleCheckboxChange}
                  />
                  <span className='text-4xl text-gray-900'>Water Elements</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    type="checkbox"
                    name="catDinnerBowl"
                    checked={checkedBoxes.catDinnerBowl}
                    onChange={handleCheckboxChange}
                  />
                  <span className='text-4xl text-gray-900'>Cat's Dinner Bowl</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    type="checkbox"
                    name="triplePets"
                    checked={checkedBoxes.triplePets}
                    onChange={handleCheckboxChange}
                  />
                  <span className='text-4xl text-gray-900'>Triple Pets</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    type="checkbox"
                    name="publicTransport"
                    checked={checkedBoxes.publicTransport}
                    onChange={handleCheckboxChange}
                  />
                  <span className='text-4xl text-gray-900'>Public Transport</span>
                </div>
                <div className='flex flex-row items-center space-x-5'>
                  <input
                    type="checkbox"
                    name="tropical"
                    checked={checkedBoxes.tropical}
                    onChange={handleCheckboxChange}
                  />
                  <span className='text-4xl text-gray-900'>Tropical</span>
                </div>

              </div>
            </div>
          </div>

          
          <div className='flex flex-col space-y-1 absolute left-[500px] top-[150px] w-[400px]'>
            <input className="border focus:outline-none py-2 px-3 flex justify-center rounded-lg w-full h-20 placeholder:text-lg" value={ownerAddress} onChange={(e) => setOwnerAddress(e.target.value)} placeholder='Insert your wallet address'></input>
            <div className='border-2 border-black bg-blue-600 flex items-center p-2 mt-[100px] rounded-lg'>
              <button 
                className='flex items-center text-center justify-center mx-auto'
                onClick={()=>{fetchNFTs(ownerAddress, contractAddr, setFilteredResults)}}
              > 
                Get My NFTS
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-5 w-1/3 absolute top-[150px] right-[250px]">
            {filteredResults.map((item) => (
              <div key={item.id}>
                <GalleryCard image={item.image} name={item.name} id={item.id} contractAddress={contractAddr}/>
              </div>
            ))}
            
          </div>
        </div>
      </HomePageWrapper>

    </div>
  )
}
