import { StyledDialog, StyledDialogTitle } from './style';
import { items } from '../../constants/work';
import {
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import workingImg from '../../assets/working.png';

export interface WorkModalProps {
  open: boolean;
  onClose: () => void;
}

export const WorkModal = observer((props: WorkModalProps) => {
  const { open, onClose } = props;

  const [failOpen, setFailOpen] = useState(false);
  const [working, setWorking] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleWorkingComplete = () => {
    setWorking(false);
  };

  const handleCloseFail = () => {
    setFailOpen(false);
    handleClose();
  };

  const handleClickBuy = async () => {
    setWorking(true);
    setTimeout(() => {
      handleWorkingComplete();
    }, 2000);
  };

  return (
    <>
      <StyledDialog onClose={handleClose} open={open} disableScrollLock>
        <StyledDialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
          style={{ margin: 0 }}
        >
          {'일하기'}
        </StyledDialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" style={{ width: '90px' }}>
                  사진
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '45px' }}>
                  이름
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '90px' }}>
                  수익
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '30px' }}>
                  피로도 소모
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '90px' }}>
                  설명
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{ width: '80px' }}
                ></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell align="center" component="th" scope="row">
                    <img src={item.imgSrc} width={60} height={60} />{' '}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.income + '원'}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.energySpent}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.description}
                  </StyledTableCell>{' '}
                  <StyledTableCell align="center">
                    <Button onClick={handleClickBuy} style={{ height: '56px' }}>
                      {'일하기'}
                    </Button>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledDialog>
      <Dialog open={failOpen} onClose={handleCloseFail}>
        <DialogTitle>{'피로도가 부족합니다'}</DialogTitle>
        <Button onClick={handleCloseFail}>{'닫기'}</Button>
      </Dialog>

      <StyledDialog
        open={working}
        onClose={handleWorkingComplete}
        disableScrollLock
      >
        <DialogTitle
          style={{
            textAlign: 'center',
            fontSize: '32px',
          }}
        >
          Working...
        </DialogTitle>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={workingImg} style={{ width: '500px', height: '500px' }} />
        </div>
      </StyledDialog>
    </>
  );
});

const StyledTableCell = styled(TableCell)`
  word-break: keep-all;
`;
