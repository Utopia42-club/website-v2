
import { GradientTitle } from '../text/Title';
import { Input } from '../common/FormControlls';
import { Box } from './Container';
import Swal from 'sweetalert2'
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import { Container, Wrapper } from '../container/Container'
// import ActionButton from '../actionButton/ActionButton'
import { Flex } from 'rebass'
import useBrightIdApi from '../../hooks/useBrightIdApi'
import useOwnerToken from '../../hooks/useOwnerToken';
import useUserRegisterNFTs from '../../hooks/useUserRegisterNFTs';
import { useWeb3React } from '@web3-react/core';
import BrightId from '../BrightIdApp/BrightIdApp';
import RegisterButton from '../registerButton/RegisterButton'
import useUserNFTs from '../../hooks/useUserNFTs';
import useSafeTransfer from '../../hooks/useSafeTransfer';
import { Button } from '../button/Button'
import PageMenu from '../pageMenu';


const NftList = () => {
    const { account } = useWeb3React()
    const [registeredNFT, setRegisteredNFT] = useState('0')
    const [registeredWallet, setRegisteredWallet] = useState(null)
    const [NFTs, setNFTs] = useState(null);
    const [selectedNFT, setSelectedNFT] = useState(null)
    const brightIdData = useBrightIdApi()
    const getRegisterNFTs = useUserRegisterNFTs(account)
    const [status, setStatus] = useState()
    const isOwner = useOwnerToken(selectedNFT, account)
    const getNFTs = useUserNFTs(account)
    const [toAddress, setToAddress] = useState()
    const safeTransfer = useSafeTransfer()
    const [transferNTF, setTransferNFT] = useState('Transfer NFT')


    // const handleDisconnect = () => {
    //     setNFTs(null)
    //     localStorage.removeItem(account);
    //     deactivate()
    //     console.log(account)
    //     location.reload()
    // }

    const RegisteredNftStyle = {
        border:"1px solid rgb(196 177 206)",
        margin:"10px",
        padding:'8px',
        backgroundColor:"rgb(196 177 206)",
        borderRadius:"5px",
        marginBottom:"40px",
      }
    
      const selectedNftStyle = {
        border:"1px solid rgb(196 177 206)",
         margin:"10px",
         padding:'10px',
         cursor:"pointer",
         backgroundColor:"rgb(196 177 206)",
         borderRadius:"5px"
      }
    
      const NftStyle = {
        border:"1px solid #ccc",
         margin:"10px",
         padding:'10px',
         cursor:"pointer",
         backgroundColor:"#ccc",
         borderRadius:"5px"
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



    const checkNFT = async () => {
        setSelectedNFT(null)
        setNFTs(await getNFTs())
        setRegisteredNFT(await getRegisterNFTs())
        isRegisteredWallet()
        isRegisteredNFT()
        if(registeredNFT == '0' && registeredWallet){
            setStatus('Register')
        }
    }

    const handleTransfer = async () => {
        if (!toAddress) {
          return Swal.fire({
            text:"Please enter Address",
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          })
        }
        if (!selectedNFT) {
          return Swal.fire({
            text:"Please select NFT ID",
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          })
        }
        try{
          setTransferNFT('Transferring ...')
          await safeTransfer(toAddress, selectedNFT)
          setTransferNFT('Transfer NFT')
          setNFTs(null)
          setSelectedNFT(null)
          updateData()
        }
        catch{
            console.log('error')
            setTransferNFT('Transfer NFT')
        }
    }


    const updateData = useCallback(async () => {
        setNFTs(await getNFTs())
        setRegisteredNFT(await getRegisterNFTs())
      })

    

    useEffect(() => {
        checkNFT()

    }, [account])
    


    // useEffect(() => {
    //         isRegisteredWallet()
    //         isRegisteredNFT()
    //         const update = async () => {
    //             setNFTs(await getNFTs())
    //             setRegisteredNFT(await getRegisterNFTs())
    //           }
    //           update()
    //         console.log(registeredWallet, registeredNFT, status)
    //         if (registeredNFT == '0' && registeredWallet == true) {
    //             setStatus('Mint and register')
    //         }
        
    // }, [account])


    const handleSelectToken = (item) => {
        if(registeredNFT > 0){
          return Swal.fire({
            icon: 'error',
            text: 'Yor registered before',
            showConfirmButton: false,
            timer: 1500,
          })
        }
    
        if (selectedNFT === item) {
          console.log('equal')
          setSelectedNFT(null)
    
        }
        else {
          console.log(item)
          setSelectedNFT(item)
        }
    }

    const handleRegister = async () => {
        console.log(selectedNFT)
        if(!selectedNFT){
          return Swal.fire({
            text: "Please select NFT ID",
            icon: 'error',
            timer:1500,
            showConfirmButton: false,
          })
        }
        let data = await brightIdData()
        if(!data.error){
          try{
            await isOwner(data)
          }
          catch{
            console.log('error')
          }
        }
        else{
          Swal.fire({
            text: "You'r account is not registered on BrightID",
            icon: 'error',
            timer:3500,
            showConfirmButton: false,
          })
          console.log(data.error)
        }
    }

    return(
    <>
    <PageMenu />
    <Container>
      <Wrapper maxWidth="300px" width="100%"></Wrapper>
      <Wrapper maxWidth="470px" width="100%">
      <Flex flexDirection="column" justifyContent="center" alignItems="center" width="100%">
      <GradientTitle margin="0 0 10px">Transfer NFT</GradientTitle>
      <Box background="linear-gradient(0deg, #D3DBE3 0%, rgba(231, 235, 243, 0) 126.95%)">
      {registeredNFT != '0' ? <div> NFT ID <button style={RegisteredNftStyle}>{registeredNFT}</button> registered before</div> : ''}
      {/* {account ? <Button onClick={checkNFT}>My NFTs</Button> : ''} */}
      { NFTs && 
        <div style={{display:"flex"}}>
          {NFTs.map((item) => {
           return <div key={+item}>
                    <button 
                      id={+item} 
                      onClick={(item) => handleSelectToken(item.target.id)} 
                      style= { selectedNFT == item ? selectedNftStyle : NftStyle } 
                      key={+item}>{+item}
                    </button>
                  </div>
          })
        }
        </div>
      }
        <Input placeholder='To address' value={toAddress ?? ''} onChange={(event) => {setToAddress(event.target.value)}} />
        <Button margin="25px 0 0" background="#5F5CFE"  onClick={handleTransfer}>{transferNTF}</Button>
        <div style={{marginTop:"30px", borderTop:"1px solid #ccc", paddingTop:"10px"}}>
        <GradientTitle margin="0 0 10px">Register NFT</GradientTitle>
        {!registeredWallet && account? <BrightId account={account}/> : ''}
        </div>
        </Box>
      <RegisterButton  handleRegister = {handleRegister} status={status}/>
      </Flex>
      </Wrapper>
      <Wrapper maxWidth="300px" width="100%">

      </Wrapper>
    </Container>
    </>
    )


}





export default NftList