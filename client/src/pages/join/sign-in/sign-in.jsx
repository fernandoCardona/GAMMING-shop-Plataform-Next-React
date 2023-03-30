//IMPORTS DE REACT/NEXT:
import Link from "next/link";
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Button } from 'semantic-ui-react';
//IMPORTS DEPENDENCIAS DE LA APP:
import { JoinLayout } from '@/layouts';
//IMPORTS COMPONENTS DE LA APP:
import { LoginForm } from "@/components/Auth";
//import { Seo } from "@/components/Shared";

//IMPORTS Styles/Images DE LA APP:
import styles from './sign-in.module.scss';

export const SignInPage = () => {

    
    return (
        <JoinLayout>
        <div className={styles.signIn}>
          <h3>Login</h3>
          <LoginForm />

          <div className={styles.actions}>
            <Link href="/join/sign-up">Don´t have account?</Link>
          </div>
        </div>
      </JoinLayout>
        
    )
}

export default SignInPage;
