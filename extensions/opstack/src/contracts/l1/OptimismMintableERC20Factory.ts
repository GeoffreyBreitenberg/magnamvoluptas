/// Generated file. Do not edit.

import { createScript } from '@tevm/contract'
import { type Hex } from '@tevm/utils'

/**
 * Creates a OptimismMintableERC20Factory contract instance from a chainId
 * Currently only supports chainId 10
 * @example
 * import { createOptimismMintableERC20Factory } from '@tevm/opstack'
 * const OptimismMintableERC20Factory = createOptimismMintableERC20Factory()
 */
export const createOptimismMintableERC20Factory = (chainId: 10 = 10) =>
	createScript({
		name: 'OptimismMintableERC20Factory',
		deployedBytecode: OptimismMintableERC20FactoryDeployedBytecode,
		bytecode: OptimismMintableERC20FactoryBytecode,
		humanReadableAbi: OptimismMintableERC20FactoryHumanReadableAbi,
	}).withAddress(OptimismMintableERC20FactoryAddresses[chainId])

export const OptimismMintableERC20FactoryAddresses = {
	'10': '0x75505a97BD334E7BD3C476893285569C4136Fa0F',
} as const

export const OptimismMintableERC20FactoryBytecode =
	'0x608060405234801561001057600080fd5b5061001b6000610020565b610169565b600054610100900460ff16158080156100405750600054600160ff909116105b8061006b57506100593061015a60201b61059d1760201c565b15801561006b575060005460ff166001145b6100d25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff1916600117905580156100f5576000805461ff0019166101001790555b600180546001600160a01b0319166001600160a01b0384161790558015610156576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6001600160a01b03163b151590565b6120e5806101786000396000f3fe60806040523480156200001157600080fd5b5060043610620000875760003560e01c8063c4d66de81162000062578063c4d66de81462000135578063ce5ac90f146200014e578063e78cea921462000165578063ee9a31a2146200018657600080fd5b806354fd4d50146200008c578063896f93d114620000e15780638cf0629c146200011e575b600080fd5b620000c96040518060400160405280600581526020017f312e392e3000000000000000000000000000000000000000000000000000000081525081565b604051620000d8919062000635565b60405180910390f35b620000f8620000f23660046200075d565b620001a5565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001620000d8565b620000f86200012f366004620007da565b620001bc565b6200014c6200014636600462000871565b620003ba565b005b620000f86200015f3660046200075d565b6200058c565b600154620000f89073ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff16620000f8565b6000620001b48484846200058c565b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff851662000267576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603f60248201527f4f7074696d69736d4d696e7461626c654552433230466163746f72793a206d7560448201527f73742070726f766964652072656d6f746520746f6b656e20616464726573730060648201526084015b60405180910390fd5b6000858585856040516020016200028294939291906200088f565b604051602081830303815290604052805190602001209050600081600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1688888888604051620002d290620005b9565b620002e2959493929190620008e9565b8190604051809103906000f590508015801562000303573d6000803e3d6000fd5b5090508073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fceeb8e7d520d7f3b65fc11a262b91066940193b05d4f93df07cfdced0eb551cf60405160405180910390a360405133815273ffffffffffffffffffffffffffffffffffffffff80891691908316907f52fe89dd5930f343d25650b62fd367bae47088bcddffd2a88350a6ecdd620cdb9060200160405180910390a39695505050505050565b600054610100900460ff1615808015620003db5750600054600160ff909116105b80620003f75750303b158015620003f7575060005460ff166001145b62000485576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016200025e565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015620004e457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617905580156200058857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6000620001b48484846012620001bc565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b61178a806200094f83390190565b6000815180845260005b81811015620005ef57602081850181015186830182015201620005d1565b8181111562000602576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006200064a6020830184620005c7565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146200067657600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112620006bc57600080fd5b813567ffffffffffffffff80821115620006da57620006da6200067b565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156200072357620007236200067b565b816040528381528660208588010111156200073d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156200077357600080fd5b6200077e8462000651565b9250602084013567ffffffffffffffff808211156200079c57600080fd5b620007aa87838801620006aa565b93506040860135915080821115620007c157600080fd5b50620007d086828701620006aa565b9150509250925092565b60008060008060808587031215620007f157600080fd5b620007fc8562000651565b9350602085013567ffffffffffffffff808211156200081a57600080fd5b6200082888838901620006aa565b945060408701359150808211156200083f57600080fd5b506200084e87828801620006aa565b925050606085013560ff811681146200086657600080fd5b939692955090935050565b6000602082840312156200088457600080fd5b6200064a8262000651565b73ffffffffffffffffffffffffffffffffffffffff85168152608060208201526000620008c06080830186620005c7565b8281036040840152620008d48186620005c7565b91505060ff8316606083015295945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a060408301526200092460a0830186620005c7565b8281036060840152620009388186620005c7565b91505060ff83166080830152969550505050505056fe60e06040523480156200001157600080fd5b506040516200178a3803806200178a833981016040819052620000349162000163565b828260036200004483826200029e565b5060046200005382826200029e565b5050506001600160a01b039384166080529390921660a052505060ff1660c0526200036a565b80516001600160a01b03811681146200009157600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000be57600080fd5b81516001600160401b0380821115620000db57620000db62000096565b604051601f8301601f19908116603f0116810190828211818310171562000106576200010662000096565b816040528381526020925086838588010111156200012357600080fd5b600091505b8382101562000147578582018301518183018401529082019062000128565b83821115620001595760008385830101525b9695505050505050565b600080600080600060a086880312156200017c57600080fd5b620001878662000079565b9450620001976020870162000079565b60408701519094506001600160401b0380821115620001b557600080fd5b620001c389838a01620000ac565b94506060880151915080821115620001da57600080fd5b50620001e988828901620000ac565b925050608086015160ff811681146200020157600080fd5b809150509295509295909350565b600181811c908216806200022457607f821691505b6020821081036200024557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200029957600081815260208120601f850160051c81016020861015620002745750805b601f850160051c820191505b81811015620002955782815560010162000280565b5050505b505050565b81516001600160401b03811115620002ba57620002ba62000096565b620002d281620002cb84546200020f565b846200024b565b602080601f8311600181146200030a5760008415620002f15750858301515b600019600386901b1c1916600185901b17855562000295565b600085815260208120601f198616915b828110156200033b578886015182559484019460019091019084016200031a565b50858210156200035a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c0516113d4620003b6600039600061024401526000818161034b015281816103e001528181610625015261075c0152600081816101a9015261037101526113d46000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806370a08231116100d8578063ae1f6aaf1161008c578063dd62ed3e11610066578063dd62ed3e14610395578063e78cea9214610349578063ee9a31a2146103db57600080fd5b8063ae1f6aaf14610349578063c01e1bd61461036f578063d6c0b2c41461036f57600080fd5b80639dc29fac116100bd5780639dc29fac14610310578063a457c2d714610323578063a9059cbb1461033657600080fd5b806370a08231146102d257806395d89b411461030857600080fd5b806323b872dd1161012f5780633950935111610114578063395093511461026e57806340c10f191461028157806354fd4d501461029657600080fd5b806323b872dd1461022a578063313ce5671461023d57600080fd5b806306fdde031161016057806306fdde03146101f0578063095ea7b31461020557806318160ddd1461021857600080fd5b806301ffc9a71461017c578063033964be146101a4575b600080fd5b61018f61018a36600461117d565b610402565b60405190151581526020015b60405180910390f35b6101cb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161019b565b6101f86104f3565b60405161019b91906111c6565b61018f610213366004611262565b610585565b6002545b60405190815260200161019b565b61018f61023836600461128c565b61059d565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161019b565b61018f61027c366004611262565b6105c1565b61029461028f366004611262565b61060d565b005b6101f86040518060400160405280600581526020017f312e332e3000000000000000000000000000000000000000000000000000000081525081565b61021c6102e03660046112c8565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6101f8610735565b61029461031e366004611262565b610744565b61018f610331366004611262565b61085b565b61018f610344366004611262565b61092c565b7f00000000000000000000000000000000000000000000000000000000000000006101cb565b7f00000000000000000000000000000000000000000000000000000000000000006101cb565b61021c6103a33660046112e3565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6101cb7f000000000000000000000000000000000000000000000000000000000000000081565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007f1d1d8b63000000000000000000000000000000000000000000000000000000007fec4fc8e3000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000085168314806104bb57507fffffffff00000000000000000000000000000000000000000000000000000000858116908316145b806104ea57507fffffffff00000000000000000000000000000000000000000000000000000000858116908216145b95945050505050565b60606003805461050290611316565b80601f016020809104026020016040519081016040528092919081815260200182805461052e90611316565b801561057b5780601f106105505761010080835404028352916020019161057b565b820191906000526020600020905b81548152906001019060200180831161055e57829003601f168201915b5050505050905090565b60003361059381858561093a565b5060019392505050565b6000336105ab858285610aee565b6105b6858585610bc5565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906105939082908690610608908790611398565b61093a565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146106d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f4f7074696d69736d4d696e7461626c6545524332303a206f6e6c79206272696460448201527f67652063616e206d696e7420616e64206275726e00000000000000000000000060648201526084015b60405180910390fd5b6106e18282610e78565b8173ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d41213968858260405161072991815260200190565b60405180910390a25050565b60606004805461050290611316565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f4f7074696d69736d4d696e7461626c6545524332303a206f6e6c79206272696460448201527f67652063616e206d696e7420616e64206275726e00000000000000000000000060648201526084016106ce565b6108138282610f98565b8173ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca58260405161072991815260200190565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091908381101561091f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016106ce565b6105b6828686840361093a565b600033610593818585610bc5565b73ffffffffffffffffffffffffffffffffffffffff83166109dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff8216610a7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610bbf5781811015610bb2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106ce565b610bbf848484840361093a565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c68576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff8216610d0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610dc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610e05908490611398565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e6b91815260200190565b60405180910390a3610bbf565b73ffffffffffffffffffffffffffffffffffffffff8216610ef5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106ce565b8060026000828254610f079190611398565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610f41908490611398565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821661103b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054818110156110f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040812083830390556002805484929061112d9084906113b0565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610ae1565b60006020828403121561118f57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146111bf57600080fd5b9392505050565b600060208083528351808285015260005b818110156111f3578581018301518582016040015282016111d7565b81811115611205576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461125d57600080fd5b919050565b6000806040838503121561127557600080fd5b61127e83611239565b946020939093013593505050565b6000806000606084860312156112a157600080fd5b6112aa84611239565b92506112b860208501611239565b9150604084013590509250925092565b6000602082840312156112da57600080fd5b6111bf82611239565b600080604083850312156112f657600080fd5b6112ff83611239565b915061130d60208401611239565b90509250929050565b600181811c9082168061132a57607f821691505b602082108103611363577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156113ab576113ab611369565b500190565b6000828210156113c2576113c2611369565b50039056fea164736f6c634300080f000aa164736f6c634300080f000a' as Hex

