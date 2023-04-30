import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      {" "}
      <h1> Page Not Found</h1>{" "}
    </div>
  );
};

export default PageNotFound;

<div className="flex flex-col items-center w-96">
                
                
                <div className="text-lg flex flex-row font-bold items-center gap-x-5 justify-between">
                  <span className='text-4xl text-gray-300'>Full GreenHouse</span>
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="fullGreenHouse"
                    checked={checkedBoxes.fullGreenHouse}
                    onChange={handleCheckboxChange}
                  />
                </div>
                

                <div className="flex flex-col items-center justify-center p-4">
                  <label className="text-lg flex font-bold items-center space-x-7 justify-between">
                    <span className='text-4xl text-gray-300'>Perfect Ramen</span>
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
                    <span className='text-4xl text-gray-300'>Brutalist Space</span>

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
                    <span className='text-4xl text-gray-300'>Full underpass</span>

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
                    <span className='text-4xl text-gray-300'>The Real hidden denza</span>

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
                    <span className='text-4xl text-gray-300'>Full Convenience Store</span>

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
                    <span className='text-4xl text-gray-300'>Water Elements</span>
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
                    <span className='text-4xl text-gray-300'>Cat's Dinner Bowl</span>

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
                    <span className='text-4xl text-gray-300'>Triple Pets</span>

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
                    <span className='text-4xl text-gray-300'>Public Transport</span>

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
                    <span className='text-4xl text-gray-300'>Tropical</span>

                    <input
                      type="checkbox"
                      name="tropical"
                      checked={checkedBoxes.tropical}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                </div>
              </div>

              // const fetchNFTs = async (owner) => {
//     try {
//       const data = await getAddressNFTs(owner, contractAddr);
  
//       if (data?.ownedNfts?.length) {
//         const NFTs = new Set();
  
//         data.ownedNfts.forEach((aBreeze) => {
//           NFTs.add(parseInt(aBreeze.id.tokenId, 16).toString());
//         });
  
//         return NFTs;
//       } else {
//         return null;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
