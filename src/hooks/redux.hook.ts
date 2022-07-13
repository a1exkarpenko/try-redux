import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../stores/reducers'

export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector
// export const useAppDispatch:
