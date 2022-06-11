import {
  useAddress,
  useDisconnect,
  useMetamask,
  useTokenDrop,
} from "@thirdweb-dev/react";
//import TokenHolders from "../components/TokenHolders";
import Claim from "../components/Claim";
import Transfer from "../components/Transfer";
import truncateAddress from "../lib/truncateAddress";
import styles from "../styles/Home.module.css";

export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  const tokenDropContract = useTokenDrop(
    "0x8093c62Ae0702e6113E687DD5A6b9F915e857f15"
  );

  return (
    <div className={styles.container}>
      {address ? (
        <>
          <a onClick={disconnectWallet} className={styles.secondaryButton}>
            Disconnect Wallet
          </a>
          <p>Your address: {truncateAddress(address)}</p>

          <hr className={styles.divider} />

          <h2>Claim Token DAO ATERETA</h2>
          <h4>One ATERETA = One MATIC</h4>
          <Claim tokenDropContract={tokenDropContract} />

          <hr className={styles.divider} />

          <h2>Transfer Token DAO ATERETA</h2>
          <Transfer tokenDropContract={tokenDropContract} />
        </>
      ) : (
        <button className={styles.mainButton} onClick={connectWithMetamask}>
          Connect Wallet
        </button>
      )}

     
    </div>
  );
}
