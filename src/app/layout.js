import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Image from "next/image";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Vision Company - Divic",
  description: "Unlike any company you hired before",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Image
          width={1428}
          height={892}
          className="one"
          alt="one"
          src="/assests/hero-addon/1.png"
        />
        <Image
          width={2400}
          height={2821}
          className="lights"
          alt="lights"
          src="/assests/hero-addon/Lights.png"
        />
        <Image
          width={1634}
          height={1240}
          className="Galaxy"
          alt="Galaxy"
          src="/assests/hero-addon/Galaxy.png"
        />
        <Image
          width={520}
          height={383}
          className="vector5"
          alt="vector5"
          src="/assests/hero-addon/Vector 5.png"
        />
        <Image
          width={1420}
          height={1219.62646484375}
          className="vector4"
          alt="vector4"
          src="/assests/hero-addon/Vector 4.png"
        />
        <Image
          width={819.5}
          height={858}
          className="intersect"
          alt="intersect"
          src="/assests/hero-addon/Intersect.png"
        />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
