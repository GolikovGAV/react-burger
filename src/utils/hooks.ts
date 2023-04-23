import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { TDispatch, TRootState } from '../services/store';

export const useCustomDispatch = () => useDispatch<TDispatch>();
export const useCustomSelector: TypedUseSelectorHook<TRootState> = useSelector;