export const OptimismMintableERC20FactoryDeployedBytecode =
	'0x60806040523480156200001157600080fd5b5060043610620000875760003560e01c8063c4d66de81162000062578063c4d66de81462000135578063ce5ac90f146200014e578063e78cea921462000165578063ee9a31a2146200018657600080fd5b806354fd4d50146200008c578063896f93d114620000e15780638cf0629c146200011e575b600080fd5b620000c96040518060400160405280600581526020017f312e392e3000000000000000000000000000000000000000000000000000000081525081565b604051620000d8919062000635565b60405180910390f35b620000f8620000f23660046200075d565b620001a5565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001620000d8565b620000f86200012f366004620007da565b620001bc565b6200014c6200014636600462000871565b620003ba565b005b620000f86200015f3660046200075d565b6200058c565b600154620000f89073ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff16620000f8565b6000620001b48484846200058c565b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff851662000267576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603f60248201527f4f7074696d69736d4d696e7461626c654552433230466163746f72793a206d7560448201527f73742070726f766964652072656d6f746520746f6b656e20616464726573730060648201526084015b60405180910390fd5b6000858585856040516020016200028294939291906200088f565b604051602081830303815290604052805190602001209050600081600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1688888888604051620002d290620005b9565b620002e2959493929190620008e9565b8190604051809103906000f590508015801562000303573d6000803e3d6000fd5b5090508073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fceeb8e7d520d7f3b65fc11a262b91066940193b05d4f93df07cfdced0eb551cf60405160405180910390a360405133815273ffffffffffffffffffffffffffffffffffffffff80891691908316907f52fe89dd5930f343d25650b62fd367bae47088bcddffd2a88350a6ecdd620cdb9060200160405180910390a39695505050505050565b600054610100900460ff1615808015620003db5750600054600160ff909116105b80620003f75750303b158015620003f7575060005460ff166001145b62000485576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016200025e565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015620004e457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617905580156200058857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6000620001b48484846012620001bc565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b61178a806200094f83390190565b6000815180845260005b81811015620005ef57602081850181015186830182015201620005d1565b8181111562000602576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006200064a6020830184620005c7565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146200067657600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112620006bc57600080fd5b813567ffffffffffffffff80821115620006da57620006da6200067b565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156200072357620007236200067b565b816040528381528660208588010111156200073d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156200077357600080fd5b6200077e8462000651565b9250602084013567ffffffffffffffff808211156200079c57600080fd5b620007aa87838801620006aa565b93506040860135915080821115620007c157600080fd5b50620007d086828701620006aa565b9150509250925092565b60008060008060808587031215620007f157600080fd5b620007fc8562000651565b9350602085013567ffffffffffffffff808211156200081a57600080fd5b6200082888838901620006aa565b945060408701359150808211156200083f57600080fd5b506200084e87828801620006aa565b925050606085013560ff811681146200086657600080fd5b939692955090935050565b6000602082840312156200088457600080fd5b6200064a8262000651565b73ffffffffffffffffffffffffffffffffffffffff85168152608060208201526000620008c06080830186620005c7565b8281036040840152620008d48186620005c7565b91505060ff8316606083015295945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a060408301526200092460a0830186620005c7565b8281036060840152620009388186620005c7565b91505060ff83166080830152969550505050505056fe60e06040523480156200001157600080fd5b506040516200178a3803806200178a833981016040819052620000349162000163565b828260036200004483826200029e565b5060046200005382826200029e565b5050506001600160a01b039384166080529390921660a052505060ff1660c0526200036a565b80516001600160a01b03811681146200009157600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000be57600080fd5b81516001600160401b0380821115620000db57620000db62000096565b604051601f8301601f19908116603f0116810190828211818310171562000106576200010662000096565b816040528381526020925086838588010111156200012357600080fd5b600091505b8382101562000147578582018301518183018401529082019062000128565b83821115620001595760008385830101525b9695505050505050565b600080600080600060a086880312156200017c57600080fd5b620001878662000079565b9450620001976020870162000079565b60408701519094506001600160401b0380821115620001b557600080fd5b620001c389838a01620000ac565b94506060880151915080821115620001da57600080fd5b50620001e988828901620000ac565b925050608086015160ff811681146200020157600080fd5b809150509295509295909350565b600181811c908216806200022457607f821691505b6020821081036200024557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200029957600081815260208120601f850160051c81016020861015620002745750805b601f850160051c820191505b81811015620002955782815560010162000280565b5050505b505050565b81516001600160401b03811115620002ba57620002ba62000096565b620002d281620002cb84546200020f565b846200024b565b602080601f8311600181146200030a5760008415620002f15750858301515b600019600386901b1c1916600185901b17855562000295565b600085815260208120601f198616915b828110156200033b578886015182559484019460019091019084016200031a565b50858210156200035a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c0516113d4620003b6600039600061024401526000818161034b015281816103e001528181610625015261075c0152600081816101a9015261037101526113d46000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806370a08231116100d8578063ae1f6aaf1161008c578063dd62ed3e11610066578063dd62ed3e14610395578063e78cea9214610349578063ee9a31a2146103db57600080fd5b8063ae1f6aaf14610349578063c01e1bd61461036f578063d6c0b2c41461036f57600080fd5b80639dc29fac116100bd5780639dc29fac14610310578063a457c2d714610323578063a9059cbb1461033657600080fd5b806370a08231146102d257806395d89b411461030857600080fd5b806323b872dd1161012f5780633950935111610114578063395093511461026e57806340c10f191461028157806354fd4d501461029657600080fd5b806323b872dd1461022a578063313ce5671461023d57600080fd5b806306fdde031161016057806306fdde03146101f0578063095ea7b31461020557806318160ddd1461021857600080fd5b806301ffc9a71461017c578063033964be146101a4575b600080fd5b61018f61018a36600461117d565b610402565b60405190151581526020015b60405180910390f35b6101cb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161019b565b6101f86104f3565b60405161019b91906111c6565b61018f610213366004611262565b610585565b6002545b60405190815260200161019b565b61018f61023836600461128c565b61059d565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161019b565b61018f61027c366004611262565b6105c1565b61029461028f366004611262565b61060d565b005b6101f86040518060400160405280600581526020017f312e332e3000000000000000000000000000000000000000000000000000000081525081565b61021c6102e03660046112c8565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6101f8610735565b61029461031e366004611262565b610744565b61018f610331366004611262565b61085b565b61018f610344366004611262565b61092c565b7f00000000000000000000000000000000000000000000000000000000000000006101cb565b7f00000000000000000000000000000000000000000000000000000000000000006101cb565b61021c6103a33660046112e3565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6101cb7f000000000000000000000000000000000000000000000000000000000000000081565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007f1d1d8b63000000000000000000000000000000000000000000000000000000007fec4fc8e3000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000085168314806104bb57507fffffffff00000000000000000000000000000000000000000000000000000000858116908316145b806104ea57507fffffffff00000000000000000000000000000000000000000000000000000000858116908216145b95945050505050565b60606003805461050290611316565b80601f016020809104026020016040519081016040528092919081815260200182805461052e90611316565b801561057b5780601f106105505761010080835404028352916020019161057b565b820191906000526020600020905b81548152906001019060200180831161055e57829003601f168201915b5050505050905090565b60003361059381858561093a565b5060019392505050565b6000336105ab858285610aee565b6105b6858585610bc5565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906105939082908690610608908790611398565b61093a565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146106d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f4f7074696d69736d4d696e7461626c6545524332303a206f6e6c79206272696460448201527f67652063616e206d696e7420616e64206275726e00000000000000000000000060648201526084015b60405180910390fd5b6106e18282610e78565b8173ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d41213968858260405161072991815260200190565b60405180910390a25050565b60606004805461050290611316565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610809576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f4f7074696d69736d4d696e7461626c6545524332303a206f6e6c79206272696460448201527f67652063616e206d696e7420616e64206275726e00000000000000000000000060648201526084016106ce565b6108138282610f98565b8173ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca58260405161072991815260200190565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091908381101561091f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016106ce565b6105b6828686840361093a565b600033610593818585610bc5565b73ffffffffffffffffffffffffffffffffffffffff83166109dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff8216610a7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610bbf5781811015610bb2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106ce565b610bbf848484840361093a565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c68576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff8216610d0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610dc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610e05908490611398565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e6b91815260200190565b60405180910390a3610bbf565b73ffffffffffffffffffffffffffffffffffffffff8216610ef5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106ce565b8060026000828254610f079190611398565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610f41908490611398565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821661103b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054818110156110f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016106ce565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040812083830390556002805484929061112d9084906113b0565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610ae1565b60006020828403121561118f57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146111bf57600080fd5b9392505050565b600060208083528351808285015260005b818110156111f3578581018301518582016040015282016111d7565b81811115611205576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461125d57600080fd5b919050565b6000806040838503121561127557600080fd5b61127e83611239565b946020939093013593505050565b6000806000606084860312156112a157600080fd5b6112aa84611239565b92506112b860208501611239565b9150604084013590509250925092565b6000602082840312156112da57600080fd5b6111bf82611239565b600080604083850312156112f657600080fd5b6112ff83611239565b915061130d60208401611239565b90509250929050565b600181811c9082168061132a57607f821691505b602082108103611363577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156113ab576113ab611369565b500190565b6000828210156113c2576113c2611369565b50039056fea164736f6c634300080f000aa164736f6c634300080f000a' as Hex

