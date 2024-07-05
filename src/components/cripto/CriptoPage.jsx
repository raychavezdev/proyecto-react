import { useParams } from "react-router-dom";
import "./CriptoPage.css";
import usePetition from "../../hooks/usePetition";
import CriptoInfo from "./info/CriptoInfo";
import CriptoHistory from "./info/CriptoHistory";

const CriptoPage = () => {
  const params = useParams();

  const [cripto,loadingCripto] = usePetition(`assets/${params.id}`);
  const [history,loadingHistory] = usePetition(`assets/${params.id}/history?interval=d1`);


  if(loadingCripto || loadingHistory){
    return <span>Loading...</span>
  }

  return (
    <div className="cripto-container">
      {cripto && <CriptoInfo cripto={cripto} />}

      <div className="cripto-historial">
        <h2>Historial</h2>
        {history && <CriptoHistory history={history} />}
      </div>
    </div>
  );
};
export default CriptoPage;
