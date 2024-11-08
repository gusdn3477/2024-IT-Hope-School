import { StyledDialog, StyledDialogTitle } from './style';
import { ItemInterface, items as marketItems } from '../../constants/items';
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

  const [selectedItemList, setSelectedItemList] = useState<ItemInterface[]>([]);
  const [failOpen, setFailOpen] = useState(false);

  const handleClose = () => {
    setSelectedItemList([]);
    onClose();
  };

  const handleCloseFail = () => {
    setFailOpen(false);
    handleClose();
  };

  const handleChangeItem = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    selectedItem: ItemInterface,
  ) => {
    let copiedItemList = _.cloneDeep(selectedItemList);
    let found = false;
    const num = Number(e.target.value);
    if (num === 0) {
      copiedItemList = copiedItemList.filter(
        (item) => item.id !== selectedItem.id,
      );
    } else {
      copiedItemList.map((item) => {
        if (item.id === selectedItem.id) {
          item.count = num;
          found = true;
        }
      });
      if (!found) {
        copiedItemList.push({ ...selectedItem, count: 1 });
      }
    }
    setSelectedItemList(copiedItemList);
  };

  const handleClickBuy = async () => {
    console.log(selectedItemList);
    const dto = {
      id: userStore.user.id,
      items: selectedItemList.map((item) => {
        return {
          itemId: item.id,
          count: item.count,
        };
      }),
    };
    const res = await marketStore.buy(dto);
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
                <StyledTableCell align="center" style={{ width: '90px' }}>
                  사진
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '90px' }}>
                  이름
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '90px' }}>
                  {isPurchase ? '가격' : '1주당 평균 가격'}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '270px' }}>
                  설명
                </StyledTableCell>
                <StyledTableCell align="center" style={{ width: '80px' }}>
                  개수
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(marketItems).map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell align="center" component="th" scope="row">
                    <img src={item.bagImgSrc} width={60} height={60} />{' '}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.price + '원'}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.description}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <StyledTextField
                      id="outlined-number"
                      type="number"
                      defaultValue={0}
                      onChange={(e) => handleChangeItem(e, item)}
                      InputProps={{ inputProps: { min: 0, max: 10 } }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          onClick={handleClickBuy}
          style={{ height: '56px' }}
          disabled={selectedItemList.length === 0}
        >
          {isPurchase ? '구입하기' : '판매하기'}
        </Button>
      </StyledDialog>
      <Dialog open={failOpen} onClose={handleCloseFail}>
        <DialogTitle>{'잔액이 부족합니다'}</DialogTitle>
        <Button onClick={handleCloseFail}>{'닫기'}</Button>
      </Dialog>
    </>
  );
});
