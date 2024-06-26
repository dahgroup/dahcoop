import { useState } from 'preact/hooks'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80vw",
  bgcolor: 'background.paper',
  border: '2px solid #049DBF',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const btnStyle = {
  borderBottom: '2px solid #000',
  width: "90vw",
  p: 3,
  m: 2,
  bgcolor: "#F7F7F7"
};

export function Transaction() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={btnStyle}>Transaction History</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Transaction Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            NGN 100,000 - Deposit Confirmed
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}