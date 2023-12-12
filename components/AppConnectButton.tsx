import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function AppConnectButton() {
  return (
    <ConnectButton
      accountStatus={"address"}
      chainStatus={"icon"}
      showBalance={false}
      label="Connect"
    />
  );
}
