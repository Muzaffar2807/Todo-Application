import { View, Text } from "react-native";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";

//styled components
import { ListView, TodoText, TodoDate, colors } from "../styles/appStyles";

const Listitems = ({ todos, setTodos }) => {
  return (
    <SwipeListView
      data={todos}
      style={{ margin: 8 }}
      renderItem={(data) => {
        return (
          <ListView>
            <>
              <TodoText>{data.item.title}</TodoText>
              <TodoDate>{data.item.date}</TodoDate>
            </>
          </ListView>
        );
      }}
    />
  );
};

export default Listitems;
