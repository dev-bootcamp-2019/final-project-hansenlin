## Avoiding Common Attacks

### Restricting Access

Require statements are used to allow only specific addresses to access these contracts.

### DoS with Block Gas Limit

The number iterations in looping operations are hard coded to prevent reaching block gas limit.

### Reentrancy Attacks

Delegate call is used to protect against reentrancy.

### Tx Origin Attacks

msg.sender is used instead of tx.origin for transactions.

### Integer Overflow/Underflow

The SafeMath and the OpenZeppelin token libraries are used to avoid integer overflow and underflow.
