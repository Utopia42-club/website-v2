
import { GradientTitle } from '../text/Title';
import { Input } from '../common/FormControlls';
import { Box } from './Container';
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react';
import { Container, Wrapper } from '../container/Container'
import ActionButton from '../actionButton/ActionButton'
import { Flex } from 'rebass'
import useBrightIdApi from '../../hooks/useBrightIdApi'
import useMinterNft from '../../hooks/useMinterNft'
import useMintNFTsetBrightId from '../../hooks/useMintNFTsetBrightId'
import useUserRegisterNFTs from '../../hooks/useUserRegisterNFTs';
import { useWeb3React } from '@web3-react/core';
import BrightId from '../BrightIdApp/BrightIdApp';
import PageMenu from '../pageMenu';


const MintCitizenNFT = () => {
    const { account, chainId} = useWeb3React()
    let toAddress = account
    const [count, setCount] = useState();
    const [checked, setChecked] = useState(false);
    const [registeredNFT, setRegisteredNFT] = useState('0')
    const [registeredWallet, setRegisteredWallet] = useState(false)
    const brightIdData = useBrightIdApi()
    const getRegisterNFTs = useUserRegisterNFTs(account)
    const [status, setStatus] = useState('Mint')
    const mint = useMinterNft(account, chainId, count, toAddress)
    const mintAndSet = useMintNFTsetBrightId(toAddress)
    
    const handleChange = async () => {
        console.log('handle change')
        if (!account) {
            return Swal.fire({
                text: 'Wallet is not connect',
                timer:1500,
                icon: 'error',
                showConfirmButton: false,
            })
        }
        if (chainId != 4){
            return
        }
        console.log(checked)
        if(checked){
            setStatus('Mint')
        }
        setChecked(!checked);
    };

    const handelCountChange =  (value) => {
        setCount(value)
    }

    const isRegisteredWallet = async () => {
        let data = await brightIdData()
        if (data.error) {
            console.log(data.error)
            setRegisteredWallet(false)
            setStatus("You'r wallet is not registered on brightID")
        }
        else{
            setRegisteredWallet(true)
        }
    }

    const isRegisteredNFT = async () => {
        setRegisteredNFT(await getRegisterNFTs())
        if (registeredNFT != '0'){
            setStatus("Registered before")
        }
    }


    useEffect(() => {
        if(checked === true){
            isRegisteredWallet()
            isRegisteredNFT()
            console.log(registeredWallet, registeredNFT, status)
            if (registeredNFT == '0' && registeredWallet == true) {
                setStatus('Mint and register')
            }
        }
    }, [checked])


    const handleMint = async () => {
        if (registeredNFT == '0' && registeredWallet == true) {
            let data = await brightIdData()
            if (data.error) {

              return Swal.fire({
                icon: 'error',
                text: "You'r account is not registered on BrightID",
                showConfirmButton: false,
                timer: 3500,
              })
            }
            console.log(data.error)
            try{
              setStatus('Mint and register ...')
              await mintAndSet(data)
              setStatus('Mint and register')
            }
            catch{
                console.log('err')
                setStatus('Mint and register')
            }
        }
        else{
            if (!count) {
                return Swal.fire({
                  icon: 'error',
                  text: 'Please Enter count',
                  showConfirmButton: false,
                  timer: 1500,
                })
              } 

              try{
                setStatus('Minting ...')
                await mint()
                setStatus('Mint')
              }
              catch{
                console.log('error')
                setStatus('Mint')
              }
        }
    }

    return(
    <>
        <PageMenu />
    <Container>
      <Wrapper maxWidth="300px" width="100%"></Wrapper>
      <Wrapper maxWidth="470px" width="100%">
      <Flex flexDirection="column" justifyContent="center" alignItems="center" width="100%">
      <GradientTitle margin="0 0 10px">Mint Citizen NFTs</GradientTitle>
      <Box background="linear-gradient(0deg, #D3DBE3 0%, rgba(231, 235, 243, 0) 126.95%)">
             {!checked ? 
              <Input
                label = 'Count'
                placeholder = 'Count'
                value = {count ?? ''} 
                onChange = {(event) => handelCountChange(event.target.value)} 
            /> 
            :''}
            <div>
            <div style={{display:"flex", marginBottom:"100px", marginTop:"20px"}}>
                <label style={{marginRight:"10px"}}>
                    Connect NFT to brightID
                </label>
                <input 
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange} 
                />
            </div>
        {!registeredWallet && checked? <BrightId account={account}/> : ''}
        </div>
        </Box>

      <ActionButton handleMint={handleMint} status={status} checked={checked}/>
      {/* <button onClick={() => deactivate()}>disconnect</button> */}
      </Flex>
      </Wrapper>
      <Wrapper maxWidth="300px" width="100%">

      </Wrapper>
    </Container>
    </>
    )


}





export default MintCitizenNFT