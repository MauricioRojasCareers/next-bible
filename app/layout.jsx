import Nav from "@components/Nav";
import "@styles/globals.css";

import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI Prompts",
};
const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <Provider>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
};

export default Rootlayout;
