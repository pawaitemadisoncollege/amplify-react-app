// Import useState and useEffect hooks from React
import 
  React
  , { 
    useState
    , useEffect } 
    
  from 'react';
// Import the API category from AWS Amplify
import { API } from 'aws-amplify'  // swirly because not default export

export const GitHubBornOn = () => { 

  const [borninfo, updateBorninfo] = useState([]);
  
// Define a constant that is a function to call API
  const getGitHubInfoByUser = async () => { // an asynch lambda that goes to
    
    try {
      
      const data = await API.get('cryptoapi', `/born`)
      console.log(data)
      updateBorninfo(data.borninfo)
    }

    catch (err) {
      console.error(err);
    }
    
  };

  useEffect(
    () => {
      getGitHubInfoByUser();
    }
    , []
  );


    // start with placeholder txt first!
    return(
        <h2>
            The GitHub user {borninfo.login} was born on {borninfo.created_at}
        </h2>
    );

};
  

