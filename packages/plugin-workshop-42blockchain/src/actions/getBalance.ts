// 
// Documentation workshop sur les actions:
// https://github.com/MathysCogne/workshop_elizaos_42blockchain/blob/master/docs/implementation/action.md
// 

import {
	elizaLogger,
	Action,
	ActionExample,
	HandlerCallback,
	IAgentRuntime,
	Memory,
	State,
	ModelClass,
	generateText,
	composeContext,
	stringToUuid
} from "@elizaos/core";

export const getBalance: Action = {
	name: "GET_BALANCE",
	similes: [],
	description: "",
	validate: async (runtime: IAgentRuntime, message: Memory) => {
		// 
	},
	handler: async (
		runtime: IAgentRuntime, 
		message: Memory,
		state: State, 
		_options: { [key: string]: unknown },
		callback: HandlerCallback
	) => {
		//
	},
	// examples: getBalanceExamples as ActionExample[][],
} as Action;

export default getBalance;
