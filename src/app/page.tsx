"use client";
import { ConnectWallet } from "@thirdweb-dev/react";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

export default function Home() {
	return (
		<div>
			<ConnectButton
				client={createThirdwebClient({
					clientId: "545a4505872f4f3f18f1bade9dca58da",
				})}
			/>
			<ConnectWallet btnTitle="Connect v4" />
		</div>
	);
}
