"use client";
import { ThirdwebProvider } from "thirdweb/react";
import { QueryClient, QueryClientProvider } from "react-query-v5";
import { useState } from "react";

export function ThirdwebProviderV5({
	children,
}: {
	children: React.ReactNode;
}) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ThirdwebProvider>{children}</ThirdwebProvider>
		</QueryClientProvider>
	);
}
