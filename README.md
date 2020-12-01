# Bank tech test

Today, I am going to practice doing a tech test.

## Specification

### Requirements

* I should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## User stories

```
As a user, when I have spare cash
I want to make a deposit into my account
so that I can keep my money safe
```
```
As a user, when I deposit money into my account
I want the date, amount and my updated balance to be recorded
so I can know how much money I got
```
```
As a user, when I want to use my money 
I want to make a withdrawal from my account
so that I can spend my cash
```
```
As a user, when I withdraw money from my account
I want the date, amount and my updated balance to be recorded
so I can know how much money I got
```
```
As a user, when I want to know a history of my transactions
I want to be able to get a statement with all my transactions
so I can know what is going on with my  money
```
