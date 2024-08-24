import React from 'react';
import { Business } from "./Business"
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';

export const BusinessList = () => {
  return (
    <div style={{margin: 'auto', display: 'flex', flexDirection: 'column', gap: 1}}>
      <div style={{backgroundColor: 'tan', width: '100%', height: 'auto', alightItems: 'center', justifyContent: 'center'}}>
        <h1 style={{textAlign: 'center', color: 'white'}}>Ravenous</h1>
      </div>
      <br></br>
      <div style={{margin: 'auto', display: 'flex', flexDirection: 'row', gap: 10}}>
        <input type="text" placeholder='Search Businesses' style={{width: '20rem', height: '2rem', margin: 'auto'}}/>
        <input type="text" placeholder="Search Locations" style={{width: '20rem', height: '2rem', margin: 'auto'}}/>
      </div>
      <hr></hr>
      <input type="submit" value="Search" style={{width: '20rem', height: '2rem', margin: 'auto'}}/>
      <hr></hr>
      <div style={{ margin: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 1}}>
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    </div>
  )
}