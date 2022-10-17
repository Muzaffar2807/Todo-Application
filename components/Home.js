import { View, Text } from 'react-native'
import React, { useState } from 'react';

//components
import Header from './Header';
import Listitems from './Listitems';

const Home = () => {

  //initial todos
  const initialTodos = [
    {
      title: "complete the project",
      date: "Mon, 08 Jan 2021 13:34:11 GMT",
      key: 1
    },
    {
      title: "complete Authentication",
      date: "Mon, 08 Jan 2021 13:34:11 GMT",
      key: 2
    },
    {
      title: "complete UI",
      date: "Mon, 08 Jan 2021 13:34:11 GMT",
      key: 3
    }
  ];

  const [todos, setTodos] = useState(initialTodos)

  return (
    <>
      <Header/>
      <Listitems 
        todos={todos}
        setTodos={setTodos }
      />
    </>
  )
}

export default Home