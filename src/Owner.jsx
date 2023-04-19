import Layout from './Layout';
import './style/Owner.css'

const Owner = () => {
    return (
        <Layout>
            <div className='own-container'>
                <div className='own-top'>
                    <h1>Aim (M) - Group C - 48</h1>
                    <img src="https://images.unsplash.com/photo-1585507252242-11fe632c26e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="crazy" />
                </div>
                <div className='own-bottom'>
                    <h3>Short Biogragphy:</h3>
                    <p>Hi I'm M. <br /> </p>
                </div>
            </div>
        </Layout>
    );
}

export default Owner