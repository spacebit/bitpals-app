import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function AppConnectButton() {
  return (
    <ConnectButton
      accountStatus={"address"}
      chainStatus={"none"}
      showBalance={false}
      label="Connect"
    />
  );
}
