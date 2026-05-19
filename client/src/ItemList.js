import React, {useContext} from 'react'
import { LanguageContext } from './utils';

export default function ItemList() {
    const value = useContext(LanguageContext);
  return (
    <div>ItemList: {value}</div>
  )
}
