import { Accordion, AccordionDetails, AccordionSummary, Button, List, ListItem, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Popover from '@radix-ui/react-popover';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

//型エイリアス
type SidenavMultipleProps = {
  children: React.ReactNode;
  label: string;
  icon: IconProp | undefined;
  isOpen: boolean;
};

export const SidenavMultiple: React.FC<SidenavMultipleProps> = ({ children, label, icon, isOpen }) => {
  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      {isOpen ? (
        // サイドメニュー開いた時
        <Accordion sx={{ boxShadow: 'none', borderRadius: 0 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              padding: '0 20px',
              ':hover':{
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              '.MuiAccordionSummary-content': {
                margin: 0,
                alignItems: 'center',
                justifyContent: 'flex-start',
              },
              '&.Mui-expanded': {
                minHeight: 48,
              },
              '.MuiAccordionSummary-contentGutters': {
                '&.Mui-expanded': {
                  margin: 0,
                },
              }
            }}
          >
            {icon && (
              <FontAwesomeIcon icon={icon} className='w-[24px]'/>
            )}
            <Typography
              sx={{
                opacity: 1,
                width: 'auot',
                marginBlock: '4px',
                marginLeft: '10px',
              }}
            >
              {label}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              marginLeft: '20px',
              paddingBlock: 0,
              paddingRight: 0,
            }}
          >
            <List sx={{ padding: 0 }}>
              { children }
            </List>
          </AccordionDetails>
        </Accordion>
      ) : (
        // サイドメニュー閉じた時
        // MUIのPopoverコンポーネントはpopを表示すると画面全体のスクロールが出来ないなど使い勝手が悪いため、PopoverだけRadix-uiを使ってみた
        // [https://www.radix-ui.com/primitives/docs/components/popover]
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button
              sx={{
                padding: '8px 20px',
                minHeight: '48px',
                color: '#000',
                position: 'relative',
              }}
            >
              {icon && (
                <FontAwesomeIcon icon={icon} className='w-[24px]'/>
              )}
            </Button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className='PopoverContent z-[9999] relative top-[-48px] right-[-73px]' sideOffset={0}>
              <div style={{ width: '220px', background: '#ddd' }}>
                <List sx={{ padding: 0 }}>
                  { children }
                </List>
              </div>
              {/* 閉じるボタンも実装可能 */}
              {/* <Popover.Close className='PopoverClose' aria-label='Close'>
                close
              </Popover.Close> */}
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      )}
    </ListItem>
  )
}

export default SidenavMultiple;
