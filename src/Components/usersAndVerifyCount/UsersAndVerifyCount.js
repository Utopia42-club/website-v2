import React, { useEffect, useState } from 'react'
import useCitizenIDVerifications from '../../hooks/useCitizenIDVerifications'
import useGetTotalSupply from '../../hooks/useGetTotalSupply'

const UsersAndVerifyCount = () => {
  const [citizenIDVerifications, setCitizenIDVerifications] = useState()
  const [totalSupply, setTotalSupply] = useState()
  const itemsCount = useCitizenIDVerifications()
  const getTotalSupply = useGetTotalSupply()

  const getCount = async () => { 
    setCitizenIDVerifications(await itemsCount());
    setTotalSupply(await getTotalSupply());
  }

  useEffect(() => {
    getCount()
  }, [])

  return (
      <div style={{border:'2px solid #814f8c',padding:'5px 62px', borderRadius:'15px',marginTop:'15px'}}>
        <div style={{width:'100%', textAlign:'center', color:'#814f8c'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', columnGap: '10px', marginTop:'5px', marginBottom:'5px'}}>
            Total Users:
            <div>
              {totalSupply}
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', columnGap: '10px', marginBottom:'5px'}}>
          Verified users:
            <div>
              {citizenIDVerifications}
            </div>
          </div>
        </div>
      </div>
  )
}

export default UsersAndVerifyCount
