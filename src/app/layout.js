import { Roboto } from "next/font/google";

import Header from "../components/Header";

import './global.sass'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700']});

export const metadata = {
  title: "Sportify",
  description: "Sportify",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
