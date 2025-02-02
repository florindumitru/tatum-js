export const abi = [
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'uint256[]',
                'name': '',
                'type': 'uint256[]'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155BatchReceived',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC1155Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'tokenAddress',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'contractType',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'recipient',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            }
        ],
        'name': 'transfer',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'stateMutability': 'payable',
        'type': 'receive'
    }
]
export const bytecode = '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b61078d8061007d6000396000f3fe6080604052600436106100595760003560e01c8063715018a6146100655780638da5cb5b1461007c578063bc197c81146100a7578063f23a6e61146100d4578063f2881e21146100f4578063f2fde38b1461010757610060565b3661006057005b600080fd5b34801561007157600080fd5b5061007a610127565b005b34801561008857600080fd5b506100916101b9565b60405161009e9190610604565b60405180910390f35b3480156100b357600080fd5b506100c76100c23660046104ae565b6101c8565b60405161009e9190610650565b3480156100e057600080fd5b506100c76100ef366004610554565b6101d9565b61007a6101023660046105b7565b6101ea565b34801561011357600080fd5b5061007a61012236600461048d565b6102c0565b61012f610380565b6001600160a01b03166101406101b9565b6001600160a01b03161461016f5760405162461bcd60e51b8152600401610166906106e2565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b63bc197c8160e01b95945050505050565b63f23a6e6160e01b95945050505050565b836002141561025c57604051637921219560e11b81526001600160a01b0386169063f242432a90610225903090879086908890600401610618565b600060405180830381600087803b15801561023f57600080fd5b505af1158015610253573d6000803e3d6000fd5b505050506102b9565b83600314156102a1576040516001600160a01b0384169083156108fc029084906000818181858888f1935050505015801561029b573d6000803e3d6000fd5b506102b9565b60405162461bcd60e51b815260040161016690610665565b5050505050565b6102c8610380565b6001600160a01b03166102d96101b9565b6001600160a01b0316146102ff5760405162461bcd60e51b8152600401610166906106e2565b6001600160a01b0381166103255760405162461bcd60e51b81526004016101669061069c565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b80356001600160a01b038116811461039b57600080fd5b919050565b600082601f8301126103b0578081fd5b8135602067ffffffffffffffff8211156103cc576103cc610741565b8082026103da828201610717565b8381528281019086840183880185018910156103f4578687fd5b8693505b858410156104165780358352600193909301929184019184016103f8565b50979650505050505050565b600082601f830112610432578081fd5b813567ffffffffffffffff81111561044c5761044c610741565b61045f601f8201601f1916602001610717565b818152846020838601011115610473578283fd5b816020850160208301379081016020019190915292915050565b60006020828403121561049e578081fd5b6104a782610384565b9392505050565b600080600080600060a086880312156104c5578081fd5b6104ce86610384565b94506104dc60208701610384565b9350604086013567ffffffffffffffff808211156104f8578283fd5b61050489838a016103a0565b94506060880135915080821115610519578283fd5b61052589838a016103a0565b9350608088013591508082111561053a578283fd5b5061054788828901610422565b9150509295509295909350565b600080600080600060a0868803121561056b578081fd5b61057486610384565b945061058260208701610384565b93506040860135925060608601359150608086013567ffffffffffffffff8111156105ab578182fd5b61054788828901610422565b600080600080600060a086880312156105ce578081fd5b6105d786610384565b9450602086013593506105ec60408701610384565b94979396509394606081013594506080013592915050565b6001600160a01b0391909116815260200190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260a06080820181905260009082015260c00190565b6001600160e01b031991909116815260200190565b60208082526019908201527f556e737570706f7274656420636f6e7472616374207479706500000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60405181810167ffffffffffffffff8111828210171561073957610739610741565b604052919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220ed8fe8ef0db4606eb4bfbc8e33a9328aa60486d0fe1b7428173fe7ac2e0a58f564736f6c63430008000033'
