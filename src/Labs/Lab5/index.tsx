import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import ModuleObject from "./ModuleObject";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function Lab5() {
return (
  <div id="wd-lab5">
    <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${REMOTE_SERVER}/lab5/welcome`}
        className="list-group-item">
        Welcome
        </a><hr/>
        <EnvironmentVariables />
        <PathParameters />
        <QueryParameters />
        <WorkingWithObjects />
        <ModuleObject />
        <WorkingWithArrays />
        <HttpClient />
        <WorkingWithObjectsAsynchronously />
        <WorkingWithArraysAsynchronously />
        
        
      </div><hr/>
  </div>
);
}
