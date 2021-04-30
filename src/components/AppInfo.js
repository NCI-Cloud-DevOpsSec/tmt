import React, { useState, useEffect } from "react";

export default function AppInfo(props) {
  const [app, setAppInfo] = useState(null);

  async function fetchAppData(id) {
    console.log("App Info", id)
    const response = id
    setAppInfo(await response);
  }

  useEffect(() => {
    fetchAppData(props.id);
  }, [props.id]);

  if (!app) {
    return "App Loading...";
  }

  return (
    <p style={{color:'white'}}>
      <b>{app.name}</b>
      <strong> (v{app.version})</strong>
      <br />
    </p>
  );
}