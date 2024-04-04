import Header from '../Components/Sections/Header';
import styled from 'styled-components';
function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
        </div>
    )
}

const StyledBanner = styled.div`
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};
    top:0;
    width: 100%;
    min-height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1542572937-0913e7e3e61b?w=2500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxPVjV0MGpSVTFqVXx8ZW58MHx8fHx8');
    background-size: cover;
    .bannerContent {
        padding-top: 40px;
        display: flex;
        align-items: center;
        justify-content: left;
        min-height: calc(100vh - 40px);
        .textContainer {
            background-color: ${props => props.theme.colors.fog};
            box-shadow: 0px 0 120px 120px ${props => props.theme.colors.fog};
            padding: 10px 20px;
            margin-left: 7%;
            width: 40%;
            > h1 {
                color: ${props => props.theme.colors.dark};
                margin: 0 0 30px 0;
            }    
            .subHeadingWrapper {
                display: flex;
                justify-content: left;
                gap: 30px;
                > h3{
                    margin: 0 0 0 0;
                    color: ${props => props.theme.colors.darkAccent};
                }
                .tree{
                    font-weight: 100;
                }
                
            }
        }
        
    }
`;


function Banner() {
    return (
        <StyledBanner>
            <div className='bannerContent'>
                <div className='textContainer'>
                    <h1>Hi, I'm Hayden</h1>
                    <div className='subHeadingWrapper'>
                        <h3> Developer</h3><h3 className='tree'>↟</h3>
                        <h3>Designer</h3><h3 className='tree'>↟</h3>
                        <h3>Educator</h3>
                    </div>
                    <p>I'm passionate about creating solutions through programming and design, and empowering others through education and mentorship.</p>
                </div>
            </div>
        </StyledBanner>
    )
}

export default Home;