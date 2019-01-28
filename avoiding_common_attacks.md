##Avoiding Common Attacks

###Restricting Access

Require statements allows only specific addresses to use these contracts.

###DoS with Block Gas Limit

Looping iteration is hard coded to prevent reaching block gas limit

###Reentrancy Attacks

Delegate call is used to protect against reentrancy.

###Tx Origin Attacks

Using msg.sender instead of tx.origin for transactions.

###Integer Overflow/Underflow

The SafeMath and the OpenZeppelin tokens library has been used to avoid integer the integer overflow and underflow.
