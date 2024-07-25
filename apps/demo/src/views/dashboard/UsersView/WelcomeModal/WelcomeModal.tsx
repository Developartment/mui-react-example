import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useTranslation } from 'react-i18next'

interface WelcomeModalProps {
    onClose: () => void
}

const WelcomeModal = ({ onClose }: WelcomeModalProps) => {
    const { t } = useTranslation()

    return (
        <Dialog
            open={true}
            onClose={onClose}
            sx={{
                '.MuiPaper-root': {
                    width: '100%',
                    maxWidth: '700px',
                },
            }}
        >
            <DialogTitle>{t('labels.welcome-modal')}</DialogTitle>
            <DialogContent>
                {t('texts.welcome-modal-description')}
            </DialogContent>
        </Dialog>
    )
}

export default WelcomeModal
