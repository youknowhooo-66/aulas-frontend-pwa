import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="cabecalho_root">
      <img src="/icon/icon-512x512.png" height={40} />
      <Avatar nome="José Silva" />
    </header>
  );
}

export default Cabecalho;
