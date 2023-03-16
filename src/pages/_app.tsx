import { type AppType } from "next/dist/shared/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import "~/styles/globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jarkata",
});

const SustainologyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${font.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default SustainologyApp;
