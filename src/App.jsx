import { useState } from 'react'
import Button from './components/Button/Button'
import ModalText from './components/ModalText/ModalText'
import ModalImage from './components/ModalImage/ModalImage'
import './App.scss'

function App(props) {

  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openFirstModal = () => setIsFirstModalOpen(true);
  const openSecondModal = () => setIsSecondModalOpen(true);
  const closeFirstModal = () => setIsFirstModalOpen(false);
  const closeSecondModal = () => setIsSecondModalOpen(false);

  return (
    <div className="app">
      <Button className="button-first" onClick={openFirstModal}>Open first modal</Button>
      <Button className="button-second" onClick={openSecondModal}>Open second modal</Button>
        {isFirstModalOpen && (
          <ModalText
            title="My First modal" 
            desc="This is my first modal" 
            handleClose={closeFirstModal} 
            handleOk={closeFirstModal}  />
        )}
        {isSecondModalOpen && (
          <ModalImage
            className
            title="My Second modal" 
            desc="This is my second modal"
            handleClose={closeSecondModal} 
            handleOk={closeSecondModal}  />
        )}
    </div>
  )
}

export default App
