import history from "../history";
import auth0 from "auth0-js";
// ...
export default class Auth {

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  // ...
  auth0 = new auth0.WebAuth({
    domain: "kdk745.auth0.com",
    clientID: "9zFlmffsOsgq3tNgnGHyhQ71HH68wdv0",
    redirectUri: "http://windy-border.surge.sh:80/callback",
    audience: "https://kdk745.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    return (dispatch) => {
      dispatch({
        type: "LOG_IN"
      });
      this.auth0.authorize();
    };
  }

  handleAuthentication() {
    const LOGGED_IN = "LOGGED_IN";
    return (dispatch) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          history.replace("/app");
          dispatch({
            type: LOGGED_IN
          });
        } else if (err) {
          dispatch({
            type: "LOGGED_IN_FAIL"
          });
          history.replace("/");
          console.log(err);
        }
      });
    };
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    // navigate to the home route
    history.replace("/app");
  }



  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    // navigate to the home route
    return (dispatch) => {
      dispatch({
        type: "LOG_OUT"
      });
      history.replace("/");
    };
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token"s expiry time
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    const check = new Date().getTime() < expiresAt;
    return (dispatch) => {
      if (check) {
        dispatch({
          type: "LOGGED_IN"
        });
        history.replace("/app");
        return true;
      }
      dispatch({
        type: "LOGGED_IN_FAIL"
      });
      history.replace("/");
    };
  }
}
