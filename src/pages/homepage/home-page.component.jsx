import React from 'react'
import './home-page.styles.scss'

import Directory from '../../components/directory/directory.components'
import HomePageContainer from './home-page.styles'

const HomePage = () => (
    <HomePageContainer>
        <Directory></Directory>
    </HomePageContainer>
);

export default HomePage;