import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store';

export const useTypesSelector:TypedUseSelectorHook<RootState> = useSelector;