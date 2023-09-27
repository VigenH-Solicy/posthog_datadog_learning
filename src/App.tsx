import React from "react";
import "./App.css";
import dd from 'datadog-metrics';
import { Datadog } from "./datadog/datadog";
import { datadogLogs } from "@datadog/browser-logs";
import posthog from 'posthog-js'
posthog.init('phc_8aMqMteFWz7ViAATrZdbjFGzawJI4nPwH1dtFJaEnCH', { api_host: 'https://app.posthog.com' })


function App() {
  dd.init({
    apiKey: 'c2d8073a4d51c1f55822e67952bbafd9',
    host:'http://localhost:3000/'  
  });
  posthog.capture('my event', { property: 'value' })
  
  datadogLogs.init({
    clientToken: "pub5c57fd6d50cd6dabbe7e2d44a606bd4c",
    site: "us5.datadoghq.com",
    forwardErrorsToLogs: true,
    sessionSampleRate: 0,
    
  }); 
  const handleRegister = () => {
    Datadog.addLog('registration click', { name: "buttonName", id: 123 })
    dd.increment('user.registration', 1);
    posthog.capture('User registration', { userEmail: 'vigenhovhannisian@gmail.com' })
  }

  const handleLogin = () => {
    Datadog.addLog('Login click', { name: "loginbutton", id: 124 })
    posthog.capture('User logged in', {username: 'vigen hovhannisyan'})
  }
  
  return <div className="App">
    <button onClick={handleRegister}>handle Register</button>
    <button onClick={handleLogin}>handle Login</button>
  </div>;
}

export default App;
