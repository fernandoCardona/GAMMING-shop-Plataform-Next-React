//IMPORTS DE REACT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import "semantic-ui-css/semantic.min.css";
//IMPORTS DEPENDENCIAS DE LA APP:
import { AuthProvider, CartProvider } from "@/context";
//IMPORTS COMPONENTS DE LA APP:
//IMPORTS Styles/Images DE LA APP:
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/scss/global.scss";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <AuthProvider>
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    </AuthProvider>
  );
}
