//IMPORTS DE REACT/NEXT:
import Link from 'next/link';
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Button } from 'semantic-ui-react';
//IMPORTS DEPENDENCIAS DE LA APP:
//IMPORTS COMPONENTS DE LA APP:
import { JoinLayout } from '@/layouts';
import { RegisterForm } from '@/components/Auth';
import { Seo } from "@/components/Shared";
//IMPORTS Styles/Images DE LA APP:
import styles from './sign-up.module.scss';

const SignUpPage = () => {

    
    return (
        <>
            <Seo title='Register at Gaming plataform'/>
            
            <JoinLayout>
                <div className={styles.signIn}>
                    <h3>Create account</h3>
                    <RegisterForm />

                    <div className={styles.actions}>
                        <Link href="/join/sign-in">Back</Link>
                    </div>
                </div>
            </JoinLayout>
        </>
        
        
    )
}

export default SignUpPage;