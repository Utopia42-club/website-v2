import { mrc721MinterAbi } from '../ABI/ABI'
import { getContract } from '../utils/contractHelpers'
import { sendTransaction } from '../utils/sendTx'
import useWeb3 from './useWeb3'

const useMinterNft = (address, chainId, count, toAddress) => {
  console.log(chainId)
  const web3 = useWeb3()
  // const addTransaction = useAddTransaction()
  const contractAddress = '0xaF7f06309dbefd4cA671111B587013B7B58588cc'

  // try {
    const contract = getContract(mrc721MinterAbi, contractAddress, web3)
    console.log(contract)

    const mint = async () => {
      if (!contract) {
        console.error('contract is null')
        return
      }
      
      const price =  await contract.methods.price(count).call()
      console.log(price)
  //   const mint = useCallback(async () => {
  //     // try {
  //       if (!contract) {
  //         console.error('contract is null')
  //         return
  //       }
        return sendTransaction(
          contract,
          'mint',
          [toAddress, count],
          address,
          // info,
          // addTransaction,
          price
        )
      }
  //     // } catch (error) {
  //     //   console.log('Error happend in mint call back', error)
  //     // }
  //   }, [contract, account, chainId])
    return mint
  // } catch (error) {
  //   console.log('error happened in Deposit', error)
  // }
}

export default useMinterNft
