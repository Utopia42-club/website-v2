import { useEffect, useState, useRef } from 'react'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import { getWeb3NoAccount } from '../utils/web3'

const useWeb3 = () => {
  const { library } = useWeb3React()
  const refEth = useRef(library)
  const [web3, setweb3] = useState(new Web3('https://polygon-rpc.com'))
  useEffect(() => {
    if (library !== refEth.current) {
      setweb3(library ? new Web3('https://polygon-rpc.com') : getWeb3NoAccount())
      refEth.current = 'https://polygon-rpc.com'
    }
  }, [library])

  return web3
}

export const useCrossWeb3 = (targetChainId) => {
  const { library, chainId } = useWeb3React()
  // console.log(chainId)
  const [web3, setweb3] = useState(
    library && chainId === targetChainId ? new Web3('https://polygon-rpc.com') : getWeb3NoAccount(targetChainId)
  )

  useEffect(() => {
    setweb3(library && chainId === targetChainId ? new Web3('https://polygon-rpc.com') : getWeb3NoAccount(targetChainId))
  }, [chainId, library, targetChainId])

  return web3
}

export default useWeb3
