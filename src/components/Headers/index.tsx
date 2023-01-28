import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'

import { NewTransactionModalDialog } from '../NewTransactionModalDialog'

import logoImg from '../../assets/logo.svg'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModalDialog />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
