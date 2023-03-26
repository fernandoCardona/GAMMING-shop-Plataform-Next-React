//IMPORTS DE REACT/NEXT:
//IMPORTS DEPENDENCIAS DE TERCEROS:
import { Button } from 'semantic-ui-react';
//IMPORTS DEPENDENCIAS DE LA APP:
import { JoinLayout } from '@/layouts';
//IMPORTS COMPONENTS DE LA APP:

//IMPORTS Styles/Images DE LA APP:
import styles from './sign-in.module.scss';

export const SignInPage = () => {

    
    return (
        <JoinLayout>
            <div className={ styles.signIn }>
                <h3>SignInPage</h3>
            </div>
        </JoinLayout>
        
    )
}

export default SignInPage;
