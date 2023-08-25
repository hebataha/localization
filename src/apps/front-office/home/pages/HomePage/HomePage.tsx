import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Translation from "apps/front-office/Translation/Translation";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="App">
        <Translation />
      </div>
    </>
  );
}
