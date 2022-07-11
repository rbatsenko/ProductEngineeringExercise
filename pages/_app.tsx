import { AppProps } from "next/app";
import { FunctionComponent } from "react";
import "antd/dist/antd.css";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
