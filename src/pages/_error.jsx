import AppLayout from '@layouts/AppLayout';
import Link from 'next/link';
import Image from 'next/image';
import NotFoundErrorImg from '@images/404-error.svg';
import styles from '@styles/error.module.scss'

function Error({ statusCode }) {
    return (
        <AppLayout>
            <div className={styles['error-container']}>
                {statusCode == 404 ?
                    <Image
                        width={400}
                        src={NotFoundErrorImg}
                        alt={`Error ${statusCode}, no se encontró la página que buscas"`}
                    />
                    : null
                }

                <h3>{statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}
                    <Link href="/"> Go Back.</Link>
                </h3>
            </div>
        </AppLayout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error