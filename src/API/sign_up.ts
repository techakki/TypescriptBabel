type signUpData = {
  email: string,
  password: string
};

export const signUp = (payload: signUpData): Promise<string> => {
  return fetch('http://sso-poc.eastus.cloudapp.azure.com/signup', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'appication/json',
    }),
    body: JSON.stringify({
      user: {
        email: payload.email,
        password: payload.password
      }
    })
  })
  .then(response => response.json())
  .then(responseJson => responseJson.token);
}

export const dummyRequest = (token: string): Promise<void> => {
  return fetch("http://40.114.83.154:3000/api/v1/add_params", {
      method: 'POST',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
      }),
      body: JSON.stringify({
          "param1" : 2,
          "param2" : 3
      })
  })
  .then(response => response.json())
  .then(responseJson => {
      if(responseJson.status === "success"){
          alert("Token validation Success")
      }else{
          alert("Token validation Failed")
      }
  });
}

export default {
  signUp,
  dummyRequest
};
