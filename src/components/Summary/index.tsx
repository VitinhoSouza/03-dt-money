import { useTheme } from 'styled-components'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'

import * as S from './styles'

export const Summary = () => {
  const theme = useTheme()
  const summary = useSummary()

  return (
    <S.SummaryContainer>
      <S.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </S.SummaryCard>

      <S.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </S.SummaryCard>

      <S.SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </S.SummaryCard>
    </S.SummaryContainer>
  )
}
