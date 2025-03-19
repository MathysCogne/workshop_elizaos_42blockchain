import { elizaLogger } from "@elizaos/core";
import { dropsToXrp } from "xrpl";
import { xrplClient } from "./lib/xrplClient";

interface TransactionParams {
	address: string;
	transactionCount?: number;
	startDate?: string;
	endDate?: string;
}

interface Transaction {
	type: string;
	hash: string;
	date: string;
	amount: string;
	from: string;
	to: string;
	status: string;
}

export async function getTransactionService({ 
	address, 
	transactionCount,
	startDate,
	endDate
}: TransactionParams): Promise<Transaction[]> {
	try {
		const client = await xrplClient.getClient();
		elizaLogger.log("Using XRPL client");

		const response = await client.request({
			command: "account_tx",
			account: address,
			limit: transactionCount || 5,
			ledger_index_min: -1,
			ledger_index_max: -1
		});

		elizaLogger.log("Received response:", JSON.stringify(response, null, 2));

		const transactions = response.result.transactions
			.filter((tx: any) => {
				if (!startDate && !endDate) return true;
				
				const txDate = new Date(tx.tx_json.date * 1000); // Convert XRPL timestamp to JS Date
				const start = startDate ? new Date(startDate) : null;
				const end = endDate ? new Date(endDate) : null;
				
				if (start && end) {
					return txDate >= start && txDate <= end;
				} else if (start) {
					return txDate >= start;
				} else if (end) {
					return txDate <= end;
				}
				return true;
			})
			.map((tx: any) => {
				const amount = tx.meta.delivered_amount 
					? dropsToXrp(tx.meta.delivered_amount).toString()
					: tx.tx_json.DeliverMax 
						? dropsToXrp(tx.tx_json.DeliverMax).toString()
						: "0";

				return {
					type: tx.tx_json.TransactionType,
					hash: tx.hash,
					date: new Date(tx.tx_json.date * 1000).toISOString(),
					amount: amount,
					from: tx.tx_json.Account,
					to: tx.tx_json.Destination,
					status: tx.meta.TransactionResult
				};
			});

		elizaLogger.log("Processed transactions:", JSON.stringify(transactions, null, 2));
		return transactions;

	} catch (error) {
		elizaLogger.error("Error getting transactions:", error);
		throw error;
	}
}