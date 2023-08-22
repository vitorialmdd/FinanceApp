import { Container } from './style';
import { NewTransactionModal } from './../ModalComponent';
import incomeImg from "./../../assets/income.svg"; 
import outcomeImg from "./../../assets/outcome.svg";
import iconeImg from "./../../assets/icone.svg";
import { useState } from 'react';

export function MenuComponent () {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
  useState(false);


  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
    <div>
      <header>
        <p>Incomes</p>
        <img src={incomeImg} alt="incomes"/>
      </header>
      <strong>R$ 1.000,00</strong>
    </div>
    <div>
      <header>
        <p>Outcomes</p>
        <img src={outcomeImg} alt="outcomes"/>
      </header>
      <strong>R$ 500,00</strong>
    </div>
    <div>
      <header>
        <p>Balance</p>
        <img src={iconeImg} alt="balance"/>
      </header>
      <strong>R$ 500,00</strong>
    </div>
    <div>
      <div onClick={handleOpenNewTransactionModal}>
        A
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      </div>
    </div>
  </Container>
  )
}