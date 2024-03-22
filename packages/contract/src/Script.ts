import type { EventActionCreator } from './event/EventActionCreator.js'
import type { ReadActionCreator } from './read/ReadActionCreator.js'
import type { WriteActionCreator } from './write/WriteActionCreator.js'
import type { Address, Hex, ParseAbi } from '@tevm/utils'

/**
 * An action creator for `Tevm.script`, `Tevm.contract` and more
 * representing a solidity contract bytecode and ABI.
 * Scripts are akin to Foundry scripts you can run in the Tevm vm.
 *
 * Script is also is the type solidity contract imports are turned into.
 *
 * Scripts and contracts generate actions that can be dispatched to tevm methods
 * such as `contract` and `script`
 * @example
 * ```typescript
 * tevm.script(
 * -  { deployedBytecode: '0x60242....', abi: [...], args: ['0x1234...'], functionName: 'balanceOf' },
 * +  MyScript.withAddress('0x420...').read.balanceOf('0x1234...'),
 * )
 * ```
 *
 * A script can be made via the `createScript` function
 * @example
 * ```typescript
 * import { type Contract, createScript} from 'tevm/contract'
 *
 * const contract: Contract = createScript({
 *   name: 'MyScript',
 *  	abi: [
 *  		...
 *  	],
 * })
 * ```
 * These scripts can be automatically generated by using [@tevm/bundler](https://todo.todo)
 * and then importing it. The Tevm bundler will automatically resolve your solidity imports into
 * tevm contract instances
 * @example
 * ```typescript
 * import { MyScript } from './MyScript.sol'
 *
 * console.log(MyScript.humanReadableAbi)
 * ```
 * Address can be added to a contract using the `withAddress` method
 * @example
 * ```typescript
 * import { MyScript } from './MyScript.sol'
 *
 * const MyScript = MyScript.withAddress('0x420...')
 * ```
 * Scripts can also be used with other libraries such as Viem and ethers.
 * @example
 * ```typescript
 * import { MyScript } from './MyScript.sol'
 * import { createPublicClient } from 'viem'
 *
 * // see viem docs
 * const client = createPublicClient({...})
 *
 * const result = await client.readContract(
 *   MyScript.withAddress('0x420...').read.balanceOf('0x1234...'),
 * )
 */
export type Script<
	TName extends string,
	THumanReadableAbi extends ReadonlyArray<string>,
> = {
	/**
	 * The human readable abi of the contract
	 * @example
	 * ```typescript
	 * import { MyScript } from './MyScript.sol'
	 * console.log(MyScript.humanReadableAbi)
	 * // ['function balanceOf(address): uint256', ...]
	 * ```
	 */
	humanReadableAbi: THumanReadableAbi
	/**
	 * The json abi of the contract
	 * @example
	 * ```typescript
	 * import { MyScript } from './MyScript.sol'
	 * console.log(MyScript.abi) // [{name: 'balanceOf', inputs: [...], outputs: [...], ...}]
	 * ```
	 */
	abi: ParseAbi<THumanReadableAbi>
	/**
	 * The contract bytecode. This can be used for deploying the contract
	 * bytecode is different from deployedBytecode in that the bytecode
	 * includes the code to deploy the contract whereas the deployed
	 * bytecode is the code that is deployed
	 */
	bytecode: Hex
	/**
	 * The deployed contract bytecode. TThis can be used with the `script` tevm method
	 * to execute arbitrary solidity code that isn't necessarily deployed to the chain
	 * deployedBytecode is different from bytecode in that the bytecode includes the code
	 * to deploy the contract whereas the deployed bytecode is the code that is deployed
	 */
	deployedBytecode: Hex
	/**
	 * The name of the contract. If imported this will match the name of the contract import
	 */
	name: TName
	/**
	 * Action creators for events. Can be used to create event filters in a typesafe way
	 * @example
	 * ```typescript
	 * tevm.eth.getLog(
	 *   MyScript.withAddress('0x420...').events.Transfer({ from: '0x1234...' }),
	 * )
	 * ===
	 */
	events: EventActionCreator<THumanReadableAbi, Hex, Hex, undefined>
	/**
	 * Action creators for contract view and pure functions
	 * @example
	 * ```typescript
	 * tevm.contract(
	 *   MyScript.withAddress('0x420...').read.balanceOf('0x1234...'),
	 *)
	 * ```
	 */
	read: ReadActionCreator<THumanReadableAbi, Hex, Hex, undefined>
	/**
	 * Action creators for contract payable and nonpayable functions
	 * @example
	 * ```typescript
	 * tevm.contract(
	 *   MyScript.withAddress('0x420...').read.balanceOf('0x1234...'),
	 * )
	 * ```
	 */
	write: WriteActionCreator<THumanReadableAbi, Hex, Hex, undefined>
	/**
	 * Adds an address to the contract. All action creators will return
	 * the address property if added.
	 * @example
	 * ```typescript
	 * import { MyScript } from './MyScript.sol'
	 * const MyScript = MyScript.withAddress('0x420...')
	 * ```
	 * Note this is not necessary with `tevm.script` method that doesn't require
	 * a contract address to execute
	 */
	withAddress: <TAddress extends Address>(address: TAddress) => Omit<
		Script<TName, THumanReadableAbi>,
		'events' | 'read' | 'write' | 'address'
	> & {
		/**
		 * The deployed contract address
		 */
		address: TAddress
		/**
		 * Action creators for events. Can be used to create event filters in a typesafe way
		 * @example
		 * ```typescript
		 * tevm.eth.getLog(
		 *   MyScript.withAddress('0x420...').events.Transfer({ from: '0x1234...' }),
		 * )
		 * ===
		 */
		events: EventActionCreator<THumanReadableAbi, Hex, Hex, TAddress>
		/**
		 * Action creators for contract view and pure functions
		 * @example
		 * ```typescript
		 * tevm.contract(
		 *   MyScript.withAddress('0x420...').read.balanceOf('0x1234...'),
		 *)
		 * ```
		 */
		read: ReadActionCreator<THumanReadableAbi, Hex, Hex, TAddress>
		/**
		 * Action creators for contract payable and nonpayable functions
		 * @example
		 * ```typescript
		 * tevm.contract(
		 *   MyScript.withAddress('0x420...').read.balanceOf('0x1234...'),
		 * )
		 * ```
		 */
		write: WriteActionCreator<THumanReadableAbi, Hex, Hex, TAddress>
	}
}
