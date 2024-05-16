import './Home.css'
import EditBoxComponent from '../components/EditBox/EditBoxComponent'
import Display from '../components/Canvas/Display'

function Home() {

    return (
        <div className='flex flex-col sm:flex-row w-screen'>

            <Display />
            <EditBoxComponent />

        </div>
    )
}

export default Home;