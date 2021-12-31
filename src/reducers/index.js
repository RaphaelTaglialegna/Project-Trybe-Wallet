import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const rootreducer = combineReducers({ user, wallet });

export default rootreducer;

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
