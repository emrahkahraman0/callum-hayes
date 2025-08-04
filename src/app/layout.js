import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/fontawesome/css/all.min.css";
import "@/styles/grid.css";
import "@/styles/style.css";

export const metadata = {
  title: "CALLUM HAYES",
  description: "Portfolio Nextjs",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
