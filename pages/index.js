import WertModule from "@wert-io/module-react-component";
import { signSmartContractData } from "@wert-io/widget-sc-signer";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/Home.module.css";

function Home() {
  const privateKey =
    "0x57466afb5491ee372b3b30d82ef7e7a0583c9e36aef0f02435bd164fe172b1d3";

  // const signedData = signSmartContractData(
  //   {
  //     address: "0x026592f357A70281C593bf0421f276A2C9b95F7D",
  //     commodity: "MATIC",
  //     commodity_amount: "0.3",
  //     pk_id: "key1",
  //     sc_address: "0xC545CEae428785a5AE77bfF262600deC7F7d76d2",
  //     sc_id: uuidv4(), // must be unique for any request
  //     sc_input_data:
  //       "0x9dae76ea000000000000000000000000000000000000000000000000000000000000003700000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
  //   },
  //   privateKey
  // );
  const options = {
    partner_id: "01GEKFE7W3NK8Q85YHSWTMM4EV",
    container_id: "wert-widget",
    origin: "https://sandbox.wert.io",
    theme: "white",
    commodities: "MATIC:Polygon",
    lang: "en",
    width: 400,
    height: 600,
    privateKey,
    address: "0x026592f357A70281C593bf0421f276A2C9b95F7D",
    commodity: "MATIC",
    commodity_amount: "0.3",
    pk_id: "key1",
    sc_address: "0xC545CEae428785a5AE77bfF262600deC7F7d76d2",
    sc_id: uuidv4(), // must be unique for any request
    sc_input_data:
      "0x9dae76ea000000000000000000000000000000000000000000000000000000000000003700000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001",
  };
  return (
    <div className={styles.container}>
      <h1>hELLO</h1>
      <WertModule options={options} />
    </div>
  );
}

export default Home;
