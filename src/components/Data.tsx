import React, {  useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Todolist from "./todoList/list";

 const Data: any = () => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsloading(true);
    axios
      .get("https://dummyjson.com/todos")
      .then((response) => {
        setData(response?.data?.todos);
      })
      .catch((e) => {
        console.log("eroorr is", error);
        setError("Error Occured");
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>{error}</div>;
  }
  
  if (!data.length) {
    return <div>No Data Found</div>;
  }
  

  return (
  <div className="todo-card">
    <Todolist todos={data}/>
  </div>
  )
};
export default Data;
