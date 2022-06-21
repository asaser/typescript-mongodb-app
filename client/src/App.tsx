import {FC} from "react"

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getUsers } from "./actions/users";

const App:FC = () =>  {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getUsers())
  }, [dispatch])
  
  return (
    <div className="App">
      I am working
      <br />
    </div>
  );
}

export default App;
