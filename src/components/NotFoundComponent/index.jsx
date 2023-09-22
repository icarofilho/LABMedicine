import Image from "../../assets/notfound.svg";
import * as styles from "./styles";

export function NotFound() {
  return (
    <styles.Container>
      <img src={Image} alt="pagina nao encontrada" />
    </styles.Container>
  );
}
