import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { TDispatch, TRootState } from '../services/store';

export const CustomUseDispatch = () => useDispatch<TDispatch>();
export const CustomUseSelector: TypedUseSelectorHook<TRootState> = useSelector;
