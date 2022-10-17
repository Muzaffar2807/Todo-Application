import { View, Text } from "react-native";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";

//styled components
import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
  SwipedTodoText,
  colors,
} from "../styles/appStyles";

import Ionicons from "@expo/vector-icons/Ionicons";

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
      renderHiddenItem={() => {
        return (
          <ListViewHidden>
            <HiddenButton>
              <Ionicons name="trash" size={25} color={colors.secondary} />
            </HiddenButton>
          </ListViewHidden>
        );
      }}
      leftOpenValue={80}
      previewRowKey={"1"}
      previewOpenValue={80}
      previewOpenDelay={3000}
      disableLeftSwipe={true}
      showsHorizontalScrollIndicator={false}
      styles={{
        flex: 1,
        paddingBottom: 30,
        marginBottom: 40,
      }}
    />
  );
};

export default Listitems;
