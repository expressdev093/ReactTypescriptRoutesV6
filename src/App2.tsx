import "./styles.css";

import {
  Link,
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import { createBrowserHistory } from "history";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

function Index() {
  return <div>Index</div>;
}

function Other() {
  return (
    <div>
      Other Route
      <ul>
        <li>
          <Link to="nested">Open Other Nested</Link>
        </li>
      </ul>
      <Routes>
        {/* Why does not render? */}
        <Route path="nested" element={<div>Nested!</div>} />
      </Routes>
    </div>
  );
}

export default function App2() {
  const history = createBrowserHistory();

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/other/*" element={<Other />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}
