import { StyledDialog, StyledDialogTitle } from './style';
import { items as marketItems } from '../../constants/items';
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
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ChangeEvent, useState } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { useStore } from '../../hooks/useStore';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

export interface MarketModalProps {
  open: boolean;
  onClose: () => void;
  isPurchase?: boolean;
}

const StyledTableCell = styled(TableCell)`
  word-break: keep-all;
`;

const StyledTextField = styled(TextField)`
  width: 80px;
`;

export const MarketModal = observer((props: MarketModalProps) => {
  const { onClose, open, isPurchase = true } = props;
  const { userStore, marketStore } = useStore();
  const [count, setCount] = useState({
    NDVA: 0,
    DSL: 0,
  });

  const [failOpen, setFailOpen] = useState(false);

  const handleClose = () => {
    onClose();
    setCount({
      NDVA: 0,
      DSL: 0,
    });
  };

  const handleCloseFail = () => {
    setFailOpen(false);
  };

  const handleCountChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    stockName: string,
  ) => {
    const num = Number(e.target.value);
    setCount({ ...count, [stockName]: num });
  };

  const handleClickBuy = async (stockName, count) => {
    const dto = {
      userId: userStore.user.userId,
      stockName,
      count,
    };
    const res = await marketStore.buy(dto);
    if (res) handleClose();
    else setFailOpen(true);
  };

  const handleClickSell = async (stockName, count) => {
    const dto = {
      userId: userStore.user.userId,
      stockName,
      count,
    };
    const res = await marketStore.sell(dto);
    if (res) handleClose();
    else setFailOpen(true);
  };

  return (
    <>
      <StyledDialog onClose={handleClose} open={open} disableScrollLock>
        <StyledDialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
          style={{ margin: 0 }}
        >
          {isPurchase ? '주식 시장' : '내 자산'}
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
                <StyledTableCell align="center" style={{ width: '60px' }}>
                  사진
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '20px' }}>
                  이름
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '90px' }}>
                  가격
                </StyledTableCell>
                {!isPurchase && (
                  <StyledTableCell align="center" style={{ width: '80px' }}>
                    가진 주식 수
                  </StyledTableCell>
                )}
                <StyledTableCell align="center" style={{ width: '80px' }}>
                  개수
                </StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(marketItems).map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell align="center" component="th" scope="row">
                    <img src={item.bagImgSrc} width={60} height={60} />
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.id === 'NDVA'
                      ? userStore.user.stock.NDVA
                      : userStore.user.stock.DSL}
                    원
                  </StyledTableCell>
                  {!isPurchase && (
                    <StyledTableCell align="center">
                      {item.id === 'NDVA'
                        ? userStore.user.player_shares.NDVA
                        : userStore.user.player_shares.DSL}
                      개
                    </StyledTableCell>
                  )}

                  <StyledTableCell align="center">
                    <StyledTextField
                      id="outlined-number"
                      type="number"
                      value={item.id === 'NDVA' ? count.NDVA : count.DSL}
                      defaultValue={0}
                      onChange={(e) => handleCountChange(e, item.id)}
                      InputProps={{ inputProps: { min: 0 } }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      onClick={
                        isPurchase
                          ? () =>
                              handleClickBuy(
                                item.id,
                                item.id === 'NDVA' ? count.NDVA : count.DSL,
                              )
                          : () =>
                              handleClickSell(
                                item.id,
                                item.id === 'NDVA' ? count.NDVA : count.DSL,
                              )
                      }
                      style={{ height: '56px' }}
                      disabled={item.id === 'NDVA' ? !count.NDVA : !count.DSL}
                    >
                      {isPurchase ? '구입하기' : '판매하기'}
                    </Button>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledDialog>
      <Dialog open={failOpen} onClose={handleCloseFail}>
        <DialogTitle>
          {isPurchase
            ? '잔액이 부족합니다'
            : '가지고 있는 주식 갯수가 부족합니다.'}
        </DialogTitle>
        <Button onClick={handleCloseFail}>{'닫기'}</Button>
      </Dialog>
    </>
  );
});
