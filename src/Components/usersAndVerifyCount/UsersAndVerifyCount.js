import React, { useEffect, useState } from 'react'
import useCitizenIDVerifications from '../../hooks/useCitizenIDVerifications'
import useGetTotalSupply from '../../hooks/useGetTotalSupply'

const UsersAndVerifyCount = () => {
  const [citizenIDVerifications, setCitizenIDVerifications] = useState('...')
  const [totalSupply, setTotalSupply] = useState('...')
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
      <div style={{border:'2px solid #814f8c',padding:'3px 48px', borderRadius:'15px',marginTop:'15px', minWidth:'270px'}}>
        <div style={{width:'100%', textAlign:'center', color:'#814f8c'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', columnGap: '10px', marginTop:'5px', marginBottom:'5px'}}>
        Utopia42 Citizens:
            <div>
              {totalSupply}
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', columnGap: '10px', marginBottom:'5px'}}>
          Verified Citizens:
            <div>
              {citizenIDVerifications}
            </div>
          </div>
        </div>
      </div>
  )
}

export default UsersAndVerifyCount
