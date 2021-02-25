// Import useState and useEffect hooks from React
import 
  React
  , { 
    useState
    , useEffect } 
    
  from 'react';

// Import the API category from AWS Amplify
import { API } from 'aws-amplify'  // swirly because not default export

import logo from './logo.svg';
import './App.css';

// project 3:
import { GitHubBornOn } from './GitHubBornOn';

const App = () => { 
  // Create coins variable and set to empty array
  const [coins, updateCoins] = useState([]);  // useState returns an array with two items. more on useState next week.

  // Define a constant that is a function to call API
  const fetchCoins = async () => { // an asynch lambda that goes to

    try {
      updateLoading(true);

      const { limit, start } = input
      const data = await API.get('cryptoapi', `/coins?limit=${limit}&start=${start}`)
      updateCoins(data.coins)  // updateCoins was given to us from useState (react stuff!)
      updateLoading(false);
    }

    catch (err) {
      console.error(err);
    }
    
  };
//rewrite without async await 
  // const fetchCoins =  () => { // an asynch lambda that goes to

  //     updateLoading(true);

  //     const { limit, start } = input
  //     API.get('cryptoapi', `/coins?limit=${limit}&start=${start}`) // js promise
  //       .then(response => updateCoins(response.coins))
  //       .catch(err => console.error(err))
  //     ;
  //     updateLoading(false);
    
    
  // };

  // Call fetchCoins function when component loads
  useEffect(
    () => {
      fetchCoins();
    }
    , []
  );

  // Create additional state to hold user input for limit and start properties
const [input, updateInput] = useState({ limit: 50, start: 0 })

// Create a new function to allow users to update the input values
const updateInputValues = (type, value) => {
  updateInput({ 
    ...input
    , [type]: value 
  });
};

const [loading, updateLoading] = useState(true);

  return (
    <>
    <div className="App">

      <input
        placeholder="Enter a starting index"
        onChange={e => updateInputValues('start', e.target.value)}
      />
      
      <input
        onChange={e => updateInputValues('limit', e.target.value)}
        placeholder="Enter a limit"
      />

      <button onClick={fetchCoins}>Fetch Coins</button>
      
    {loading && <h2>Loading....</h2>}

      {
        !loading && 
        coins.map(  // for each item... 
          (coin, index) => (
          <div 
            key={index}
          >
            <h2>
              {coin.name} - {coin.symbol}
            </h2>
            <h5>
              ${coin.price_usd}
            </h5>
          </div>
          )
        )
      }
    </div>
    <GitHubBornOn />  
    </>
  );
}

export default App
