//IMPORTS DE REACT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import "semantic-ui-css/semantic.min.css";
//IMPORTS DEPENDENCIAS DE LA APP:
import { AuthProvider } from "@/context";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import "@/SCSS/global.scss";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