export const OptimismMintableERC20FactoryHumanReadableAbi = [
	'constructor()',
	'function BRIDGE() view returns (address)',
	'function bridge() view returns (address)',
	'function createOptimismMintableERC20(address _remoteToken, string _name, string _symbol) returns (address)',
	'function createOptimismMintableERC20WithDecimals(address _remoteToken, string _name, string _symbol, uint8 _decimals) returns (address)',
	'function createStandardL2Token(address _remoteToken, string _name, string _symbol) returns (address)',
	'function initialize(address _bridge)',
	'function version() view returns (string)',
	'event Initialized(uint8 version)',
	'event OptimismMintableERC20Created(address indexed localToken, address indexed remoteToken, address deployer)',
	'event StandardL2TokenCreated(address indexed remoteToken, address indexed localToken)',
] as const

export const OptimismMintableERC20FactoryAbi = [
	{
		type: 'constructor',
		inputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'BRIDGE',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'bridge',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'createOptimismMintableERC20',
		inputs: [
			{
				name: '_remoteToken',
				type: 'address',
				internalType: 'address',
			},
			{
				name: '_name',
				type: 'string',
				internalType: 'string',
			},
			{
				name: '_symbol',
				type: 'string',
				internalType: 'string',
			},
		],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'createOptimismMintableERC20WithDecimals',
		inputs: [
			{
				name: '_remoteToken',
				type: 'address',
				internalType: 'address',
			},
			{
				name: '_name',
				type: 'string',
				internalType: 'string',
			},
			{
				name: '_symbol',
				type: 'string',
				internalType: 'string',
			},
			{
				name: '_decimals',
				type: 'uint8',
				internalType: 'uint8',
			},
		],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'createStandardL2Token',
		inputs: [
			{
				name: '_remoteToken',
				type: 'address',
				internalType: 'address',
			},
			{
				name: '_name',
				type: 'string',
				internalType: 'string',
			},
			{
				name: '_symbol',
				type: 'string',
				internalType: 'string',
			},
		],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'initialize',
		inputs: [
			{
				name: '_bridge',
				type: 'address',
				internalType: 'address',
			},
		],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'function',
		name: 'version',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'string',
				internalType: 'string',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'event',
		name: 'Initialized',
		inputs: [
			{
				name: 'version',
				type: 'uint8',
				indexed: false,
				internalType: 'uint8',
			},
		],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'OptimismMintableERC20Created',
		inputs: [
			{
				name: 'localToken',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'remoteToken',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'deployer',
				type: 'address',
				indexed: false,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'StandardL2TokenCreated',
		inputs: [
			{
				name: 'remoteToken',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
			{
				name: 'localToken',
				type: 'address',
				indexed: true,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
] as const