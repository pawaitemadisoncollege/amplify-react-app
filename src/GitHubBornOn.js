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
 
// Define a constant that is a function to call API
  const getGitHubInfoByUser = async () => { // an asynch lambda that goes to

    try {
      
      const data = await API.get('cryptoapi', `/born`)
      console.log(data)
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
            my github name goes here - my github created at goes here
        </h2>
    );

};
  

