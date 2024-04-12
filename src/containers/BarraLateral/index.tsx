import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
      </div>
      <S.Filtros>
        <FiltroCard
          valor={enums.Status.PENDENTE}
          criterio="status"
          legenda="pendentes"
        />
        <FiltroCard
          valor={enums.Status.CONCLUIDA}
          criterio="status"
          legenda="conluídas"
        />
        <FiltroCard
          valor={enums.Prioridade.URGENTE}
          criterio="prioridade"
          legenda="urgentes"
        />
        <FiltroCard
          valor={enums.Prioridade.IMPORTANTE}
          criterio="prioridade"
          legenda="importantes"
        />
        <FiltroCard
          valor={enums.Prioridade.NORMAL}
          criterio="prioridade"
          legenda="normal"
        />
        <FiltroCard criterio="todas" legenda="todas" />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
