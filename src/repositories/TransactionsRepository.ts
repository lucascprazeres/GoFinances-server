import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const incomeTransactions = await this.find();

    const incomeAmmount = incomeTransactions
      .filter(transaction => transaction.type === 'income')
      .map(transaction => transaction.value)
      .reduce((sum, item) => sum + item, 0);

    const outcomeTransactions = await this.find({ where: { type: 'outcome' } });

    const outcomeAmmount = outcomeTransactions
      .filter(transaction => transaction.type === 'outcome')
      .map(transaction => transaction.value)
      .reduce((sum, item) => sum + item, 0);

    const total = incomeAmmount - outcomeAmmount;

    return {
      income: incomeAmmount,
      outcome: outcomeAmmount,
      total,
    };
  }
}

export default TransactionsRepository;
