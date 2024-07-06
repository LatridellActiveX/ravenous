import React from 'react';
import { Business } from "./Business"

export const BusinessList = () => {
  return (
    <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 1}}>
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
    </div>
  )
}