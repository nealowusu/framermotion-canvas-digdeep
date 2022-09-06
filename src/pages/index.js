import React from "react";
import Layout from "../components/layout";

//components
import HomeBanner from "../components/homePage/homeBanner";

// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext";

const IndexPage = (props) => {
  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType });
  };

  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
    </Layout>
  );
};

export default IndexPage;
