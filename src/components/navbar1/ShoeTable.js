

import React,{useEffect,useState} from 'react'
    
    

function ShoeTable() {
  const [newData, setNewData] = useState([])

    useEffect(() => {
        
            
     
    }, [])
  return (
   
   <div>
          <h1>Shoes' Table</h1>
<table>
      <thead>
        <tr>
          <td>
            <label>Brand</label>
          </td>
          <td>
            <label>size</label>
          </td>
          <td>
            <label>Price</label>
          </td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
   </div>
   
  );
}

export default ShoeTable;