//@ts-ignore
import { Toaster } from 'react-hot-toast';
import { theme } from '../../styles/theme';

export const ToasterContainer = () => {
    return (
        <div style={{ zIndex: '10000000' }}>
            <Toaster
            position="bottom-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                // Define default options
                className: '',
                duration: 3000,
                style: {
                    background: `${theme.navyBlue}`,
                    color: `${theme.strongCream}`,
                },
                success: {
                    duration: 3000,
                    theme: {
                        primary: `${theme.navyBlue}`,
                        secondary: `${theme.strongCream}`,
                    },
                },
            }}
        />
        </div>
    )
}