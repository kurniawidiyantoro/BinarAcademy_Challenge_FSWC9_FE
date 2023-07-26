const loginApi = (payload) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", payload.email);
    urlencoded.append("password", payload.password);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    return fetch(`${process.env.REACT_APP_BE_URL}/login`, requestOptions)
      .then(response => response)
      // .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

export { loginApi };